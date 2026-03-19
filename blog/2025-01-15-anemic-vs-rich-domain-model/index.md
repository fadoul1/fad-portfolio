---
slug: anemic-vs-rich-domain-model-csharp
title: "Anemic Domain Model vs Rich Domain Model in C#: Why adopt a rich model?"
authors: [fad]
tags: [csharp, ddd, architecture, clean-code]
image: ./anemic-riche-domain.jfif
---

![Article banner](./anemic-riche-domain.jfif)

In modern software development, particularly with the adoption of **Domain-Driven Design (DDD)**, the structure of our data models is crucial. Two approaches often stand in contrast: the **Anemic Domain Model** and the **Rich Domain Model**.

<!-- truncate -->

## 1. The Anemic Domain Model

This is the approach found in the majority of traditional CRUD applications. Here, domain objects are merely "data bags" with properties (getters/setters) but without any business logic.

### Code example (Anemic):

```csharp
public class Order
{
    public int Id { get; set; }
    public List<OrderLine> Lines { get; set; }
    public decimal Total { get; set; }
    public string Status { get; set; }
}

// Logic is offloaded to a service
public class OrderService
{
    public void ValidateOrder(Order order)
    {
        if (order.Lines.Count == 0)
            throw new Exception("An order must have lines.");

        order.Status = "Validated";
        // ... calculation logic
    }
}
```

**Drawbacks:**
- **Violation of encapsulation:** The object's state can be modified from anywhere.
- **Scattered logic:** Business logic ends up in services, making maintenance difficult.
- **"Property bag" model:** Objects have no behavior of their own.

---

## 2. The Rich Domain Model

In a rich model, the domain object contains both the **data** and the **behaviors** (business logic). The object is responsible for maintaining its own validity.

### Code example (Rich):

```csharp
public class Order
{
    public int Id { get; private set; }
    private readonly List<OrderLine> _lines = new();
    public IReadOnlyCollection<OrderLine> Lines => _lines.AsReadOnly();
    public string Status { get; private set; }

    public Order()
    {
        Status = "New";
    }

    public void Validate()
    {
        if (!_lines.Any())
            throw new InvalidOperationException(
                "Cannot validate an order without lines.");

        Status = "Validated";
    }

    public void AddLine(Product product, int quantity)
    {
        _lines.Add(new OrderLine(product, quantity));
    }
}
```

**Advantages:**
- **Strong encapsulation:** Properties have private setters. The object controls its own state transitions.
- **Cohesion:** Business logic lives where the data is.
- **Readability:** Code expresses business intent (e.g., `order.Validate()`) rather than manipulating technical properties.

---

## Why switch to the rich model?

1. **Less duplication:** Logic isn't repeated across multiple services.
2. **Better testability:** You can test business rules directly on entities without needing to mock complex services.
3. **DDD alignment:** It facilitates communication with domain experts because the code reflects real-world processes.

## Conclusion

If you're building a simple CRUD application, the anemic model may suffice. However, for enterprise systems with complex business rules, the **Rich Domain Model** is essential to guarantee robustness, maintainability, and data integrity.

---

*Originally published on [LinkedIn Pulse](https://www.linkedin.com/pulse/anemic-domain-model-vs-rich-en-c-pourquoi-adopter-un-fad-ouro-agoro--mbhsf/).*
