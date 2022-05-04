# GraphQL example queries

## queries

```
query {
  userById(id:"df93cd4b-0f12-769e-687f-b45f8f3f5761") {
    name
    company {
      name
    }
    posts {
      content
    }
  }
}
```
