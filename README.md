# Backend Rick and Morty

## Testing

- toContain

```
  expect(array).toContain('species')
```

Arrays and iterables
You can check if an array or iterable contains a particular item using toContain:

```
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

```

### More information

- https://jestjs.io/docs/using-matchers
