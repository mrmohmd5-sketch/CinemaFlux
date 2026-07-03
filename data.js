const globalMoviesData = [
    {
        title: "Fast 5",
        desc: "يجمع 'دومينيك توريتو' (فين ديزل) وفريقه للتخطيط لعملية سرقة كبرى بقيمة 100 مليون دولار من رجل أعمال فاسد في ريو دي جانيرو، بينما يطاردهم عميل فيدرالي لا هوادة فيه [لوك هوبز].",
        poster: "https://h.top4top.io/p_3836p1ayi0.jpg",
        hdUrl: "https://playmogo.com/e/qg4nptgyoj9u", 
        sdUrl: "https://playmogo.com/e/qg4nptgyoj9u",
        rating: "7.3",
        genre: "أكشن جريمة",
        type: "movie"
    },
    {
        title: "Last Christmas",
        desc: "يروي الفيلم قصة 'كيت' (إميليا كلارك)، وهي فتاة تعيش في لندن وتعاني من سلسلة قرارات سيئة، وتعمل في متجر لبيع مستلزمات عيد الميلاد. تتغير حياتها عندما تلتقي بالشاب الغامض 'توم' (هنري غولدينغ) الذي يساعدها على تجاوز أزماتها.",
        poster: "https://a.top4top.io/p_3836uk4240.jpg",
        hdUrl: "https://playmogo.com/e/9abbkhfyhgmf", 
        sdUrl: "https://playmogo.com/e/9abbkhfyhgmf",
        rating: "6.5",
        genre: "كوميدي رومانسي",
        type: "movie"
    },
    {
        title: "Ant-Man and the Wasp",
        desc: "تبدأ الأحداث بمحاولة 'سكوت لانغ' التوازن بين حياته كأب وبطل خارق، حيث يتبقى القليل من الأيام لإنهائه فترة الإقامة الجبرية المفروضة عليه بسبب أحداث فيلم 'كابتن أمريكا: الحرب الأهلية'. خلال هذه الفترة، يتواصل معه 'هانك بيم' وابنته 'هوب' (الدبورة) لمساعدتهم في اختراق 'عالم الكم' واستعادة زوجة هانك ووالدة هوب 'جانيت'، والتي فُقدت هناك قبل عقود.",
        poster: "https://h.top4top.io/p_3836qvvqk0.jpg",
        hdUrl: "https://playmogo.com/e/vvcg77j2sk80", 
        sdUrl: "https://playmogo.com/e/vvcg77j2sk80",
        rating: "7.0",
        genre: "أكشن مغامرة",
        type: "movie"
    },
    {
        title: "Turning Red",
        desc: "في إطار من الخيال والمغامرات، تكتشف مي لي ذات الثلاثة عشر عامًا شيئًا غامضًا داخلها، حيث تتحول إلى دُب أحمر اللون عندما تتحمس بشدة لشيء ما، ويضعها الأمر في العديد من المغامرات والمواقف الغريبة.",
        poster: "https://g.top4top.io/p_3834fv9k10.jpg",
        hdUrl: "https://playmogo.com/e/mu1m4h1dkmn1", 
        sdUrl: "https://playmogo.com/e/mu1m4h1dkmn1",
        rating: "6.9",
        genre: "عائلي كوميدي خيالي",
        type: "movie"
    },
    {
        title: "Onward (مدبلج)",
        desc: "في عالم خيالي من الضواحي، يشرع شقيقان من الإلف (العزف) في رحلة استكشافية غير عادية لمعرفة ما إذا كان لا يزال هناك القليل من السحر المتبقي في العالم، لقضاء يوم أخير مع والدهما الراحل.",
        poster: "https://j.top4top.io/p_38337nmuf0.jpg",
        hdUrl: "https://playmogo.com/e/yuj41p7m9e3e", 
        sdUrl: "https://playmogo.com/e/yuj41p7m9e3e",
        rating: "7.4",
        genre: "أكشن مغامرة خيالي عائلي",
        type: "movie"
    },
    {
        title: "Eternal Sunshine of the Spotless Mind",
        desc: "بعد معرفته بأن حبيبته السابقة قد أجرت عملية طبية تجريبية لمحو كل ذكرياته من عقلها، يقرّر رجل أن يفعل الأمر ذاته بذكرياته عنها.",
        poster: "https://h.top4top.io/p_3834kaegb0.jpg",
        hdUrl: "https://playmogo.com/e/5v6o6t4jm7g3", 
        sdUrl: "https://playmogo.com/e/5v6o6t4jm7g3",
        rating: "8.3",
        genre: "رومانسي خيال علمي",
        type: "movie"
    },
    {
        title: "Onward",
        desc: "في عالم خيالي من الضواحي، يشرع شقيقان من الإلف (العزف) في رحلة استكشافية غير عادية لمعرفة ما إذا كان لا يزال هناك القليل من السحر المتبقي في العالم، لقضاء يوم أخير مع والدهما الراحل.",
        poster: "https://j.top4top.io/p_38337nmuf0.jpg",
        hdUrl: "https://playmogo.com/e/r9ciooszj0ip", 
        sdUrl: "https://playmogo.com/e/r9ciooszj0ip",
        rating: "7.4",
        genre: "أكشن مغامرة خيالي عائلي",
        type: "movie"
    },
    {
        title: "Arco",
        desc: "أركو دوريل فتى يبلغ من العمر عشر سنوات في عام ٢٩٣٢، في مستقبل مثالي حيث يعيش البشر في السحاب ويسافرون عبر الزمن باستخدام بدلات طيران بألوان قوس قزح. أركو، لصغر سنه وعدم قدرته على الطيران، يسرق عباءة أخته للسفر عبر الزمن وحجرها الكريم ليلاً، ويحاول السفر إلى الماضي البعيد لرؤية الديناصورات.",
        poster: "https://h.top4top.io/p_3833mun3l0.jpg",
        hdUrl: "https://playmogo.com/e/36f2eu5xp35t", 
        sdUrl: "https://playmogo.com/e/36f2eu5xp35t",
        rating: "8.6",
        genre: "أكشن خيال علمي عائلي",
        type: "movie"
    },
    {
        title: "Elemental",
        desc: "في مدينة صاخبة يعيش فيها سكان النار, الماء، الأرض، والنوايا بأن سجام، تلتقي إمبير (الفتاة النارية الحادة والذكية) بـ وايد (الشاب المائي المرح والرقاق). هذا اللقاء غير المتوقع يتحدى معتقداتهما عن العالم ويقودهما في رحلة لاكتشاف القواسم المشتركة بينهما، في إطار بصري مذهل وقصة تلمس القلوب وتثبت أن الأضداد تتجاذب فعلاً.",
        poster: "https://l.top4top.io/p_38336lly20.jpg",
        hdUrl: "https://playmogo.com/e/v4mp3htzt0em", 
        sdUrl: "https://playmogo.com/e/v4mp3htzt0em",
        rating: "7.0",
        genre: "كوميدي عائلي خيالي",
        type: "movie"
    },
    {
        title: "The Super Mario Bros Movie",
        desc: "في إطار من المغامرات والخيال، يسافر سباك يدعى ماريو عبر متاهة تحت الأرض مع شقيقه لويجي، لإنقاذ أميرة مسجونة.",
        poster: "https://a.top4top.io/p_3832nihab0.jpg",
        hdUrl: "https://playmogo.com/e/gjeby3orhit6", 
        sdUrl: "https://playmogo.com/e/gjeby3orhit6",
        rating: "7/10",
        genre: "أكشن مغامرة خيالي عائلي",
        type: "movie"
    }
];
