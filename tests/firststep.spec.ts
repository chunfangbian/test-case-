import {test} from '@playwright/test'


test.beforeEach(async ({page}) =>{
    await page.goto(' http://localhost:4200/')
})



test.describe('test suit1',() => {
    test.beforeEach(async ({page}) =>{
        await page.goto(' http://localhost:4200/')
    })
    
    test('the first test1',async ({page}) =>{
        await page.getByText('form layouts').click()
    })
    
    test('navigate to datepicke1r ',async ({page}) =>{
        await page.getByText('datepicker').click()
    })

})

test.describe('test suit2',() => {
    test.beforeEach(async ({page}) =>{
        await page.goto(' http://localhost:4200/')
    })0
    
    test('the first test2',async ({page}) =>{
        await page.getByText('form layouts').click()
    })
    
    test('navigate to datepicker2 ',async ({page}) =>{
        await page.getByText('datepicker').click()
    })

})