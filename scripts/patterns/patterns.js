// list of all match patterns, Nov 2020
let patterns = [
  'bit-4',
  'u r',
  'sometimes-adverb',
  'i-better',
  'gerund-copula',
  'gerund-modal',
  'swears-expression',
  'thing-doer',
  'u-pronoun-2',
  'u-pronoun-1',
  'captain-who',
  'bit-3',
  'that-prep',
  'which-copula',
  'like-preposition',
  'noun-like',
  'repair-noPhrasal',
  'had-he',
  'were-he',
  'how-question',
  'how-is',
  'which-question',
  'which-question2',
  'so-conj',
  'how-he-is-x',
  'when i go fishing',
  'holiday-day',
  'sun-the-5th',
  'sun-feb',
  '1pm-sun',
  'sat',
  'sat-feb',
  'in-month',
  'this-month',
  'this-month',
  'this-month',
  'march-5th',
  '5th-of-march',
  'march-and-feb',
  'feb-and-march',
  'quickly-march',
  'march-quickly',
  'value-of-month',
  'cardinal-month',
  'value-to-value',
  'month-the-value',
  'date-value',
  'value-date',
  'textvalue-date',
  'in-june',
  'in-june',
  'in-june',
  'in-june',
  'in-june',
  'in-june',
  'june-5th',
  'june-5th',
  'june-smith',
  'june-smith-jr',
  'one-second',
  'all-noun',
  'really-rich',
  'randy-smith',
  'rusty-smith',
  'not-adverb',
  'is-filled',
  'smoked-poutine',
  'baked-onions',
  'well-made',
  'swears-adjective',
  'seems-filled',
  'a|an',
  'as-gerund-as',
  'more-gerund-than',
  'so-gerund',
  'it-was-gerund',
  'found-it-gerund',
  'a-bit-gerund',
  'still-out',
  'there-are',
  'the-sun',
  'did-a-value',
  'the can',
  'name-poss',
  'org-possessive',
  'place-possessive',
  'all-presentTense',
  'the-adj-is',
  'adj-adj-is',
  'adj-presentTense',
  'start adj-presentTense',
  'one-big-reason',
  'won-wide-support',
  'many-poses',
  'very-big-dream',
  'good-wait-staff',
  'adorable-little-store',
  'of-basic-training',
  'early-warning',
  'higher-costs',
  'do-this-dance',
  'his-fine',
  'determiner6',
  'more-noun',
  'noun-list',
  'right-of',
  'bit-2',
  'first-thought',
  'running-a-show',
  'the-reason',
  'the-adj-verb',
  'determiner4',
  'the-adj-2',
  'determiner5',
  'determiner7',
  'a-nice-inf',
  'determiner1',
  'the-verb-of',
  'career-move',
  'noun-of-noun',
  'western-line',
  'her-polling',
  'its-polling',
  'technical-noun',
  'blown-motor',
  'det-inf',
  'det-pres',
  'det-past',
  'this-gerund',
  'at-some-inf',
  'hyphen-verb',
  'is-no-verb',
  'correction',
  'goes-to-verb',
  'a|an2',
  'a-noun-inf',
  'so-noun',
  'is-pres-noun',
  'a-close',
  'swears-noun',
  'singular-were',
  'running-for',
  'running-to',
  'any-verbs-for',
  'have-fun',
  'co-noun',
  'still-advb',
  'still-verb',
  'so-adv',
  'way-adj',
  'way-too-adj',
  'all-verb',
  'verb-like',
  'barely-even',
  'even-walk',
  'even-left',
  'lazy-ly',
  'bit-1',
  'is-well',
  'a-bit-cold',
  'dark-green',
  'kinda-sparkly',
  'kinda-sparkly-and',
  '1-800-Value',
  '(800) PhoneNumber',
  'demonym-currency',
  'second-noun',
  '5-yan',
  'foot-unit',
  'minus-value',
  'value-abbr',
  'value-k',
  'unit-an-hour',
  'value-point-value',
  'value-bucks',
  'half-ordinal',
  'a-value',
  '15 usd',
  'magnitude-and-value',
  'a-is-one',
  'gerund-his-noun',
  'loving-you',
  'slowly-adj',
  'modal-like',
  'do-simply-like',
  'does-mean',
  'i-mean',
  'left-verb',
  'this-verbs',
  'copula-walking',
  'had-walked',
  'modal-verb',
  'would-have',
  'would-be',
  'had-been',
  'had-walked',
  'have-had',
  'about-to',
  'would-be',
  'was-being',
  'have-vb',
  'would-have',
  'had-been',
  'being-foo',
  'foo-up',
  'foo-off',
  'foo-over',
  'foo-out',
  'phrasal-particle',
  'phrasal-pronoun-advb',
  'will-be-copula',
  'be-copula',
  'march-to',
  'must-march',
  'let-him-glue',
  'will-adj',
  'he-adj-the',
  'adj-to',
  'open-the',
  'compromises-are-possible',
  'would-mark',
  'really-mark',
  'to-mark',
  'rob-smith',
  'rob-a-smith',
  'swear1-verb',
  'swear2-verb',
  'swear3-verb',
  'west-norfolk',
  'us-state',
  'foo-district',
  'district-of-Foo',
  'propernoun-place',
  'address-st',
  'in-paris',
  'near-paris',
  'at-paris',
  'from-paris',
  'to-paris',
  'tokyo-paris',
  'paris-france',
  'Noun-&-Noun',
  'org-of-place',
  'org-country',
  'titlecase-org',
  'org-abbrv',
  'the-acronym',
  'global-org',
  'noun-public-school',
  'ordinal-honorific',
  'ambg-honorifics',
  'copula-noun-lastname',
  'lady-titlecase',
  'pope-titlecase',
  'maybe-lastname',
  'first-noun-last',
  'possessive-name',
  'titlecase-acronym-titlecase',
  'acronym-latname',
  'person-honorific',
  'roman-numeral',
  'john-e',
  'honorific-person',
  'Honorific-TitleCase',
  'van der noun',
  'king-of-noun',
  'lady-place',
  'saint-foo',
  'proper-person',
  'al-borlen',
  'bill-de-noun',
  'bill-al-noun',
  'bill-acronym-title',
  'bill-firstname-title',
  'dr-john-Title',
  'name-the-great',
  'bill-green',
  'ray-smith',
  'ray-a-smith',
  'ambig-person',
  'infinitive-person',
  'ambig-modal',
  'may-be',
  'modal-ambig',
  'is-may',
  'may-is',
  'that-month',
  'with-month',
  'for-month',
  'this-may',
  'next-may',
  'last-may',
  'date-may',
  'may-5th',
  '5th-of-may',
  'title-van-title',
  'title-de-title',
  'title-acro-noun',
  'firstname-titlecase',
  'n-acro-noun',
  'de-firstname',
  'christmas eve',
]
patterns = patterns.reduce((h, str) => {
  h[str] = 0
  return h
}, {})

module.exports = patterns