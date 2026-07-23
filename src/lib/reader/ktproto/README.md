Protobuf definitions taken from JetBrains/kotlin, revision [0b302a5](https://github.com/JetBrains/kotlin/tree/0b302a50654162ba95a0a164ab70b47845e9662b).
Renamed `Class#constructor` to `Class#_constructor` to avoid conflict with the `constructor` keyword in JS - protobufjs does not handle this.
