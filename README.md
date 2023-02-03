# Install Yoeman Globally
* First you must have Yeoman installed globally
       ```
         npm install -g yo
       ```
----  

# Add .npmrc file manually - 
* Add .npmrc file manually before installing the the generator
   - In windows ,place it in the Current working directory root folder or "C:/User/      <username>"" location. 
----

# To install generator locally - 
* Install sofotbiz-ms generator
       ```
         npm install generator-softobiz-ms -g
       ```
---- 

# To generate new micro-service
* This command will generate all the basic files needed for the boilerplate code 
* To generate new micro-service use command
       ```
         yo softobiz-ms app
       ```
* Enter the necessary information when prompted


----
# Rename files
*  gitignore -->  .gitignore
*  npmrc -->  .npmrc
----

# To generate Rest-API
* This command will generate all the files you need to create Rest-API 
*  To generate Rest-API for mssql use command
       ```
         yo softobiz-ms:rest-sql <name> [options]
       ```
    
    ### Example:
    ```
    yo softobiz-ms:rest-sql Product
    ```   
    or 
    ```
    yo softobiz-ms:rest-sql product-manager
    ```
*  To generate Rest-API for mongodb use command
       ```
         yo softobiz-ms:rest-mongo <name> [options]
       ```
    
    ### Example:
    ```
    yo softobiz-ms:rest-mongo Product
    ```   
    or 
    ```
    yo softobiz-ms:rest-mongo product-manager
    ```
* To generate Rest-API for both mssql & mongodb use command
       ```
         yo softobiz-ms:rest <name> [options]
       ```
    
    ### Example:
    ```
    yo softobiz-ms:rest Product
    ```   
    or 
    ```
    yo softobiz-ms:rest product-manager
    ```

* If using MongoDB as database
     - manually update the mongoDB schema in configuration.module.ts file inside the infrastructure layer. 
        infrastructure --> configuration --> congiguration.module.ts

---- 
# Dependency Flow-
* domain
* model
* mapper
* irepository
* sql-repositories
* dto
* error
* command
* query
* controller
* use-cases-module

# Generate Domain Layer
* Domain layer includes Aggregate-root, Entity and Value Objects.
* Follow the same naming convention for all cli-commands. 

## Generate new aggregate
 * To generate aggregate use command
       ```
         yo softobiz-ms:aggregate <name> [options]
       ```
   ### Options:

   |Alias|Option|Description|Default|
   |--- |--- |--- |--- |
   | -h |   --help         |# Print the generator's options and usage||
   |    |   --skip-cache   |# Do not remember prompt answers|false|
   |    |   --skip-install |# Do not automatically install dependencies|false|
   |    |   --force-install|# Fail on install dependencies error|false|
   | -p |    --parent      |# The optional sub folder inside domain folder in which the template needs to be generated||

   ### Arguments:
  
   |Arg Name|Description|Type|Required|
   |--- |--- |--- |---|
   | name|   The name of the object that needs to be created| String | true|

   ### Example:
   ```
   yo softobiz-ms:aggregate Product
   ```

## Generate new entity
 * To generate entity use command
       ```
         yo softobiz-ms:entity <name> [options]
       ```
   ### Options:

   |Alias|Option|Description|Default|
   |--- |--- |--- |--- |
   | -h |   --help         |# Print the generator's options and usage||
   |    |   --skip-cache   |# Do not remember prompt answers|false|
   |    |   --skip-install |# Do not automatically install dependencies|false|
   |    |   --force-install|# Fail on install dependencies error|false|
   | -p |    --parent      |# The optional sub folder inside domain folder in which the template needs to be generated||

   ### Arguments:

   |Arg Name|Description|Type|Required|
   |--- |--- |--- |---|
   | name|   The name of the object that needs to be created| String | true|

   ### Example:
    ```
    yo softobiz-ms:entity Product
    ```
    ```
    yo softobiz-ms:entity images -p Product
    ```
  
## Generate new value-object
* To generate value-object use command
       ```
         yo softobiz-ms:valueObject <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|
  | -p |    --parent      |# The optional sub folder inside domain folder in which the template needs to be generated||

  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:valueObject Product
  ```
  ```
  yo softobiz-ms:valueObject dimension -p Product
  ```
----
# Infrastrucutre Layer
* This layer includes models, mappers, irepositories, sql-repositories.
* Follow the above order to create infrastructure layer commands.
* Follow the same naming convention for all cli-commands. 

## Generate new model
* To generate a new model use command
       ```
         yo softobiz-ms:model <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|
  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|
  ### Example:
  ```
  yo softobiz-ms:model Product
  ```

## Generate new sql-mapper
* To generate a new mapper use command
       ```
         yo softobiz-ms:sql-mapper <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|
  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|
  ### Example:
  ```
  yo softobiz-ms:sql-mapper Product
  ```

## Generate new irepository
* To generate a new irepository use command
       ```
         yo softobiz-ms:irepository <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|

  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:irepository Product
  ```

## Generate new sql-repositories
* To generate a new sql-repositories use command
       ```
         yo softobiz-ms:sql-repositories <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|

  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:sql-repositories Product
  ```
----

# Application Layer
* This layer includes dto, error, commands, query, controller, use-cases-module.
* Follow the same naming convention for all cli-commands. 

## Generate new Dto
* To generate a new dto use command
       ```
         yo softobiz-ms:dto <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|

  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:dto Product 
  ```

## Generate new Error file
* To generate a new error-file use command
       ```
         yo softobiz-ms:error <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|

  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:error Product 
  ```

## Generate new command
* To generate a new command use- 
       ```
         yo softobiz-ms:command <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|
  | -c |   --command      |# The optional sub command inside commands folder in which the template needs to be generated||

  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:command Product 
  ```
  ```
  yo softobiz-ms:command update -c Product 
  ```

## Generate new query
* To generate a new query use command-
       ```
         yo softobiz-ms:query <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|
  | -q |    --query      |# The optional sub query inside queries folder in which the template needs to be generated||

  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:query Product 
  ```
  ```
  yo softobiz-ms:query getAll --q Product 
  ```

## Generate new controller
* To generate a new controller use command
       ```
         yo softobiz-ms:controller <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|

  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:controller Product 
  ```

## Generate new use-cases-module
* To generate a new use-cases-module use command (mssql)
       ```
         yo softobiz-ms:use-cases-module <name> [options]
       ```
  ### Options:

  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|

  ### Arguments:

  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:use-cases-module Product 
  ```
 ---
  
* To generate a new use-cases-module use command (mongodb)
       ```
         yo softobiz-ms:mongo-use-cases-module <name> [options]
       ```
  ### Options:
  |Alias|Option|Description|Default|
  |--- |--- |--- |--- |
  | -h |   --help         |# Print the generator's options and usage||
  |    |   --skip-cache   |# Do not remember prompt answers|false|
  |    |   --skip-install |# Do not automatically install dependencies|false|
  |    |   --force-install|# Fail on install dependencies error|false|

  ### Arguments:
  
  |Arg Name|Description|Type|Required|
  |--- |--- |--- |---|
  | name|   The name of the object that needs to be created| String | true|

  ### Example:
  ```
  yo softobiz-ms:mongo-use-cases-module Product 
  ``` 

