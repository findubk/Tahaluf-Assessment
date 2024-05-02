import { http } from 'msw';
import { BASE_URL } from 'src/constants/config';

export const handlers = [
//   http.get(BASE_URL, (req, res, ctx) => {
//     return res(
//       ctx.json({
//         success: true,
//         data: [
//           {
//             name: 'University of Berkeley, CL',
//             'state-province': 'California',
//             country: 'United States',
//             alpha_two_code: 'US',
//             web_pages: ['http://www.berkeley.edu/'],
//             domains: ['berkeley.edu'],
//           },
//           {
//             name: 'University of California, Los Angeles',
//             'state-province': 'California',
//             country: 'United States',
//             alpha_two_code: 'US',
//             web_pages: ['http://www.ucla.edu/'],
//             domains: ['ucla.edu'],
//           },
//           {
//             name: 'University of California, San Diego',
//             'state-province': 'California',
//             country: 'United States',
//             alpha_two_code: 'US',
//             web_pages: ['http://www.ucsd.edu/'],
//             domains: ['ucsd.edu'],
//           },
//         ],
//       })
//     );
//   }),
];
