import React from 'react'

export default function projectDetails(props) {
    const id = props.match.params.id;
    return (
       <div className="container">
       <div className="card z-depth-0">
       <div className="card-content">
       <span className="card-title">Project Details - {id}</span>
       <p>
       અનાદિ અક્ષરબ્રહ્મ સદ્‌ગુરુ શ્રી ગુણાતીતાનંદ સ્વામીની વાતું એટલે શ્રીજીમહારાજના ‘વચનામૃત’ ઉપરનું ભાષ્ય. શ્રીજીમહારાજે કહેલા વચનામૃતની પરાવાણી યથાર્થ સમજવી હોય તો સ્વામીની વાતુંનું અધ્યયન કરવું જ રહ્યું. જેમ વચનામૃત એ સંપ્રદાયનો રહસ્ય ગ્રંથ છે, તેમ સ્વામીની વાતું એ પણ સંપ્રદાયનો રહસ્ય ગ્રંથ જ છે. બંને ગ્રંથોના અધ્યયનથી શુદ્ધ ઉપાસના, સંપ્રદાયનું તત્ત્વજ્ઞાન અને બ્રાહ્મીસ્થિતિ સિદ્ધ કરવા માટે આવશ્યક એવાં સાધનોની સૂઝ પડે....  </p>
       </div>

        <div className="card-action gret lighten-4 grey-text">
        <div> Posted by the hari bhagat</div>
        <div>2nd Sept, 2019</div>
        </div>

       </div>

       </div>
    )
}
