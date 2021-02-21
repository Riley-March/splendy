import * as _ from 'lodash';
import event from './event';
import ticket from './ticket';

export const resolvers = _.merge(
    event, 
    ticket, 
);
