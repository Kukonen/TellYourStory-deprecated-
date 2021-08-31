import React from 'react'
import './Content.scss'
import {observer} from "mobx-react-lite";
import storyState from '../../../Store/StoryState'
import Level from './Level/Level'
import localizationState from "../../../Store/LocalizationState";

const Content = observer((props) => {
    const localization = localizationState.text

    const struct = JSON.parse(JSON.stringify(storyState.struct))

    const levels = Array.isArray(struct.story) ? struct.story.map(story => {
        return <Level chapters={story.chapters} />
    }) : null

    const path = window.location.href
    const regexp = new RegExp(`(?<=${storyState.id + '\/'})[^\\/]{1,}`, ""); // find page number after id and behind / (closed id)
    let pageNumber = path.match(regexp)

    pageNumber = Number(pageNumber)

    return (
        <div>
            {levels !== null && !isNaN(pageNumber) ?
                levels.length >= pageNumber ?
                    levels[pageNumber - 1]
                    :
                    <div className="Headline-block">
                        {localization.story.notFound.page}
                    </div>
                    : null
            }
        </div>
    )
})

export default Content;