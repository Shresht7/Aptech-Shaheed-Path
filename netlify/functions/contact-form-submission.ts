import type { Handler } from '@netlify/functions'

//  TODO: #9 Handle Contact Form Submission
const handler: Handler = async (event, context) => {
    console.log(event)
    return {
        statusCode: 200,
        body: "DONE!"
    }
}

export { handler }
