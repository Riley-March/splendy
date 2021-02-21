var Stats = require('../models/stats');
var create_event_stats = function (event_name, event_tickets) {
    var tickets = event_tickets.map(function (ticket) {
        return {
            name: ticket.name,
            stats: [
                {
                    type: 'Daily',
                    quantity: 0
                },
                {
                    type: 'Weekly',
                    quantity: 0
                },
                {
                    type: 'Alltime',
                    quantity: 0
                }
            ]
        };
    });
    var event_stats = new Stats({
        event_name: event_name,
        tickets: tickets
    });
    console.log(event_stats);
    event_stats.save();
};
var calculate_daily_stats = function (tickets) {
    tickets.forEach(function (ticket) {
        Stats.findOneAndUpdate({
            type: ticket.name
        }, { $inc: {
                daily_stats: ticket.quantity,
                alltime_stats: ticket.quantity
            }
        }, {
            new: true,
            runValidators: true
        })
            .then(function (doc) {
            console.log(doc);
        })
            .catch(function (err) {
            console.error(err);
        });
    });
};
module.exports.create_event_stats = create_event_stats;
module.exports.calculate_daily_stats = calculate_daily_stats;
