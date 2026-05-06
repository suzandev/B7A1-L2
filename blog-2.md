---
# 📝 `blog-2.md`

# How Generics Enable Reusable and Type-Safe Code in TypeScript

## Introduction
Generics are one of the most powerful features in TypeScript. They allow developers to create reusable components and functions that work with multiple data types while maintaining strict type safety. This reduces code duplication and improves scalability.
---

## What are Generics?

Generics allow you to define a function or structure that works with different types.

### Example:

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(42);
```
