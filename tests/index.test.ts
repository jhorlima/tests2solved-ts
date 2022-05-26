import { Cupcake, Cookie, Chocolate, Nuts } from '../src/index';

describe('Cupcake', () => {
   it('name function should return “🧁”', () => {
      const myCupcake = new Cupcake();
      expect(myCupcake.name()).toBe('🧁');
   });

   it('name function should return “🧁 with 🍫”', () => {
      const myCupcake = new Chocolate(new Cupcake());
      expect(myCupcake.name()).toBe('🧁 with 🍫');
   });

   it('price function should return 1$ for “🧁”', () => {
      const myCupcake = new Cupcake();
      expect(myCupcake.price()).toBe('1$');
   });

   it('price function should return 1.1$ for “🧁 with 🍫”', () => {
      const myCupcake = new Chocolate(new Cupcake());
      expect(myCupcake.price()).toBe('1.1$');
   });
});

describe('Cookie', () => {
   it('name function should return “🍪”', () => {
      const myCookie = new Cookie();
      expect(myCookie.name()).toBe('🍪');
   });

   it('name function should return “🍪 with 🍫”', () => {
      const myCookie = new Chocolate(new Cookie());
      expect(myCookie.name()).toBe('🍪 with 🍫');
   });

   it('name function should return “🍪 with 🍫 and 🥜”', () => {
      const myCookie = new Nuts(new Chocolate(new Cookie()));
      expect(myCookie.name()).toBe('🍪 with 🍫 and 🥜');
   });

   it('name function should return “🍪 with 🥜 and 🍫', () => {
      const myCookie = new Chocolate(new Nuts(new Cookie()));
      expect(myCookie.name()).toBe('🍪 with 🥜 and 🍫');
   });

   it('price function should return 2$ for “🍪”', () => {
      const myCookie = new Cookie();
      expect(myCookie.price()).toBe('2$');
   });

   it('price function should return 2.1$ for “🍪 with 🍫”', () => {
      const myCookie = new Chocolate(new Cookie());
      expect(myCookie.price()).toBe('2.1$');
   });

   it('price function should return 2.2$ for “🍪 with 🥜”', () => {
      const myCookie = new Nuts(new Cookie());
      expect(myCookie.price()).toBe('2.1$');
   });
});
