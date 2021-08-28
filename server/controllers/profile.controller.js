const Story = require('../models/Story')

class ProfileController {
    async getOwnStories(ctx) {
        try {
            const key = ctx.cookies.get('key')
            const story = await Story.find({key})
            const sendStory = story.map(story => {
                return {
                    "avatar": story.struct.images.avatar,
                    "title": story.struct.title,
                    "id": story.id
                }
            })

            ctx.body = sendStory

            ctx.status = 200
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new ProfileController();