# Function

## Function Type Expressions

The syntax `(a: string) => void` means a function with one parameter named a, of type string, that doesn't have a return value.

Use a type alias to name a function type:

```ts
type GreetFunction = (a: string) => void;
```

## Type Annotations

### Parameter Type

When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts.

```ts
function greet(name: string) {
}
```

### Return Type

```ts
function getFavoriteNumber(): number {
    return 26;
}
```

## Optional Parameters
