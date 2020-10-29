import { Options } from '@mikro-orm/core';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { UserEntity, BaseEntity, ChallengerEntity } from './entities'

const options: Options = {
  type: 'mongo',
  entities: [BaseEntity, UserEntity, ChallengerEntity],
  dbName: 'ttm',
  highlighter: new MongoHighlighter(),
  debug: true,
};

export default options;