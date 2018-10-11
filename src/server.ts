import * as express from "express";
import {Server, Path, GET, PathParam} from "typescript-rest";
 
@Path("/hello")
class HelloService {
  @Path(":name")
  @GET
  sayHello( @PathParam('name') name: string): string {
    return "Hello " + name;
  }

  
}

@Path("/users")
class UserService {
   @Path("/:userId/books/:bookId")
   @GET
   getUserBook(@PathParam("userId") userId: number, @PathParam("bookId") bookId: number) {
     return userId+ " "+bookId;
   }
}
 
let app: express.Application = express();
Server.buildServices(app);
 
app.listen(4200, function() {
  console.log('Rest Server listening on port 4200!');
});