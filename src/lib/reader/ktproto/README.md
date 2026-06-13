Protobuf definitions taken from JetBrains/kotlin, revision [5e0cbb1](https://github.com/JetBrains/kotlin/tree/5e0cbb1e511bf24c751aa74f0eedc27b7e9e67fc).
Renamed `Class#constructor` to `Class#constructor_` to avoid conflict with the `constructor` keyword in JS - protobufjs does not handle this.
