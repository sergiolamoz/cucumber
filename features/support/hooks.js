var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After,AfterAll, Before}) {

	let tagsToSkip = "@skip or @bug or @unstable";
    Before({tags: tagsToSkip}, async ()=> {
        return "skipped";
    });
	
    After(async function() {
        await this.driver.quit();
    });
});