const flags = [
  {
    id: 'ad',
    img: './imgs/flags/ad.png',
    nome: 'Andorra',
  },
  {
    id: 'ae',
    img: './imgs/flags/ae.png',
    nome: 'United Arab Emirates',
  },
  {
    id: 'af',
    img: './imgs/flags/af.png',
    nome: 'Afghanistan',
  },
  {
    id: 'ag',
    img: './imgs/flags/ag.png',
    nome: 'Antigua and Barbuda',
  },
  {
    id: 'ai',
    img: './imgs/flags/ai.png',
    nome: 'Anguilla',
  },
  {
    id: 'al',
    img: './imgs/flags/al.png',
    nome: 'Albania',
  },
  {
    id: 'am',
    img: './imgs/flags/am.png',
    nome: 'Armenia',
  },
  {
    id: 'an',
    img: './imgs/flags/an.png',
    nome: 'Netherlands Antilles',
  },
  {
    id: 'ao',
    img: './imgs/flags/ao.png',
    nome: 'Angola',
  },
  {
    id: 'aq',
    img: './imgs/flags/aq.png',
    nome: 'Antarctica',
  },
  {
    id: 'ar',
    img: './imgs/flags/ar.png',
    nome: 'Argentina',
  },
  {
    id: 'as',
    img: './imgs/flags/as.png',
    nome: 'American Samoa',
  },
  {
    id: 'at',
    img: './imgs/flags/at.png',
    nome: 'Austria',
  },
  {
    id: 'au',
    img: './imgs/flags/au.png',
    nome: 'Australia',
  },
  {
    id: 'aw',
    img: './imgs/flags/aw.png',
    nome: 'Aruba',
  },
  {
    id: 'ax',
    img: './imgs/flags/ax.png',
    nome: 'Åland Islands',
  },
  {
    id: 'az',
    img: './imgs/flags/az.png',
    nome: 'Azerbaijan',
  },
  {
    id: 'ba',
    img: './imgs/flags/ba.png',
    nome: 'Bosnia and Herzegovina',
  },
  {
    id: 'bb',
    img: './imgs/flags/bb.png',
    nome: 'Barbados',
  },
  {
    id: 'bd',
    img: './imgs/flags/bd.png',
    nome: 'Bangladesh',
  },
  {
    id: 'be',
    img: './imgs/flags/be.png',
    nome: 'Belgium',
  },
  {
    id: 'bf',
    img: './imgs/flags/bf.png',
    nome: 'Burkina Faso',
  },
  {
    id: 'bg',
    img: './imgs/flags/bg.png',
    nome: 'Bulgaria',
  },
  {
    id: 'bh',
    img: './imgs/flags/bh.png',
    nome: 'Bahrain',
  },
  {
    id: 'bi',
    img: './imgs/flags/bi.png',
    nome: 'Burundi',
  },
  {
    id: 'bj',
    img: './imgs/flags/bj.png',
    nome: 'Benin',
  },
  {
    id: 'bl',
    img: './imgs/flags/bl.png',
    nome: 'Saint Barthélemy',
  },
  {
    id: 'bm',
    img: './imgs/flags/bm.png',
    nome: 'Bermuda',
  },
  {
    id: 'bn',
    img: './imgs/flags/bn.png',
    nome: 'Brunei Darussalam',
  },
  {
    id: 'bo',
    img: './imgs/flags/bo.png',
    nome: 'Bolivia',
  },
  {
    id: 'bq',
    img: './imgs/flags/bq.png',
    nome: 'Bonaire, Sint Eustatius and Saba',
  },
  {
    id: 'br',
    img: './imgs/flags/br.png',
    nome: 'Brazil',
  },
  {
    id: 'bs',
    img: './imgs/flags/bs.png',
    nome: 'Bahamas',
  },
  {
    id: 'bt',
    img: './imgs/flags/bt.png',
    nome: 'Bhutan',
  },
  {
    id: 'bv',
    img: './imgs/flags/bv.png',
    nome: 'Bouvet Island',
  },
  {
    id: 'bw',
    img: './imgs/flags/bw.png',
    nome: 'Botswana',
  },
  {
    id: 'by',
    img: './imgs/flags/by.png',
    nome: 'Belarus',
  },
  {
    id: 'bz',
    img: './imgs/flags/bz.png',
    nome: 'Belize',
  },
  {
    id: 'ca',
    img: './imgs/flags/ca.png',
    nome: 'Canada',
  },
  {
    id: 'cc',
    img: './imgs/flags/cc.png',
    nome: 'Cocos (Keeling) Islands',
  },
  {
    id: 'cd',
    img: './imgs/flags/cd.png',
    nome: 'Congo, The Democratic Republic Of The',
  },
  {
    id: 'cf',
    img: './imgs/flags/cf.png',
    nome: 'Central African Republic',
  },
  {
    id: 'cg',
    img: './imgs/flags/cg.png',
    nome: 'Congo',
  },
  {
    id: 'ch',
    img: './imgs/flags/ch.png',
    nome: 'Switzerland',
  },
  {
    id: 'ci',
    img: './imgs/flags/ci.png',
    nome: "Côte D'Ivoire",
  },
  {
    id: 'ck',
    img: './imgs/flags/ck.png',
    nome: 'Cook Islands',
  },
  {
    id: 'cl',
    img: './imgs/flags/cl.png',
    nome: 'Chile',
  },
  {
    id: 'cm',
    img: './imgs/flags/cm.png',
    nome: 'Cameroon',
  },
  {
    id: 'cn',
    img: './imgs/flags/cn.png',
    nome: 'China',
  },
  {
    id: 'co',
    img: './imgs/flags/co.png',
    nome: 'Colombia',
  },
  {
    id: 'cr',
    img: './imgs/flags/cr.png',
    nome: 'Costa Rica',
  },
  {
    id: 'cu',
    img: './imgs/flags/cu.png',
    nome: 'Cuba',
  },
  {
    id: 'cv',
    img: './imgs/flags/cv.png',
    nome: 'Cape Verde',
  },
  {
    id: 'cw',
    img: './imgs/flags/cw.png',
    nome: 'Curaçao',
  },
  {
    id: 'cx',
    img: './imgs/flags/cx.png',
    nome: 'Christmas Island',
  },
  {
    id: 'cy',
    img: './imgs/flags/cy.png',
    nome: 'Cyprus',
  },
  {
    id: 'cz',
    img: './imgs/flags/cz.png',
    nome: 'Czech Republic',
  },
  {
    id: 'de',
    img: './imgs/flags/de.png',
    nome: 'Germany',
  },
  {
    id: 'dj',
    img: './imgs/flags/dj.png',
    nome: 'Djibouti',
  },
  {
    id: 'dk',
    img: './imgs/flags/dk.png',
    nome: 'Denmark',
  },
  {
    id: 'dm',
    img: './imgs/flags/dm.png',
    nome: 'Dominica',
  },
  {
    id: 'do',
    img: './imgs/flags/do.png',
    nome: 'Dominican Republic',
  },
  {
    id: 'dz',
    img: './imgs/flags/dz.png',
    nome: 'Algeria',
  },
  {
    id: 'ec',
    img: './imgs/flags/ec.png',
    nome: 'Ecuador',
  },
  {
    id: 'ee',
    img: './imgs/flags/ee.png',
    nome: 'Estonia',
  },
  {
    id: 'eg',
    img: './imgs/flags/eg.png',
    nome: 'Egypt',
  },
  {
    id: 'eh',
    img: './imgs/flags/eh.png',
    nome: 'Western Sahara',
  },
  {
    id: 'er',
    img: './imgs/flags/er.png',
    nome: 'Eritrea',
  },
  {
    id: 'es',
    img: './imgs/flags/es.png',
    nome: 'Spain',
  },
  {
    id: 'et',
    img: './imgs/flags/et.png',
    nome: 'Ethiopia',
  },
  {
    id: 'fi',
    img: './imgs/flags/fi.png',
    nome: 'Finland',
  },
  {
    id: 'fj',
    img: './imgs/flags/fj.png',
    nome: 'Fiji',
  },
  {
    id: 'fk',
    img: './imgs/flags/fk.png',
    nome: 'Falkland Islands (Malvinas)',
  },
  {
    id: 'fm',
    img: './imgs/flags/fm.png',
    nome: 'Micronesia, Federated States Of',
  },
  {
    id: 'fo',
    img: './imgs/flags/fo.png',
    nome: 'Faroe Islands',
  },
  {
    id: 'fr',
    img: './imgs/flags/fr.png',
    nome: 'France',
  },
  {
    id: 'ga',
    img: './imgs/flags/ga.png',
    nome: 'Gabon',
  },
  {
    id: 'gb',
    img: './imgs/flags/gb.png',
    nome: 'United Kingdom',
  },
  {
    id: 'gd',
    img: './imgs/flags/gd.png',
    nome: 'Grenada',
  },
  {
    id: 'ge',
    img: './imgs/flags/ge.png',
    nome: 'Georgia',
  },
  {
    id: 'gf',
    img: './imgs/flags/gf.png',
    nome: 'French Guiana',
  },
  {
    id: 'gg',
    img: './imgs/flags/gg.png',
    nome: 'Guernsey',
  },
  {
    id: 'gh',
    img: './imgs/flags/gh.png',
    nome: 'Ghana',
  },
  {
    id: 'gi',
    img: './imgs/flags/gi.png',
    nome: 'Gibraltar',
  },
  {
    id: 'gl',
    img: './imgs/flags/gl.png',
    nome: 'Greenland',
  },
  {
    id: 'gm',
    img: './imgs/flags/gm.png',
    nome: 'Gambia',
  },
  {
    id: 'gn',
    img: './imgs/flags/gn.png',
    nome: 'Guinea',
  },
  {
    id: 'gp',
    img: './imgs/flags/gp.png',
    nome: 'Guadeloupe',
  },
  {
    id: 'gq',
    img: './imgs/flags/gq.png',
    nome: 'Equatorial Guinea',
  },
  {
    id: 'gr',
    img: './imgs/flags/gr.png',
    nome: 'Greece',
  },
  {
    id: 'gs',
    img: './imgs/flags/gs.png',
    nome: 'South Georgia and the South Sandwich Islands',
  },
  {
    id: 'gt',
    img: './imgs/flags/gt.png',
    nome: 'Guatemala',
  },
  {
    id: 'gu',
    img: './imgs/flags/gu.png',
    nome: 'Guam',
  },
  {
    id: 'gw',
    img: './imgs/flags/gw.png',
    nome: 'Guinea-Bissau',
  },
  {
    id: 'gy',
    img: './imgs/flags/gy.png',
    nome: 'Guyana',
  },
  {
    id: 'hk',
    img: './imgs/flags/hk.png',
    nome: 'Hong Kong',
  },
  {
    id: 'hm',
    img: './imgs/flags/hm.png',
    nome: 'Heard and McDonald Islands',
  },
  {
    id: 'hn',
    img: './imgs/flags/hn.png',
    nome: 'Honduras',
  },
  {
    id: 'hr',
    img: './imgs/flags/hr.png',
    nome: 'Croatia',
  },
  {
    id: 'ht',
    img: './imgs/flags/ht.png',
    nome: 'Haiti',
  },
  {
    id: 'hu',
    img: './imgs/flags/hu.png',
    nome: 'Hungary',
  },
  {
    id: 'id',
    img: './imgs/flags/id.png',
    nome: 'Indonesia',
  },
  {
    id: 'ie',
    img: './imgs/flags/ie.png',
    nome: 'Ireland',
  },
  {
    id: 'il',
    img: './imgs/flags/il.png',
    nome: 'Israel',
  },
  {
    id: 'im',
    img: './imgs/flags/im.png',
    nome: 'Isle of Man',
  },
  {
    id: 'in',
    img: './imgs/flags/in.png',
    nome: 'India',
  },
  {
    id: 'io',
    img: './imgs/flags/io.png',
    nome: 'British Indian Ocean Territory',
  },
  {
    id: 'iq',
    img: './imgs/flags/iq.png',
    nome: 'Iraq',
  },
  {
    id: 'ir',
    img: './imgs/flags/ir.png',
    nome: 'Iran, Islamic Republic Of',
  },
  {
    id: 'is',
    img: './imgs/flags/is.png',
    nome: 'Iceland',
  },
  {
    id: 'it',
    img: './imgs/flags/it.png',
    nome: 'Italy',
  },
  {
    id: 'je',
    img: './imgs/flags/je.png',
    nome: 'Jersey',
  },
  {
    id: 'jm',
    img: './imgs/flags/jm.png',
    nome: 'Jamaica',
  },
  {
    id: 'jo',
    img: './imgs/flags/jo.png',
    nome: 'Jordan',
  },
  {
    id: 'jp',
    img: './imgs/flags/jp.png',
    nome: 'Japan',
  },
  {
    id: 'ke',
    img: './imgs/flags/ke.png',
    nome: 'Kenya',
  },
  {
    id: 'kg',
    img: './imgs/flags/kg.png',
    nome: 'Kyrgyzstan',
  },
  {
    id: 'kh',
    img: './imgs/flags/kh.png',
    nome: 'Cambodia',
  },
  {
    id: 'ki',
    img: './imgs/flags/ki.png',
    nome: 'Kiribati',
  },
  {
    id: 'km',
    img: './imgs/flags/km.png',
    nome: 'Comoros',
  },
  {
    id: 'kn',
    img: './imgs/flags/kn.png',
    nome: 'Saint Kitts And Nevis',
  },
  {
    id: 'kp',
    img: './imgs/flags/kp.png',
    nome: "Korea, Democratic People's Republic Of",
  },
  {
    id: 'kr',
    img: './imgs/flags/kr.png',
    nome: 'Korea, Republic of',
  },
  {
    id: 'kw',
    img: './imgs/flags/kw.png',
    nome: 'Kuwait',
  },
  {
    id: 'ky',
    img: './imgs/flags/ky.png',
    nome: 'Cayman Islands',
  },
  {
    id: 'kz',
    img: './imgs/flags/kz.png',
    nome: 'Kazakhstan',
  },
  {
    id: 'la',
    img: './imgs/flags/la.png',
    nome: "Lao People's Democratic Republic",
  },
  {
    id: 'lb',
    img: './imgs/flags/lb.png',
    nome: 'Lebanon',
  },
  {
    id: 'lc',
    img: './imgs/flags/lc.png',
    nome: 'Saint Lucia',
  },
  {
    id: 'li',
    img: './imgs/flags/li.png',
    nome: 'Liechtenstein',
  },
  {
    id: 'lk',
    img: './imgs/flags/lk.png',
    nome: 'Sri Lanka',
  },
  {
    id: 'lr',
    img: './imgs/flags/lr.png',
    nome: 'Liberia',
  },
  {
    id: 'ls',
    img: './imgs/flags/ls.png',
    nome: 'Lesotho',
  },
  {
    id: 'lt',
    img: './imgs/flags/lt.png',
    nome: 'Lithuania',
  },
  {
    id: 'lu',
    img: './imgs/flags/lu.png',
    nome: 'Luxembourg',
  },
  {
    id: 'lv',
    img: './imgs/flags/lv.png',
    nome: 'Latvia',
  },
  {
    id: 'ly',
    img: './imgs/flags/ly.png',
    nome: 'Libya',
  },
  {
    id: 'ma',
    img: './imgs/flags/ma.png',
    nome: 'Morocco',
  },
  {
    id: 'mc',
    img: './imgs/flags/mc.png',
    nome: 'Monaco',
  },
  {
    id: 'md',
    img: './imgs/flags/md.png',
    nome: 'Moldova, Republic of',
  },
  {
    id: 'me',
    img: './imgs/flags/me.png',
    nome: 'Montenegro',
  },
  {
    id: 'mf',
    img: './imgs/flags/mf.png',
    nome: 'Saint Martin',
  },
  {
    id: 'mg',
    img: './imgs/flags/mg.png',
    nome: 'Madagascar',
  },
  {
    id: 'mh',
    img: './imgs/flags/mh.png',
    nome: 'Marshall Islands',
  },
  {
    id: 'mk',
    img: './imgs/flags/mk.png',
    nome: 'Macedonia, the Former Yugoslav Republic Of',
  },
  {
    id: 'ml',
    img: './imgs/flags/ml.png',
    nome: 'Mali',
  },
  {
    id: 'mm',
    img: './imgs/flags/mm.png',
    nome: 'Myanmar',
  },
  {
    id: 'mn',
    img: './imgs/flags/mn.png',
    nome: 'Mongolia',
  },
  {
    id: 'mo',
    img: './imgs/flags/mo.png',
    nome: 'Macao',
  },
  {
    id: 'mp',
    img: './imgs/flags/mp.png',
    nome: 'Northern Mariana Islands',
  },
  {
    id: 'mq',
    img: './imgs/flags/mq.png',
    nome: 'Martinique',
  },
  {
    id: 'mr',
    img: './imgs/flags/mr.png',
    nome: 'Mauritania',
  },
  {
    id: 'ms',
    img: './imgs/flags/ms.png',
    nome: 'Montserrat',
  },
  {
    id: 'mt',
    img: './imgs/flags/mt.png',
    nome: 'Malta',
  },
  {
    id: 'mu',
    img: './imgs/flags/mu.png',
    nome: 'Mauritius',
  },
  {
    id: 'mv',
    img: './imgs/flags/mv.png',
    nome: 'Maldives',
  },
  {
    id: 'mw',
    img: './imgs/flags/mw.png',
    nome: 'Malawi',
  },
  {
    id: 'mx',
    img: './imgs/flags/mx.png',
    nome: 'Mexico',
  },
  {
    id: 'my',
    img: './imgs/flags/my.png',
    nome: 'Malaysia',
  },
  {
    id: 'mz',
    img: './imgs/flags/mz.png',
    nome: 'Mozambique',
  },
  {
    id: 'na',
    img: './imgs/flags/na.png',
    nome: 'Namibia',
  },
  {
    id: 'nc',
    img: './imgs/flags/nc.png',
    nome: 'New Caledonia',
  },
  {
    id: 'ne',
    img: './imgs/flags/ne.png',
    nome: 'Niger',
  },
  {
    id: 'nf',
    img: './imgs/flags/nf.png',
    nome: 'Norfolk Island',
  },
  {
    id: 'ng',
    img: './imgs/flags/ng.png',
    nome: 'Nigeria',
  },
  {
    id: 'ni',
    img: './imgs/flags/ni.png',
    nome: 'Nicaragua',
  },
  {
    id: 'nl',
    img: './imgs/flags/nl.png',
    nome: 'Netherlands',
  },
  {
    id: 'no',
    img: './imgs/flags/no.png',
    nome: 'Norway',
  },
  {
    id: 'np',
    img: './imgs/flags/np.png',
    nome: 'Nepal',
  },
  {
    id: 'nr',
    img: './imgs/flags/nr.png',
    nome: 'Nauru',
  },
  {
    id: 'nu',
    img: './imgs/flags/nu.png',
    nome: 'Niue',
  },
  {
    id: 'nz',
    img: './imgs/flags/nz.png',
    nome: 'New Zealand',
  },
  {
    id: 'om',
    img: './imgs/flags/om.png',
    nome: 'Oman',
  },
  {
    id: 'pa',
    img: './imgs/flags/pa.png',
    nome: 'Panama',
  },
  {
    id: 'pe',
    img: './imgs/flags/pe.png',
    nome: 'Peru',
  },
  {
    id: 'pf',
    img: './imgs/flags/pf.png',
    nome: 'French Polynesia',
  },
  {
    id: 'pg',
    img: './imgs/flags/pg.png',
    nome: 'Papua New Guinea',
  },
  {
    id: 'ph',
    img: './imgs/flags/ph.png',
    nome: 'Philippines',
  },
  {
    id: 'pk',
    img: './imgs/flags/pk.png',
    nome: 'Pakistan',
  },
  {
    id: 'pl',
    img: './imgs/flags/pl.png',
    nome: 'Poland',
  },
  {
    id: 'pm',
    img: './imgs/flags/pm.png',
    nome: 'Saint Pierre And Miquelon',
  },
  {
    id: 'pn',
    img: './imgs/flags/pn.png',
    nome: 'Pitcairn',
  },
  {
    id: 'pr',
    img: './imgs/flags/pr.png',
    nome: 'Puerto Rico',
  },
  {
    id: 'ps',
    img: './imgs/flags/ps.png',
    nome: 'Palestine, State of',
  },
  {
    id: 'pt',
    img: './imgs/flags/pt.png',
    nome: 'Portugal',
  },
  {
    id: 'pw',
    img: './imgs/flags/pw.png',
    nome: 'Palau',
  },
  {
    id: 'py',
    img: './imgs/flags/py.png',
    nome: 'Paraguay',
  },
  {
    id: 'qa',
    img: './imgs/flags/qa.png',
    nome: 'Qatar',
  },
  {
    id: 're',
    img: './imgs/flags/re.png',
    nome: 'Réunion',
  },
  {
    id: 'ro',
    img: './imgs/flags/ro.png',
    nome: 'Romania',
  },
  {
    id: 'rs',
    img: './imgs/flags/rs.png',
    nome: 'Serbia',
  },
  {
    id: 'ru',
    img: './imgs/flags/ru.png',
    nome: 'Russian Federation',
  },
  {
    id: 'rw',
    img: './imgs/flags/rw.png',
    nome: 'Rwanda',
  },
  {
    id: 'sa',
    img: './imgs/flags/sa.png',
    nome: 'Saudi Arabia',
  },
  {
    id: 'sb',
    img: './imgs/flags/sb.png',
    nome: 'Solomon Islands',
  },
  {
    id: 'sc',
    img: './imgs/flags/sc.png',
    nome: 'Seychelles',
  },
  {
    id: 'sd',
    img: './imgs/flags/sd.png',
    nome: 'Sudan',
  },
  {
    id: 'se',
    img: './imgs/flags/se.png',
    nome: 'Sweden',
  },
  {
    id: 'sg',
    img: './imgs/flags/sg.png',
    nome: 'Singapore',
  },
  {
    id: 'sh',
    img: './imgs/flags/sh.png',
    nome: 'Saint Helena',
  },
  {
    id: 'si',
    img: './imgs/flags/si.png',
    nome: 'Slovenia',
  },
  {
    id: 'sj',
    img: './imgs/flags/sj.png',
    nome: 'Svalbard And Jan Mayen',
  },
  {
    id: 'sk',
    img: './imgs/flags/sk.png',
    nome: 'Slovakia',
  },
  {
    id: 'sl',
    img: './imgs/flags/sl.png',
    nome: 'Sierra Leone',
  },
  {
    id: 'sm',
    img: './imgs/flags/sm.png',
    nome: 'San Marino',
  },
  {
    id: 'sn',
    img: './imgs/flags/sn.png',
    nome: 'Senegal',
  },
  {
    id: 'so',
    img: './imgs/flags/so.png',
    nome: 'Somalia',
  },
  {
    id: 'sr',
    img: './imgs/flags/sr.png',
    nome: 'Surinome',
  },
  {
    id: 'ss',
    img: './imgs/flags/ss.png',
    nome: 'South Sudan',
  },
  {
    id: 'st',
    img: './imgs/flags/st.png',
    nome: 'Sao Tome and Principe',
  },
  {
    id: 'sv',
    img: './imgs/flags/sv.png',
    nome: 'El Salvador',
  },
  {
    id: 'sx',
    img: './imgs/flags/sx.png',
    nome: 'Sint Maarten',
  },
  {
    id: 'sy',
    img: './imgs/flags/sy.png',
    nome: 'Syrian Arab Republic',
  },
  {
    id: 'sz',
    img: './imgs/flags/sz.png',
    nome: 'Swaziland',
  },
  {
    id: 'tc',
    img: './imgs/flags/tc.png',
    nome: 'Turks and Caicos Islands',
  },
  {
    id: 'td',
    img: './imgs/flags/td.png',
    nome: 'Chad',
  },
  {
    id: 'tf',
    img: './imgs/flags/tf.png',
    nome: 'French Southern Territories',
  },
  {
    id: 'tg',
    img: './imgs/flags/tg.png',
    nome: 'Togo',
  },
  {
    id: 'th',
    img: './imgs/flags/th.png',
    nome: 'Thailand',
  },
  {
    id: 'tj',
    img: './imgs/flags/tj.png',
    nome: 'Tajikistan',
  },
  {
    id: 'tk',
    img: './imgs/flags/tk.png',
    nome: 'Tokelau',
  },
  {
    id: 'tl',
    img: './imgs/flags/tl.png',
    nome: 'Timor-Leste',
  },
  {
    id: 'tm',
    img: './imgs/flags/tm.png',
    nome: 'Turkmenistan',
  },
  {
    id: 'tn',
    img: './imgs/flags/tn.png',
    nome: 'Tunisia',
  },
  {
    id: 'to',
    img: './imgs/flags/to.png',
    nome: 'Tonga',
  },
  {
    id: 'tr',
    img: './imgs/flags/tr.png',
    nome: 'Turkey',
  },
  {
    id: 'tt',
    img: './imgs/flags/tt.png',
    nome: 'Trinidad and Tobago',
  },
  {
    id: 'tv',
    img: './imgs/flags/tv.png',
    nome: 'Tuvalu',
  },
  {
    id: 'tw',
    img: './imgs/flags/tw.png',
    nome: 'Taiwan, Republic Of China',
  },
  {
    id: 'tz',
    img: './imgs/flags/tz.png',
    nome: 'Tanzania, United Republic of',
  },
  {
    id: 'ua',
    img: './imgs/flags/ua.png',
    nome: 'Ukraine',
  },
  {
    id: 'ug',
    img: './imgs/flags/ug.png',
    nome: 'Uganda',
  },
  {
    id: 'um',
    img: './imgs/flags/um.png',
    nome: 'United States Minor Outlying Islands',
  },
  {
    id: 'us',
    img: './imgs/flags/us.png',
    nome: 'United States',
  },
  {
    id: 'uy',
    img: './imgs/flags/uy.png',
    nome: 'Uruguay',
  },
  {
    id: 'uz',
    img: './imgs/flags/uz.png',
    nome: 'Uzbekistan',
  },
  {
    id: 'va',
    img: './imgs/flags/va.png',
    nome: 'Holy See (Vatican City State)',
  },
  {
    id: 'vc',
    img: './imgs/flags/vc.png',
    nome: 'Saint Vincent And The Grenadines',
  },
  {
    id: 've',
    img: './imgs/flags/ve.png',
    nome: 'Venezuela, Bolivarian Republic of',
  },
  {
    id: 'vg',
    img: './imgs/flags/vg.png',
    nome: 'Virgin Islands, British',
  },
  {
    id: 'vi',
    img: './imgs/flags/vi.png',
    nome: 'Virgin Islands, U.S.',
  },
  {
    id: 'vn',
    img: './imgs/flags/vn.png',
    nome: 'Vietnam',
  },
  {
    id: 'vu',
    img: './imgs/flags/vu.png',
    nome: 'Vanuatu',
  },
  {
    id: 'wf',
    img: './imgs/flags/wf.png',
    nome: 'Wallis and Futuna',
  },
  {
    id: 'ws',
    img: './imgs/flags/ws.png',
    nome: 'Samoa',
  },
  {
    id: 'ye',
    img: './imgs/flags/ye.png',
    nome: 'Yemen',
  },
  {
    id: 'yt',
    img: './imgs/flags/yt.png',
    nome: 'Mayotte',
  },
  {
    id: 'za',
    img: './imgs/flags/za.png',
    nome: 'South Africa',
  },
  {
    id: 'zm',
    img: './imgs/flags/zm.png',
    nome: 'Zambia',
  },
  {
    id: 'zw',
    img: './imgs/flags/zw.png',
    nome: 'Zimbabwe',
  },
];

export default flags;
