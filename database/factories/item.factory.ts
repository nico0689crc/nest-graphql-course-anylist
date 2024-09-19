import { Item, QuantityUnits } from 'src/items/entities/item.entity';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Item, async (faker) => {
  const item = new Item();

  item.name = faker.commerce.productName();
  item.quantity = +faker.number.int({ min: 0, max: 1000 });
  item.quantityUnits = faker.helpers.arrayElement(Object.values(QuantityUnits));

  return item;
});