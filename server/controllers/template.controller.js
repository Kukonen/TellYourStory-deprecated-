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

    async createChapter(ctx) {
        const {title} = ctx.request.body
        const key = ctx.cookies.get('key')
        const id = uuid.v4()
        const template = await Template.findOne({key})
        let chapters = template.chapter
        chapters.push({
            id: id,
            title: title,
            text: "",
            decision: []
        })

        await Template.updateOne({key}, {chapter: chapters})

        ctx.body = {
            chapters: chapters
        }
        ctx.status = 200
    }

    async changeChapter(ctx) {
        const {id, title, text, decision} = ctx.request.body
        const key = ctx.cookies.get('key');
        const template = await Template.findOne({key})
        let chapters = template.chapter
        for (let i = 0; i < chapters.length; ++i) {
            if(chapters[i].id === id) {
                chapters[i] = {
                    id: id,
                    title: title,
                    text: text,
                    decision: decision
                }
            }
        }

        await Template.updateOne({key}, {chapter: chapters})

        ctx.body = {
            chapters: chapters
        }
        ctx.status = 200
    }

    async deleteChapter(ctx) {
        const {id} = ctx.request.body
        const key = ctx.cookies.get('key');
        const template = await Template.findOne({key})
        let chapters = []
        for (let i = 0; i < template.chapter.length; ++i) {
            if(template.chapter[i].id !== id) {
                chapters.push({
                    id: template.chapter[i].id,
                    title: template.chapter[i].title,
                    text: template.chapter[i].text,
                    decision: template.chapter[i].decision
                })
            }
        }

        await Template.updateOne({key}, {chapter: chapters})

        ctx.body = {
            chapters: chapters
        }
        ctx.status = 200
    }

    async createDecision(ctx) {
        try {
            const {chapterId, title} = ctx.request.body
            const id = uuid.v4()
            const key = ctx.cookies.get('key');
            const template = await Template.findOne({key})

            let chapters = template.chapter

            for (let i = 0; i < template.chapter.length; ++i) {
                if (template.chapter[i].id === chapterId) {
                    let decision = chapters[i].decision
                    decision.push({
                            id: id,
                            title: title,
                            counters: []
                        })
                    chapters[i].decision = decision
                }
            }


            await Template.updateOne({key}, {
                chapter: chapters
            })

            ctx.body = {
                chapters: chapters
            }
            ctx.status = 200
        } catch (e) {
            console.log(e)
        }
    }

    async refreshDecision(ctx) {

        try {
            const key = ctx.cookies.get('key');
            const template = await Template.findOne({key})

            let chapters = template.chapter

            chapters.forEach(chapter =>
                chapter.decision.forEach( decision =>
                    decision.counters = template.counter.map(counter =>
                    {
                        return {
                            "name": counter.name,
                            "count": 0
                        }
                    }

                )))

            await Template.updateOne({key}, {
                chapter: chapters
            })

            ctx.body = {
                chapters: chapters
            }
            ctx.status = 200
        } catch (e) {
            console.log(e)
        }
    }

    async changeDecision(ctx) {
        try {
            const {id, title, counters} = ctx.request.body
            const key = ctx.cookies.get('key');

            const template = await Template.findOne({key})

            let chapters = template.chapter

            for (let i = 0; i < chapters.length; ++i) {
                for (let j = 0; j < chapters[i].decision.length; ++j) {
                    if (chapters[i].decision[j].id === id) {
                        chapters[i].decision[j] = {
                            id: id,
                            title: title,
                            counters: counters
                        }
                    }
                }
            }

            await Template.updateOne({key}, {
                chapter: chapters
            })

        } catch (e) {
            console.log(e)
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

    async deleteCounter(ctx) {
        const {id} = ctx.request.body
        const key = ctx.cookies.get('key');
        const template = await Template.findOne({key})
        let counters = []
        for (let i = 0; i < template.counter.length; ++i) {
            if(template.counter[i].id !== id) {
                counters.push({
                    name: template.counter[i].name,
                    count: template.counter[i].count,
                    id: template.counter[i].id
                })
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