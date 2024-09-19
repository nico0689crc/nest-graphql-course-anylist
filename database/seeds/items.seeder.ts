import { Item } from 'src/items/entities/item.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class ItemSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const itemRepository = dataSource.getRepository(Item);

    const count = await itemRepository.count();

    if (count === 0) {
      const itemFactory = factoryManager.get(Item);
      await itemFactory.saveMany(1000);
      console.log('Seeded 1000 items.');
    } else {
      console.log(`Skipped seeding items. ${count} items already exist.`);
    }
  }
}