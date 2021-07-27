const Template = require('../models/Template')
const uuid = require('uuid')

class templateController {

    async openOrCreate(ctx) {
        const key = ctx.cookies.get('key')
        const template = await Template.findOne({key})
        if(template) {
            ctx.body = {
                "title": template.title,
                "story": template.story,
                "chapter": template.chapter,
                "counter": template.counter
            }
            ctx.status = 200
        } else {
            const id = uuid.v4()
            await new Template({id, key}).save()
            ctx.status = 201
        }
    }

    async createCounter(ctx) {
        const {name, count} = ctx.request.body
        const key = ctx.cookies.get('key');
        const id = uuid.v4()
        const template = await Template.findOne({key})
        let counters = template.counter
        counters.push({
            id: id,
            name: name,
            count: count
        })

        await Template.updateOne({key}, {counter: counters})

        ctx.body = {
            counters: counters
        }
        ctx.status = 200
    }

    async changeCounter(ctx) {
        const {name, count, id} = ctx.request.body
        console.log(name, count, id)
        const key = ctx.cookies.get('key');
        const template = await Template.findOne({key})
        let counters = template.counter
        for (let i = 0; i < counters.length; ++i) {
            if(counters[i].id === id) {
                counters[i] = {
                    name: name,
                    count: count,
                    id: id
                }
            }
        }

        await Template.updateOne({key}, {counter: counters})

        ctx.body = {
            counters: counters
        }
        ctx.status = 200
    }
}

module.exports = new templateController();