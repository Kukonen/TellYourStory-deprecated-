const Story = require('../models/Story')

class StoryController {
    async getStory(ctx) {
        const {id} = ctx.request.body
        
        const story = await Story.findOne({id})
        const struct = story.struct
        const rating = story.rating

        ctx.body = {
            struct,
            rating
        }

        ctx.status = 200
    }
}

module.exports = new StoryController();