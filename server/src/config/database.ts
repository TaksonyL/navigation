import { TypeOrmModule } from "@nestjs/typeorm";
import { Bookmark } from "@/modules/bookmark/bookmark.entity";

const database = TypeOrmModule.forRootAsync({
  useFactory: async () => ({
    type: 'mysql',
    entities: [Bookmark],
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'tttest',
    charset: 'utf8mb4',
    synchronize: true
  })
})

export default database