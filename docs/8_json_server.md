# JSON Server

React is a JavaScript framework, so it integrates its data model and features. [JSON](https://www.json.org/json-en.html) (JavaScript Object Notation) is a lightweight data-interchange format. It stores data as human-readable text and provides support for main data types. It is widely used as it is completely language independent.

To persistent data storage we will be using a JSON database server that provides data in JSON format via REST API. It differs from traditional SQL databases (relational databases, table-based), as these are non-relational and file-based. This data storage method eases fast data accessing and manipulation. Other resources may also be provided by online servers as images. The current implementation for [JSON server](https://www.npmjs.com/package/json-server) is installed via NPM. To start the server run next command.

``json-server --host <host_ip> <json_file> -p <port> -d <delay_ms>``

Hosting resources in online centralized servers allow app scalability, as contents can be dynamically fetched and rendered to the user, and must not be distributed and updated within the app. On the other hand, resources must be available at the time the app queries for them. For this reason, the app logo image is loaded locally, while other images are fetched from the server.