// Central citation registry (AMA-style strings)
// Extend or reorder this array; numerical references will update everywhere.
export const citations = [
  {
    id: 'liu2016',
    text: 'Liu M, Wu L, Yao S. Dose-response association of screen-time–based sedentary behaviour in children and adolescents and depression. Br J Sports Med. 2016;50(20):1252-1258.'
  },
  {
    id: 'li2022',
    text: 'Li L, Zhang Q, Zhu L, et al. Screen time and depression risk: a meta-analysis of cohort studies. Front Psychiatry. 2022;13:1058572.'
  },
  {
    id: 'xiao2025',
    text: 'Xiao Y, Meng Y, Brown TT, et al. Addictive Screen Use Trajectories and Suicidal Behaviors in US Youths. JAMA. 2025; e257829.'
  },
  {
    id: 'hale2018',
    text: 'Hale L, Kirschen GW, LeBourgeois MK, et al. Youth screen media habits and sleep. Child Adolesc Psychiatr Clin N Am. 2018;27(2):229-245.'
  },
  {
    id: 'hokby2025',
    text: 'Hökby S, Alvarsson J, Westerlund J, et al. Adolescents’ screen time displaces multiple sleep pathways… PLOS Glob Public Health. 2025;5(4):e0004262.'
  },
  {
    id: 'schmidt2024',
    text: 'Schmidt-Persson J, et al. Screen Media Use and Mental Health of Children and Adolescents. JAMA Netw Open. 2024;7(7):e2419881.'
  },
  {
    id: 'pieh2025',
    text: 'Pieh C, Humer E, Hoenigl A, et al. Smartphone screen-time reduction improves mental health. BMC Med. 2025;23:107.'
  },
  {
    id: 'adelantado2019',
    text: 'Adelantado-Renau M, Moliner-Urdiales D, Cavero-Redondo I, et al. Association Between Screen Media Use and Academic Performance Among Children and Adolescents: A Systematic Review and Meta-analysis. JAMA Pediatrics. 2019;173(11):1058-1067. doi:10.1001/jamapediatrics.2019.3176'
  },
  {
    id: 'borzekowski2005',
    text: 'Borzekowski DLG, Robinson TN. The Remote, the Mouse, and the No. 2 Pencil: The Household Media Environment and Academic Achievement Among Third-Grade Students. Archives of Pediatrics & Adolescent Medicine. 2005;159(7):607-613. doi:10.1001/archpedi.159.7.607'
  },
  {
    id: 'beland2016',
    text: 'Beland L-P, Murphy R. Ill Communication: Technology, Distraction & Student Performance. Labour Economics. 2016;41:61-76. doi:10.1016/j.labeco.2016.04.004'
  },
  {
    id: 'paul2024',
    text: 'Paul K. \'Let kids be kids\': LA becomes largest US school district to ban phones in class. The Guardian. June 18 2024. Accessed July 5 2025.'
  }
];

// Pre-compute quick lookup map for id -> number (1-based).
export const citationNumberMap = new Map(citations.map((c, idx) => [c.id, idx + 1]));

export function getCitationNumber(id) {
  return citationNumberMap.get(id);
}

export function getCitationText(id) {
  const entry = citations.find(c => c.id === id);
  return entry?.text;
}
