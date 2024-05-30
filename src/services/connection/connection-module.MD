# Connection-module

Clase principal: **connection-manager**
Se encuentra en **manager/connection-manager.ts**

Abre un servidor websocket y permite la comunicacion entre el servidor y los clientes.

---

Implementa el patron _singleton_ y _publisher-subscribers_.

Al recibir mensajes de un cliente, notifica a los subscribers.

---

Depende del package:

- "ws": "8.17.0"
