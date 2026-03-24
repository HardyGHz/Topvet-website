
import { motion } from 'framer-motion';

const reviewsData = [
  { "author_name": "Delia", "text": "Am fost aseară pt prima dată,și am rămas foarte mulțumită și recunoscătoare pt toate sfaturile,explicațiile și amabilitatea oferita.", "stars": 5.0, "date": "acum 5 luni" },
  { "author_name": "Patricia Hasmasan", "text": "Recomand acest cabinet, mai ales pe doamna doctor veterinar Gabriela Bumbu. Un om excepțional, mai ales grija ei fata de animalutul tau. ❤️", "stars": 5.0, "date": "acum 6 luni" },
  { "author_name": "Magdalena Farkas", "text": "Frecventez în fiecare luna acest cabinet,cumpărând cățelușului meu multe lucruri de care are nevoie din acest magazin,facandu-i vaccinuri,tăiat de unghii și multe altele...", "stars": 5.0, "date": "acum 10 luni" },
  { "author_name": "john wicke", "text": "Frecventez acest cabinet de cativa ani. Am avut de cateva ori nevoie de ajutor in niste situatii in care nu m-as fi descurcat singur. A contat enorm.", "stars": 5.0, "date": "acum un an" },
  { "author_name": "Andreea Matei", "text": "Am fost impresionat de profesionalismul și dedicarea doamnei doctor Gabriela, care a demonstrat o grijă deosebită față de micuța mea felină.", "stars": 5.0, "date": "acum un an" },
  { "author_name": "Camelia Hegyi", "text": "Au fost singurii după zeci de telefoane peste tot care au venit cu o soluție și ajutor când am avut nevoie. Implicarea, profesionalismul și empatia îi recomandă.", "stars": 5.0, "date": "acum un an" },
  { "author_name": "Dimbar Darius", "text": "Top. Recomand cu cea mai mare încredere! Își fac treaba cu drag și iubire fata de animale, profesionalism și dedicare. Personal extraordinar de primitor și respectuos.", "stars": 5.0, "date": "acum un an" },
  { "author_name": "Alexandra Mihaela Buzan", "text": "Mereu mulțumiți de profesionalism! Neo( 11 ani) , va mulțumește!", "stars": 5.0, "date": "acum 2 ani" },
  { "author_name": "Achim Alin", "text": "Recomandam cu cea mai mare incredere cabinetul Topvet! Rara mai intalnesti medici precum e Doamna Doctor Gabriela care e implicata si te ajuta pana la capat.", "stars": 5.0, "date": "acum 2 ani" }
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

function getAvatarColor(name: string) {
  const colors = [
    'bg-emerald-100 text-emerald-700', 
    'bg-teal-100 text-teal-700', 
    'bg-cyan-100 text-cyan-700', 
    'bg-slate-100 text-slate-700'
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

const StarSVG = () => (
  <svg className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ExternalGoogleSVG = () => (
  <svg className="w-5 h-5 text-slate-400 opacity-60" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
  </svg>
);

const ReviewCard = ({ review }: { review: typeof reviewsData[0] }) => (
  <div className="glass-card w-[350px] sm:w-[400px] flex-shrink-0 rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
    <div className="flex items-start gap-4 mb-4">
      <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-lg ${getAvatarColor(review.author_name)}`}>
        {getInitials(review.author_name)}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 text-[16px] leading-tight">{review.author_name}</h4>
        <p className="text-sm text-slate-500 mt-0.5">{review.date}</p>
      </div>
    </div>
    <div className="flex gap-1 mb-3">
      {Array(Math.floor(review.stars)).fill(0).map((_, i) => <StarSVG key={i} />)}
    </div>
    <p className="text-slate-700 leading-relaxed text-[15px] flex-grow">
      "{review.text}"
    </p>
    <div className="flex justify-end mt-4">
      <ExternalGoogleSVG />
    </div>
  </div>
);

export default function Testimonials() {
  const row1Data = reviewsData.slice(0, 5);
  const row2Data = reviewsData.slice(5, 9);
  
  // Duplicate arrays heavily to ensure smooth infinite wrap around
  const row1Loop = Array(12).fill(row1Data).flat();
  const row2Loop = Array(12).fill(row2Data).flat();

  return (
    <section id="recenzii" className="py-24 relative overflow-x-hidden bg-[#fafafa]">
      
      {/* Background Graphic Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vh] rounded-full bg-emerald-100/50 blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[70vh] rounded-full bg-teal-50/60 blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3.5 bg-white shadow-sm border border-emerald-100 rounded-2xl mb-6 text-emerald-600"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-[48px] font-extrabold text-slate-800 tracking-tight leading-tight mb-4"
          >
            Părerea clienților noștri
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg sm:text-[20px] max-w-2xl mx-auto leading-relaxed"
          >
            Am ajutat peste zeci de animale de companie, iar clienții noștri ne recomandă mai departe cu drag.
          </motion.p>
        </div>
      </div>

      <div className="w-full relative z-10 shrink-0 flex flex-col gap-6" style={{ maxWidth: '100vw' }}>
        {/* Fade edge masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-64 bg-gradient-to-r from-[#fafafa] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-64 bg-gradient-to-l from-[#fafafa] to-transparent z-20 pointer-events-none"></div>
        
        {/* Row 1 */}
        <div className="w-[200vw] lg:w-[150vw] ml-[-50vw] lg:ml-[-25vw] relative flex overflow-hidden">
          <div className="flex w-max animate-marquee-left gap-6 py-2 px-3 hover:[animation-play-state:paused]">
            {row1Loop.map((review, idx) => <ReviewCard key={`r1-${idx}`} review={review} />)}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-[200vw] lg:w-[150vw] ml-[-50vw] lg:ml-[-25vw] relative flex overflow-hidden">
          <div className="flex w-max animate-marquee-right gap-6 py-2 px-3 hover:[animation-play-state:paused]">
            {row2Loop.map((review, idx) => <ReviewCard key={`r2-${idx}`} review={review} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
