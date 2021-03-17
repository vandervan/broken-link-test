const expect = require('chai').expect;
const fetch = require('node-fetch');

describe('broken link test', function() {
    it('should check the page for broken links', async function () {
        await browser.url('https://everhour.com');

        // get all the links on the page
        const links = $$('a');

        let urls = (await links).map(link => link.getAttribute('href'));

        let parsed = urls.filter((url => String(url).startsWith('https')));

        let requests = (await parsed).map(url => fetch(url));

        let responses = await Promise.all(requests);

        await console.log(responses)

        let statusCodes = responses.map(response => response.status);
        statusCodes.find(statusCode => {
            expect(statusCode).to.be.below(400)
        })

    });
    it('should check the page for broken links', async function () {
        await browser.url('https://everhour.com/blog/');

        // get all the links on the page
        const links = $$('a');

        let urls = (await links).map(link => link.getAttribute('href'));

        let parsed = urls.filter((url => String(url).startsWith('https')));

        let requests = (await parsed).map(url => fetch(url));

        let responses = await Promise.all(requests);

        await console.log(responses)

        let statusCodes = responses.map(response => response.status);
        statusCodes.find(statusCode => {
            expect(statusCode).to.be.below(400)
        })

    });

});
