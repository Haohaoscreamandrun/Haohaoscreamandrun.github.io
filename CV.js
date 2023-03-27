'use strict'
//Selectors
const experience = document.querySelector('.experience')

//Data storage, new element goes on top
const expArray = [{
  title: 'Regulatory & Stewardship Specialist',
  company: 'Corteva Agriscience Taiwan Co., Ltd.',
  duration: '2021.8 - now',
  JD: [
    'Set goals, arrange field trials, coordinate submissions of global new active Adavelt® and other fungicides.',
    'Manage 30+ license renewal, sourcing and other actions according to global LER projects.',
    'Build relations with government officials and customer while proactively leading conversations.']
},{
  title: 'Import tolerance & Regulatory specialist',
  company: 'BASF Taiwan CO., LTD.',
  duration: '2020.2 - 2021.8',
  JD: [
    'Product stewardship, dossier submission and license maintenance for Agriculture Solutions.',
    'Regulatory advocacy with Croplife Asia and incident management with regulatory issue.',
    'Managing the import tolerance application, risk-cup calculation and global negotiation.']
},{
  title: 'Field trial Manager',
  company: 'TECHS TECH CO., LTD.',
  duration: '2018.10 - 2020.1',
  JD: [
    'Test the final product on over 15 kind of crops, analyze statistical results and complete the project reports.',
    'Optimize the gross product in economical way, including extruding granulation, detoxification by dunnage',
    'Analyze data from fermentation machine with BDA skill and report the insight.']
}]

//Render Function
function experienceRender(array){
  let rawHTML = ''
  array.forEach(job => {
    rawHTML +=
    `
    <div class="experience-item">
        <h3 class="job-title">${job.title}</h3>
        <span class="company">
          <i class="fa-solid fa-building"></i>
          ${job.company}
        </span>
        <span class="duration">
          <i class="fa-solid fa-calendar"></i>
          ${job.duration}
        </span>
        <ul>
    `
    element.JD.forEach(description =>{
      rawHTML +=
      `
      <li>${description}</li>
      `
    })
    rawHTML +=
    `
      </ul>
    `
  })
  return rawHTML;
}

//Job Render
experience.innerHTML = experienceRender(expArray);