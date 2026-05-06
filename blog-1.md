# Why `any` is a Type Safety Hole and Why `unknown` is Safer

## Introduction

In TypeScript, type safety is the backbone of reliable code. Yet, many developers fall into the trap of using `any` when dealing with unpredictable data. While `any` seems convenient, it silently disables type checking, creating hidden risks. On the other hand, `unknown` enforces type safety by requiring explicit checks before usage. Let’s explore why `unknown` is the safer choice and how type narrowing helps us handle uncertain data effectively.

## The Problem with `any`

When you declare a variable as `any`, TypeScript stops protecting you. You can assign anything, call any method, and the compiler won’t complain—even if the code will break at runtime.

```ts
let data: any = "Hello";
data(); // No error at compile time, but runtime crash
```

## What is `unknown` ?

The unknown type is a safer alternative to any. It allows any value but does not let you use it without checking its type first.

```ts
let value: unknown = "Hello";

// value.toUpperCase(); ❌ Error

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
}
```
