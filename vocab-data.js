// =================== VOCABULARY DATA ===================
// 10 chủ đề IELTS phổ biến × 2 tier × 30 từ = 600 từ
// Tier 'foundation' (band 5-6): Từ thông dụng, nền tảng
// Tier 'intermediate' (band 6.5-7.5): Từ academic, nâng cao
// Mỗi từ: w, ipa, pos, vi, ex, coll, tier

const VOCAB_DATA = {

  // ==================== ENVIRONMENT ====================
  'environment': {
    title: 'Environment',
    titleVi: 'Môi trường',
    icon: '🌍',
    color: 'mint',
    words: [
      // ----- FOUNDATION (band 5-6) -----
      { w: 'pollution', ipa: '/pəˈluːʃn/', pos: 'n', vi: 'ô nhiễm', ex: 'Air pollution kills millions of people each year.', coll: 'air/water/noise pollution, combat pollution', tier: 'foundation' },
      { w: 'recycle', ipa: '/ˌriːˈsaɪkl/', pos: 'v', vi: 'tái chế', ex: 'We should recycle paper and plastic.', coll: 'recycle waste, recycling bin', tier: 'foundation' },
      { w: 'wildlife', ipa: '/ˈwaɪldlaɪf/', pos: 'n', vi: 'động vật hoang dã', ex: 'Africa is home to incredible wildlife.', coll: 'protect wildlife, wildlife reserve', tier: 'foundation' },
      { w: 'climate change', ipa: '/ˈklaɪmət tʃeɪndʒ/', pos: 'n', vi: 'biến đổi khí hậu', ex: 'Climate change is the greatest challenge of our time.', coll: 'address climate change', tier: 'foundation' },
      { w: 'global warming', ipa: '/ˌɡləʊbl ˈwɔːmɪŋ/', pos: 'n', vi: 'sự nóng lên toàn cầu', ex: 'Global warming threatens coastal cities.', coll: 'combat global warming', tier: 'foundation' },
      { w: 'natural disaster', ipa: '/ˈnætʃrəl dɪˈzɑːstə/', pos: 'n', vi: 'thiên tai', ex: 'Climate change increases natural disasters.', coll: 'devastating natural disaster', tier: 'foundation' },
      { w: 'environment', ipa: '/ɪnˈvaɪrənmənt/', pos: 'n', vi: 'môi trường', ex: 'We must protect the environment.', coll: 'protect/damage the environment', tier: 'foundation' },
      { w: 'rubbish', ipa: '/ˈrʌbɪʃ/', pos: 'n', vi: 'rác', ex: 'They throw rubbish into the river.', coll: 'pile of rubbish, dump rubbish', tier: 'foundation' },
      { w: 'waste', ipa: '/weɪst/', pos: 'n/v', vi: 'chất thải/lãng phí', ex: 'Household waste should be sorted.', coll: 'waste of time, household waste', tier: 'foundation' },
      { w: 'destroy', ipa: '/dɪˈstrɔɪ/', pos: 'v', vi: 'phá hủy', ex: 'Floods destroyed many homes.', coll: 'destroy habitats, completely destroy', tier: 'foundation' },
      { w: 'reduce', ipa: '/rɪˈdjuːs/', pos: 'v', vi: 'giảm', ex: 'We need to reduce energy consumption.', coll: 'reduce emissions, reduce pollution', tier: 'foundation' },
      { w: 'protect', ipa: '/prəˈtekt/', pos: 'v', vi: 'bảo vệ', ex: 'Laws protect endangered animals.', coll: 'protect the environment', tier: 'foundation' },
      { w: 'forest', ipa: '/ˈfɒrɪst/', pos: 'n', vi: 'rừng', ex: 'The rainforest is being destroyed.', coll: 'tropical forest, dense forest', tier: 'foundation' },
      { w: 'energy', ipa: '/ˈenədʒi/', pos: 'n', vi: 'năng lượng', ex: 'Solar energy is becoming cheaper.', coll: 'renewable energy, save energy', tier: 'foundation' },
      { w: 'damage', ipa: '/ˈdæmɪdʒ/', pos: 'n/v', vi: 'thiệt hại', ex: 'The storm caused severe damage.', coll: 'cause/do damage, severe damage', tier: 'foundation' },
      // ----- INTERMEDIATE (band 6.5-7.5) -----
      { w: 'sustainable', ipa: '/səˈsteɪnəbl/', pos: 'adj', vi: 'bền vững', ex: 'We need to find sustainable solutions to climate change.', coll: 'sustainable development', tier: 'intermediate' },
      { w: 'biodiversity', ipa: '/ˌbaɪəʊdaɪˈvɜːsəti/', pos: 'n', vi: 'đa dạng sinh học', ex: 'The Amazon rainforest has incredible biodiversity.', coll: 'loss of biodiversity', tier: 'intermediate' },
      { w: 'deforestation', ipa: '/ˌdiːˌfɒrɪˈsteɪʃn/', pos: 'n', vi: 'nạn phá rừng', ex: 'Deforestation is a major cause of species extinction.', coll: 'tackle deforestation', tier: 'intermediate' },
      { w: 'emission', ipa: '/iˈmɪʃn/', pos: 'n', vi: 'sự thải/khí thải', ex: 'Carbon emissions must be reduced urgently.', coll: 'greenhouse gas emissions', tier: 'intermediate' },
      { w: 'renewable', ipa: '/rɪˈnjuːəbl/', pos: 'adj', vi: 'có thể tái tạo', ex: 'Solar power is a renewable energy source.', coll: 'renewable energy', tier: 'intermediate' },
      { w: 'depletion', ipa: '/dɪˈpliːʃn/', pos: 'n', vi: 'sự cạn kiệt', ex: 'The depletion of natural resources is alarming.', coll: 'resource depletion', tier: 'intermediate' },
      { w: 'conservation', ipa: '/ˌkɒnsəˈveɪʃn/', pos: 'n', vi: 'bảo tồn', ex: 'Wildlife conservation requires global cooperation.', coll: 'conservation efforts', tier: 'intermediate' },
      { w: 'ecosystem', ipa: '/ˈiːkəʊsɪstəm/', pos: 'n', vi: 'hệ sinh thái', ex: 'Coral reefs are fragile ecosystems.', coll: 'marine ecosystem', tier: 'intermediate' },
      { w: 'habitat', ipa: '/ˈhæbɪtæt/', pos: 'n', vi: 'môi trường sống', ex: 'Many species are losing their natural habitat.', coll: 'natural habitat, habitat loss', tier: 'intermediate' },
      { w: 'endangered', ipa: '/ɪnˈdeɪndʒəd/', pos: 'adj', vi: 'có nguy cơ tuyệt chủng', ex: 'Tigers are an endangered species.', coll: 'endangered species', tier: 'intermediate' },
      { w: 'contaminate', ipa: '/kənˈtæmɪneɪt/', pos: 'v', vi: 'làm ô nhiễm', ex: 'Chemicals contaminated the river.', coll: 'contaminate the water/soil', tier: 'intermediate' },
      { w: 'mitigate', ipa: '/ˈmɪtɪɡeɪt/', pos: 'v', vi: 'giảm nhẹ', ex: 'Trees help mitigate the effects of climate change.', coll: 'mitigate risks', tier: 'intermediate' },
      { w: 'extinct', ipa: '/ɪkˈstɪŋkt/', pos: 'adj', vi: 'tuyệt chủng', ex: 'Dinosaurs have been extinct for 65 million years.', coll: 'become extinct', tier: 'intermediate' },
      { w: 'carbon footprint', ipa: '/ˈkɑːbən ˈfʊtprɪnt/', pos: 'n', vi: 'lượng khí carbon thải ra', ex: 'Cycling reduces your carbon footprint.', coll: 'reduce carbon footprint', tier: 'intermediate' },
      { w: 'exploit', ipa: '/ɪkˈsplɔɪt/', pos: 'v', vi: 'khai thác', ex: 'Humans exploit natural resources.', coll: 'exploit resources', tier: 'intermediate' }
    ]
  },

  // ==================== EDUCATION ====================
  'education': {
    title: 'Education',
    titleVi: 'Giáo dục',
    icon: '📚',
    color: 'sky',
    words: [
      // ----- FOUNDATION -----
      { w: 'student', ipa: '/ˈstjuːdnt/', pos: 'n', vi: 'sinh viên/học sinh', ex: 'She is a hardworking student.', coll: 'good/lazy student, foreign student', tier: 'foundation' },
      { w: 'teacher', ipa: '/ˈtiːtʃə/', pos: 'n', vi: 'giáo viên', ex: 'My teacher is very patient.', coll: 'experienced teacher, head teacher', tier: 'foundation' },
      { w: 'school', ipa: '/skuːl/', pos: 'n', vi: 'trường học', ex: 'Children go to school every day.', coll: 'primary school, secondary school', tier: 'foundation' },
      { w: 'university', ipa: '/ˌjuːnɪˈvɜːsəti/', pos: 'n', vi: 'đại học', ex: 'He studies at university.', coll: 'go to university, university degree', tier: 'foundation' },
      { w: 'subject', ipa: '/ˈsʌbdʒɪkt/', pos: 'n', vi: 'môn học', ex: 'My favourite subject is history.', coll: 'core subject, optional subject', tier: 'foundation' },
      { w: 'exam', ipa: '/ɪɡˈzæm/', pos: 'n', vi: 'kỳ thi', ex: 'I have an exam next week.', coll: 'pass/fail an exam, take an exam', tier: 'foundation' },
      { w: 'lesson', ipa: '/ˈlesn/', pos: 'n', vi: 'bài học', ex: 'The lesson lasts an hour.', coll: 'private lesson, language lesson', tier: 'foundation' },
      { w: 'homework', ipa: '/ˈhəʊmwɜːk/', pos: 'n', vi: 'bài tập về nhà', ex: 'I do my homework after dinner.', coll: 'do homework, finish homework', tier: 'foundation' },
      { w: 'study', ipa: '/ˈstʌdi/', pos: 'v/n', vi: 'học', ex: 'I study English every day.', coll: 'study hard, study abroad', tier: 'foundation' },
      { w: 'learn', ipa: '/lɜːn/', pos: 'v', vi: 'học', ex: 'Children learn quickly.', coll: 'learn to do, learn from mistakes', tier: 'foundation' },
      { w: 'knowledge', ipa: '/ˈnɒlɪdʒ/', pos: 'n', vi: 'kiến thức', ex: 'Reading expands your knowledge.', coll: 'gain/acquire knowledge', tier: 'foundation' },
      { w: 'skill', ipa: '/skɪl/', pos: 'n', vi: 'kỹ năng', ex: 'Communication skills are important.', coll: 'develop skills, soft skills', tier: 'foundation' },
      { w: 'qualification', ipa: '/ˌkwɒlɪfɪˈkeɪʃn/', pos: 'n', vi: 'bằng cấp', ex: 'She has many qualifications.', coll: 'gain qualifications', tier: 'foundation' },
      { w: 'degree', ipa: '/dɪˈɡriː/', pos: 'n', vi: 'bằng (đại học)', ex: 'He has a degree in physics.', coll: 'university degree, master\'s degree', tier: 'foundation' },
      { w: 'classroom', ipa: '/ˈklɑːsruːm/', pos: 'n', vi: 'lớp học', ex: 'The classroom was full of students.', coll: 'classroom environment, in the classroom', tier: 'foundation' },
      // ----- INTERMEDIATE -----
      { w: 'curriculum', ipa: '/kəˈrɪkjələm/', pos: 'n', vi: 'chương trình giảng dạy', ex: 'The school curriculum includes mathematics and arts.', coll: 'design a curriculum', tier: 'intermediate' },
      { w: 'literacy', ipa: '/ˈlɪtərəsi/', pos: 'n', vi: 'sự biết đọc biết viết', ex: 'Adult literacy rates have improved globally.', coll: 'literacy rate, digital literacy', tier: 'intermediate' },
      { w: 'scholarship', ipa: '/ˈskɒləʃɪp/', pos: 'n', vi: 'học bổng', ex: 'She won a scholarship to study abroad.', coll: 'apply for a scholarship', tier: 'intermediate' },
      { w: 'undergraduate', ipa: '/ˌʌndəˈɡrædʒuət/', pos: 'n', vi: 'sinh viên đại học', ex: 'Most undergraduates live on campus.', coll: 'undergraduate degree', tier: 'intermediate' },
      { w: 'postgraduate', ipa: '/ˌpəʊstˈɡrædʒuət/', pos: 'n', vi: 'sau đại học', ex: 'He is doing a postgraduate course in economics.', coll: 'postgraduate study', tier: 'intermediate' },
      { w: 'extracurricular', ipa: '/ˌekstrəkəˈrɪkjələ/', pos: 'adj', vi: 'ngoại khóa', ex: 'Extracurricular activities develop social skills.', coll: 'extracurricular activities', tier: 'intermediate' },
      { w: 'rote learning', ipa: '/ˈrəʊt ˈlɜːnɪŋ/', pos: 'n', vi: 'học vẹt', ex: 'Rote learning discourages critical thinking.', coll: 'rely on rote learning', tier: 'intermediate' },
      { w: 'critical thinking', ipa: '/ˈkrɪtɪkl ˈθɪŋkɪŋ/', pos: 'n', vi: 'tư duy phản biện', ex: 'Schools should foster critical thinking.', coll: 'develop critical thinking skills', tier: 'intermediate' },
      { w: 'pedagogy', ipa: '/ˈpedəɡɒdʒi/', pos: 'n', vi: 'phương pháp sư phạm', ex: 'Modern pedagogy emphasizes student engagement.', coll: 'innovative pedagogy', tier: 'intermediate' },
      { w: 'lifelong learning', ipa: '/ˌlaɪflɒŋ ˈlɜːnɪŋ/', pos: 'n', vi: 'học tập suốt đời', ex: 'Lifelong learning is essential in today\'s economy.', coll: 'promote lifelong learning', tier: 'intermediate' },
      { w: 'vocational', ipa: '/vəʊˈkeɪʃənl/', pos: 'adj', vi: 'thuộc về nghề nghiệp', ex: 'Vocational training prepares students for specific careers.', coll: 'vocational training', tier: 'intermediate' },
      { w: 'plagiarism', ipa: '/ˈpleɪdʒərɪzəm/', pos: 'n', vi: 'đạo văn', ex: 'Universities have strict policies on plagiarism.', coll: 'accuse of plagiarism', tier: 'intermediate' },
      { w: 'dissertation', ipa: '/ˌdɪsəˈteɪʃn/', pos: 'n', vi: 'luận văn', ex: 'She is writing her doctoral dissertation.', coll: 'write a dissertation', tier: 'intermediate' },
      { w: 'tertiary education', ipa: '/ˈtɜːʃəri ˌedʒuˈkeɪʃn/', pos: 'n', vi: 'giáo dục bậc cao', ex: 'Tertiary education is becoming more accessible.', coll: 'access to tertiary education', tier: 'intermediate' },
      { w: 'autonomy', ipa: '/ɔːˈtɒnəmi/', pos: 'n', vi: 'sự tự chủ', ex: 'Learner autonomy is encouraged in modern classrooms.', coll: 'student autonomy', tier: 'intermediate' }
    ]
  },

  // ==================== TECHNOLOGY ====================
  'technology': {
    title: 'Technology',
    titleVi: 'Công nghệ',
    icon: '💻',
    color: 'lavender',
    words: [
      // ----- FOUNDATION -----
      { w: 'computer', ipa: '/kəmˈpjuːtə/', pos: 'n', vi: 'máy tính', ex: 'I use a computer at work.', coll: 'personal computer, computer skills', tier: 'foundation' },
      { w: 'internet', ipa: '/ˈɪntənet/', pos: 'n', vi: 'mạng internet', ex: 'The internet has changed our lives.', coll: 'on the internet, internet connection', tier: 'foundation' },
      { w: 'website', ipa: '/ˈwebsaɪt/', pos: 'n', vi: 'trang web', ex: 'I visited their website yesterday.', coll: 'visit/browse a website', tier: 'foundation' },
      { w: 'email', ipa: '/ˈiːmeɪl/', pos: 'n', vi: 'thư điện tử', ex: 'Please send me an email.', coll: 'send/receive an email', tier: 'foundation' },
      { w: 'app', ipa: '/æp/', pos: 'n', vi: 'ứng dụng', ex: 'There\'s an app for everything now.', coll: 'mobile app, download an app', tier: 'foundation' },
      { w: 'smartphone', ipa: '/ˈsmɑːtfəʊn/', pos: 'n', vi: 'điện thoại thông minh', ex: 'Most people own a smartphone.', coll: 'use a smartphone', tier: 'foundation' },
      { w: 'social media', ipa: '/ˈsəʊʃl ˈmiːdiə/', pos: 'n', vi: 'mạng xã hội', ex: 'Social media affects daily life.', coll: 'use social media', tier: 'foundation' },
      { w: 'download', ipa: '/ˌdaʊnˈləʊd/', pos: 'v', vi: 'tải xuống', ex: 'I downloaded the file last night.', coll: 'download an app/file', tier: 'foundation' },
      { w: 'online', ipa: '/ˌɒnˈlaɪn/', pos: 'adj/adv', vi: 'trực tuyến', ex: 'I do my shopping online.', coll: 'shop online, online course', tier: 'foundation' },
      { w: 'technology', ipa: '/tekˈnɒlədʒi/', pos: 'n', vi: 'công nghệ', ex: 'Technology changes rapidly.', coll: 'new technology, use technology', tier: 'foundation' },
      { w: 'device', ipa: '/dɪˈvaɪs/', pos: 'n', vi: 'thiết bị', ex: 'Modern devices are very thin.', coll: 'electronic device, mobile device', tier: 'foundation' },
      { w: 'software', ipa: '/ˈsɒftweə/', pos: 'n', vi: 'phần mềm', ex: 'This software is easy to use.', coll: 'install software, software developer', tier: 'foundation' },
      { w: 'screen', ipa: '/skriːn/', pos: 'n', vi: 'màn hình', ex: 'Looking at screens hurts my eyes.', coll: 'screen time, big screen', tier: 'foundation' },
      { w: 'invent', ipa: '/ɪnˈvent/', pos: 'v', vi: 'phát minh', ex: 'They invented a new machine.', coll: 'invent a device', tier: 'foundation' },
      { w: 'modern', ipa: '/ˈmɒdn/', pos: 'adj', vi: 'hiện đại', ex: 'Modern phones are powerful.', coll: 'modern technology', tier: 'foundation' },
      // ----- INTERMEDIATE -----
      { w: 'innovation', ipa: '/ˌɪnəˈveɪʃn/', pos: 'n', vi: 'sự đổi mới', ex: 'Innovation drives economic growth.', coll: 'technological innovation', tier: 'intermediate' },
      { w: 'artificial intelligence', ipa: '/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/', pos: 'n', vi: 'trí tuệ nhân tạo', ex: 'AI is transforming many industries.', coll: 'advances in AI', tier: 'intermediate' },
      { w: 'cutting-edge', ipa: '/ˈkʌtɪŋ edʒ/', pos: 'adj', vi: 'tiên tiến nhất', ex: 'They use cutting-edge technology.', coll: 'cutting-edge technology', tier: 'intermediate' },
      { w: 'automation', ipa: '/ˌɔːtəˈmeɪʃn/', pos: 'n', vi: 'sự tự động hóa', ex: 'Automation may replace many jobs.', coll: 'industrial automation', tier: 'intermediate' },
      { w: 'cybersecurity', ipa: '/ˌsaɪbəsɪˈkjʊərəti/', pos: 'n', vi: 'an ninh mạng', ex: 'Cybersecurity is a growing concern.', coll: 'cybersecurity threats', tier: 'intermediate' },
      { w: 'breakthrough', ipa: '/ˈbreɪkθruː/', pos: 'n', vi: 'đột phá', ex: 'Scientists made a major breakthrough.', coll: 'major breakthrough', tier: 'intermediate' },
      { w: 'obsolete', ipa: '/ˈɒbsəliːt/', pos: 'adj', vi: 'lỗi thời', ex: 'Many skills become obsolete quickly.', coll: 'render obsolete', tier: 'intermediate' },
      { w: 'algorithm', ipa: '/ˈælɡərɪðəm/', pos: 'n', vi: 'thuật toán', ex: 'Algorithms decide what we see online.', coll: 'develop an algorithm', tier: 'intermediate' },
      { w: 'digital divide', ipa: '/ˈdɪdʒɪtl dɪˈvaɪd/', pos: 'n', vi: 'khoảng cách số', ex: 'The digital divide separates rich and poor.', coll: 'bridge the digital divide', tier: 'intermediate' },
      { w: 'virtual', ipa: '/ˈvɜːtʃuəl/', pos: 'adj', vi: 'ảo', ex: 'Virtual meetings have become common.', coll: 'virtual reality, virtual meeting', tier: 'intermediate' },
      { w: 'streamline', ipa: '/ˈstriːmlaɪn/', pos: 'v', vi: 'tinh giản', ex: 'Technology streamlines business processes.', coll: 'streamline operations', tier: 'intermediate' },
      { w: 'proliferation', ipa: '/prəˌlɪfəˈreɪʃn/', pos: 'n', vi: 'sự gia tăng nhanh', ex: 'The proliferation of devices is alarming.', coll: 'proliferation of nuclear weapons', tier: 'intermediate' },
      { w: 'state-of-the-art', ipa: '/ˌsteɪt əv ði ˈɑːt/', pos: 'adj', vi: 'tối tân', ex: 'The lab has state-of-the-art equipment.', coll: 'state-of-the-art technology', tier: 'intermediate' },
      { w: 'revolutionise', ipa: '/ˌrevəˈluːʃənaɪz/', pos: 'v', vi: 'cách mạng hóa', ex: 'Smartphones revolutionised communication.', coll: 'revolutionise industry', tier: 'intermediate' },
      { w: 'integrate', ipa: '/ˈɪntɪɡreɪt/', pos: 'v', vi: 'tích hợp', ex: 'Modern systems integrate many functions.', coll: 'integrate technology', tier: 'intermediate' }
    ]
  },

  // ==================== HEALTH ====================
  'health': {
    title: 'Health',
    titleVi: 'Sức khỏe',
    icon: '🏥',
    color: 'coral',
    words: [
      // ----- FOUNDATION -----
      { w: 'health', ipa: '/helθ/', pos: 'n', vi: 'sức khỏe', ex: 'Good health is important.', coll: 'mental/physical health', tier: 'foundation' },
      { w: 'doctor', ipa: '/ˈdɒktə/', pos: 'n', vi: 'bác sĩ', ex: 'I went to see the doctor.', coll: 'see a doctor, family doctor', tier: 'foundation' },
      { w: 'hospital', ipa: '/ˈhɒspɪtl/', pos: 'n', vi: 'bệnh viện', ex: 'She works at a hospital.', coll: 'go to hospital, public hospital', tier: 'foundation' },
      { w: 'illness', ipa: '/ˈɪlnəs/', pos: 'n', vi: 'bệnh tật', ex: 'He recovered from a serious illness.', coll: 'serious/mental illness', tier: 'foundation' },
      { w: 'disease', ipa: '/dɪˈziːz/', pos: 'n', vi: 'bệnh', ex: 'Heart disease is common.', coll: 'cure/prevent disease', tier: 'foundation' },
      { w: 'medicine', ipa: '/ˈmedsn/', pos: 'n', vi: 'thuốc', ex: 'Take this medicine three times a day.', coll: 'take medicine, prescribe medicine', tier: 'foundation' },
      { w: 'exercise', ipa: '/ˈeksəsaɪz/', pos: 'n/v', vi: 'tập thể dục', ex: 'Regular exercise keeps you healthy.', coll: 'do exercise, regular exercise', tier: 'foundation' },
      { w: 'diet', ipa: '/ˈdaɪət/', pos: 'n', vi: 'chế độ ăn', ex: 'A balanced diet is important.', coll: 'healthy/balanced diet, go on a diet', tier: 'foundation' },
      { w: 'healthy', ipa: '/ˈhelθi/', pos: 'adj', vi: 'lành mạnh', ex: 'Eat plenty of healthy foods.', coll: 'healthy lifestyle/eating', tier: 'foundation' },
      { w: 'stress', ipa: '/stres/', pos: 'n', vi: 'căng thẳng', ex: 'Work-related stress is increasing.', coll: 'under stress, cope with stress', tier: 'foundation' },
      { w: 'sleep', ipa: '/sliːp/', pos: 'n/v', vi: 'giấc ngủ', ex: 'Adults need eight hours of sleep.', coll: 'get/lack sleep', tier: 'foundation' },
      { w: 'fit', ipa: '/fɪt/', pos: 'adj', vi: 'khỏe mạnh', ex: 'Regular swimming keeps her fit.', coll: 'keep fit, stay fit', tier: 'foundation' },
      { w: 'patient', ipa: '/ˈpeɪʃnt/', pos: 'n', vi: 'bệnh nhân', ex: 'The doctor sees many patients each day.', coll: 'cancer patient, treat a patient', tier: 'foundation' },
      { w: 'pain', ipa: '/peɪn/', pos: 'n', vi: 'đau', ex: 'She is in great pain.', coll: 'severe pain, chronic pain', tier: 'foundation' },
      { w: 'cure', ipa: '/kjʊə/', pos: 'n/v', vi: 'chữa khỏi', ex: 'There is no cure yet.', coll: 'cure for, find a cure', tier: 'foundation' },
      // ----- INTERMEDIATE -----
      { w: 'wellbeing', ipa: '/ˌwelˈbiːɪŋ/', pos: 'n', vi: 'sự khỏe mạnh', ex: 'Exercise contributes to wellbeing.', coll: 'mental wellbeing', tier: 'intermediate' },
      { w: 'sedentary', ipa: '/ˈsedntri/', pos: 'adj', vi: 'ít vận động', ex: 'A sedentary lifestyle harms health.', coll: 'sedentary lifestyle', tier: 'intermediate' },
      { w: 'obesity', ipa: '/əʊˈbiːsəti/', pos: 'n', vi: 'béo phì', ex: 'Childhood obesity is a serious issue.', coll: 'tackle obesity', tier: 'intermediate' },
      { w: 'epidemic', ipa: '/ˌepɪˈdemɪk/', pos: 'n', vi: 'dịch bệnh', ex: 'The flu epidemic spread quickly.', coll: 'obesity epidemic', tier: 'intermediate' },
      { w: 'preventive', ipa: '/prɪˈventɪv/', pos: 'adj', vi: 'phòng ngừa', ex: 'Preventive measures save lives.', coll: 'preventive medicine', tier: 'intermediate' },
      { w: 'chronic', ipa: '/ˈkrɒnɪk/', pos: 'adj', vi: 'mãn tính', ex: 'Chronic pain affects many people.', coll: 'chronic disease/illness', tier: 'intermediate' },
      { w: 'immune', ipa: '/ɪˈmjuːn/', pos: 'adj', vi: 'miễn dịch', ex: 'The immune system fights disease.', coll: 'immune system', tier: 'intermediate' },
      { w: 'diagnose', ipa: '/ˈdaɪəɡnəʊz/', pos: 'v', vi: 'chẩn đoán', ex: 'She was diagnosed with diabetes.', coll: 'be diagnosed with', tier: 'intermediate' },
      { w: 'symptom', ipa: '/ˈsɪmptəm/', pos: 'n', vi: 'triệu chứng', ex: 'Fever is a common symptom.', coll: 'show symptoms, symptom of', tier: 'intermediate' },
      { w: 'mental health', ipa: '/ˈmentl helθ/', pos: 'n', vi: 'sức khỏe tâm thần', ex: 'Mental health awareness is growing.', coll: 'mental health issues', tier: 'intermediate' },
      { w: 'nutrition', ipa: '/njuˈtrɪʃn/', pos: 'n', vi: 'dinh dưỡng', ex: 'Good nutrition is vital for children.', coll: 'poor nutrition, balanced nutrition', tier: 'intermediate' },
      { w: 'pharmaceutical', ipa: '/ˌfɑːməˈsjuːtɪkl/', pos: 'adj', vi: 'thuộc dược phẩm', ex: 'The pharmaceutical industry is profitable.', coll: 'pharmaceutical company', tier: 'intermediate' },
      { w: 'rehabilitation', ipa: '/ˌriːəˌbɪlɪˈteɪʃn/', pos: 'n', vi: 'phục hồi chức năng', ex: 'He needs rehabilitation after surgery.', coll: 'rehabilitation programme', tier: 'intermediate' },
      { w: 'longevity', ipa: '/lɒnˈdʒevəti/', pos: 'n', vi: 'tuổi thọ', ex: 'Diet affects human longevity.', coll: 'increase longevity', tier: 'intermediate' },
      { w: 'remedy', ipa: '/ˈremədi/', pos: 'n', vi: 'phương thuốc', ex: 'Traditional remedies are still used.', coll: 'herbal remedy', tier: 'intermediate' }
    ]
  },

  // ==================== WORK ====================
  'work': {
    title: 'Work & Career',
    titleVi: 'Công việc',
    icon: '💼',
    color: 'sunshine',
    words: [
      // ----- FOUNDATION -----
      { w: 'job', ipa: '/dʒɒb/', pos: 'n', vi: 'công việc', ex: 'She has a good job.', coll: 'get/lose a job, full-time job', tier: 'foundation' },
      { w: 'work', ipa: '/wɜːk/', pos: 'n/v', vi: 'làm việc', ex: 'I work in an office.', coll: 'go to work, hard work', tier: 'foundation' },
      { w: 'career', ipa: '/kəˈrɪə/', pos: 'n', vi: 'sự nghiệp', ex: 'She has a successful career in law.', coll: 'pursue a career, career path', tier: 'foundation' },
      { w: 'office', ipa: '/ˈɒfɪs/', pos: 'n', vi: 'văn phòng', ex: 'Our office is downtown.', coll: 'go to the office, office worker', tier: 'foundation' },
      { w: 'company', ipa: '/ˈkʌmpəni/', pos: 'n', vi: 'công ty', ex: 'He works for a big company.', coll: 'multinational company', tier: 'foundation' },
      { w: 'colleague', ipa: '/ˈkɒliːɡ/', pos: 'n', vi: 'đồng nghiệp', ex: 'My colleagues are friendly.', coll: 'work with colleagues', tier: 'foundation' },
      { w: 'boss', ipa: '/bɒs/', pos: 'n', vi: 'sếp', ex: 'Her boss is very strict.', coll: 'strict boss', tier: 'foundation' },
      { w: 'employee', ipa: '/ɪmˈplɔɪiː/', pos: 'n', vi: 'nhân viên', ex: 'The company has 500 employees.', coll: 'full-time employee', tier: 'foundation' },
      { w: 'salary', ipa: '/ˈsæləri/', pos: 'n', vi: 'lương', ex: 'I earn a good salary.', coll: 'high/low salary, annual salary', tier: 'foundation' },
      { w: 'experience', ipa: '/ɪkˈspɪəriəns/', pos: 'n', vi: 'kinh nghiệm', ex: 'She has ten years of experience.', coll: 'work experience, gain experience', tier: 'foundation' },
      { w: 'interview', ipa: '/ˈɪntəvjuː/', pos: 'n', vi: 'phỏng vấn', ex: 'I have a job interview tomorrow.', coll: 'job interview, attend an interview', tier: 'foundation' },
      { w: 'apply', ipa: '/əˈplaɪ/', pos: 'v', vi: 'nộp đơn', ex: 'I applied for a new job.', coll: 'apply for a job/position', tier: 'foundation' },
      { w: 'manager', ipa: '/ˈmænɪdʒə/', pos: 'n', vi: 'quản lý', ex: 'The manager attended the meeting.', coll: 'project manager, line manager', tier: 'foundation' },
      { w: 'team', ipa: '/tiːm/', pos: 'n', vi: 'đội/nhóm', ex: 'Our team works well together.', coll: 'work as a team, team member', tier: 'foundation' },
      { w: 'busy', ipa: '/ˈbɪzi/', pos: 'adj', vi: 'bận rộn', ex: 'I am busy this week.', coll: 'busy schedule, very busy', tier: 'foundation' },
      // ----- INTERMEDIATE -----
      { w: 'remuneration', ipa: '/rɪˌmjuːnəˈreɪʃn/', pos: 'n', vi: 'tiền thù lao', ex: 'The remuneration package is generous.', coll: 'remuneration package', tier: 'intermediate' },
      { w: 'recruitment', ipa: '/rɪˈkruːtmənt/', pos: 'n', vi: 'tuyển dụng', ex: 'Recruitment of skilled workers is challenging.', coll: 'recruitment process', tier: 'intermediate' },
      { w: 'workforce', ipa: '/ˈwɜːkfɔːs/', pos: 'n', vi: 'lực lượng lao động', ex: 'Women make up half the workforce.', coll: 'skilled workforce', tier: 'intermediate' },
      { w: 'unemployment', ipa: '/ˌʌnɪmˈplɔɪmənt/', pos: 'n', vi: 'thất nghiệp', ex: 'Unemployment rates have risen.', coll: 'unemployment rate', tier: 'intermediate' },
      { w: 'redundancy', ipa: '/rɪˈdʌndənsi/', pos: 'n', vi: 'việc bị sa thải', ex: 'Many faced redundancy after the merger.', coll: 'face redundancy', tier: 'intermediate' },
      { w: 'promotion', ipa: '/prəˈməʊʃn/', pos: 'n', vi: 'thăng chức', ex: 'She received a promotion last year.', coll: 'earn/get a promotion', tier: 'intermediate' },
      { w: 'expertise', ipa: '/ˌekspɜːˈtiːz/', pos: 'n', vi: 'chuyên môn', ex: 'His expertise in finance is valuable.', coll: 'gain expertise', tier: 'intermediate' },
      { w: 'workplace', ipa: '/ˈwɜːkpleɪs/', pos: 'n', vi: 'nơi làm việc', ex: 'A safe workplace is essential.', coll: 'workplace safety', tier: 'intermediate' },
      { w: 'commute', ipa: '/kəˈmjuːt/', pos: 'v/n', vi: 'đi làm', ex: 'I commute by train.', coll: 'long commute, daily commute', tier: 'intermediate' },
      { w: 'workload', ipa: '/ˈwɜːkləʊd/', pos: 'n', vi: 'khối lượng công việc', ex: 'A heavy workload causes stress.', coll: 'heavy/light workload', tier: 'intermediate' },
      { w: 'entrepreneur', ipa: '/ˌɒntrəprəˈnɜː/', pos: 'n', vi: 'doanh nhân', ex: 'She is a young entrepreneur.', coll: 'successful entrepreneur', tier: 'intermediate' },
      { w: 'multitask', ipa: '/ˌmʌltiˈtɑːsk/', pos: 'v', vi: 'làm nhiều việc cùng lúc', ex: 'Modern workers must multitask.', coll: 'ability to multitask', tier: 'intermediate' },
      { w: 'flexible', ipa: '/ˈfleksəbl/', pos: 'adj', vi: 'linh hoạt', ex: 'Flexible working hours benefit employees.', coll: 'flexible hours/working', tier: 'intermediate' },
      { w: 'lucrative', ipa: '/ˈluːkrətɪv/', pos: 'adj', vi: 'sinh lợi', ex: 'It is a lucrative business.', coll: 'lucrative career/contract', tier: 'intermediate' },
      { w: 'workaholic', ipa: '/ˌwɜːkəˈhɒlɪk/', pos: 'n', vi: 'người tham công tiếc việc', ex: 'He is a workaholic.', coll: 'become a workaholic', tier: 'intermediate' }
    ]
  },

  // ==================== SOCIETY ====================
  'society': {
    title: 'Society',
    titleVi: 'Xã hội',
    icon: '🏛️',
    color: 'hotpink',
    words: [
      // ----- FOUNDATION -----
      { w: 'society', ipa: '/səˈsaɪəti/', pos: 'n', vi: 'xã hội', ex: 'Modern society is changing fast.', coll: 'modern society', tier: 'foundation' },
      { w: 'population', ipa: '/ˌpɒpjuˈleɪʃn/', pos: 'n', vi: 'dân số', ex: 'The population is growing.', coll: 'ageing/growing population', tier: 'foundation' },
      { w: 'community', ipa: '/kəˈmjuːnəti/', pos: 'n', vi: 'cộng đồng', ex: 'A strong community helps everyone.', coll: 'local community', tier: 'foundation' },
      { w: 'culture', ipa: '/ˈkʌltʃə/', pos: 'n', vi: 'văn hóa', ex: 'Vietnamese culture is rich.', coll: 'traditional culture, popular culture', tier: 'foundation' },
      { w: 'tradition', ipa: '/trəˈdɪʃn/', pos: 'n', vi: 'truyền thống', ex: 'Family is a strong tradition.', coll: 'long-standing tradition', tier: 'foundation' },
      { w: 'language', ipa: '/ˈlæŋɡwɪdʒ/', pos: 'n', vi: 'ngôn ngữ', ex: 'English is a global language.', coll: 'native language, foreign language', tier: 'foundation' },
      { w: 'government', ipa: '/ˈɡʌvənmənt/', pos: 'n', vi: 'chính phủ', ex: 'The government passed a new law.', coll: 'local government', tier: 'foundation' },
      { w: 'law', ipa: '/lɔː/', pos: 'n', vi: 'luật', ex: 'Everyone must obey the law.', coll: 'pass/break a law', tier: 'foundation' },
      { w: 'rich', ipa: '/rɪtʃ/', pos: 'adj', vi: 'giàu', ex: 'Rich countries have advantages.', coll: 'become rich, rich nation', tier: 'foundation' },
      { w: 'poor', ipa: '/pʊə/', pos: 'adj', vi: 'nghèo', ex: 'Poor families need support.', coll: 'poor people, very poor', tier: 'foundation' },
      { w: 'equal', ipa: '/ˈiːkwəl/', pos: 'adj', vi: 'bình đẳng', ex: 'All people should be equal.', coll: 'equal rights/opportunities', tier: 'foundation' },
      { w: 'rights', ipa: '/raɪts/', pos: 'n', vi: 'quyền', ex: 'Human rights must be protected.', coll: 'human rights, women\'s rights', tier: 'foundation' },
      { w: 'social', ipa: '/ˈsəʊʃl/', pos: 'adj', vi: 'thuộc xã hội', ex: 'Social problems affect everyone.', coll: 'social issues, social media', tier: 'foundation' },
      { w: 'change', ipa: '/tʃeɪndʒ/', pos: 'n/v', vi: 'thay đổi', ex: 'Society has changed a lot.', coll: 'social change, climate change', tier: 'foundation' },
      { w: 'help', ipa: '/help/', pos: 'v/n', vi: 'giúp đỡ', ex: 'We should help each other.', coll: 'help with, ask for help', tier: 'foundation' },
      // ----- INTERMEDIATE -----
      { w: 'inequality', ipa: '/ˌɪnɪˈkwɒləti/', pos: 'n', vi: 'sự bất bình đẳng', ex: 'Income inequality is widening.', coll: 'tackle inequality', tier: 'intermediate' },
      { w: 'discrimination', ipa: '/dɪˌskrɪmɪˈneɪʃn/', pos: 'n', vi: 'sự phân biệt đối xử', ex: 'Discrimination is illegal.', coll: 'racial/gender discrimination', tier: 'intermediate' },
      { w: 'urbanisation', ipa: '/ˌɜːbənaɪˈzeɪʃn/', pos: 'n', vi: 'đô thị hóa', ex: 'Rapid urbanisation strains resources.', coll: 'rapid urbanisation', tier: 'intermediate' },
      { w: 'demographics', ipa: '/ˌdeməˈɡræfɪks/', pos: 'n', vi: 'nhân khẩu học', ex: 'Demographics are shifting.', coll: 'changing demographics', tier: 'intermediate' },
      { w: 'integration', ipa: '/ˌɪntɪˈɡreɪʃn/', pos: 'n', vi: 'sự hội nhập', ex: 'Social integration takes time.', coll: 'social integration', tier: 'intermediate' },
      { w: 'immigration', ipa: '/ˌɪmɪˈɡreɪʃn/', pos: 'n', vi: 'sự nhập cư', ex: 'Immigration policies vary.', coll: 'immigration policy', tier: 'intermediate' },
      { w: 'multiculturalism', ipa: '/ˌmʌltiˈkʌltʃərəlɪzəm/', pos: 'n', vi: 'đa văn hóa', ex: 'Multiculturalism enriches society.', coll: 'embrace multiculturalism', tier: 'intermediate' },
      { w: 'welfare', ipa: '/ˈwelfeə/', pos: 'n', vi: 'phúc lợi', ex: 'Welfare programs help the poor.', coll: 'welfare state', tier: 'intermediate' },
      { w: 'civic', ipa: '/ˈsɪvɪk/', pos: 'adj', vi: 'thuộc về công dân', ex: 'Civic duty includes voting.', coll: 'civic duty/engagement', tier: 'intermediate' },
      { w: 'cohesion', ipa: '/kəʊˈhiːʒn/', pos: 'n', vi: 'sự gắn kết', ex: 'Social cohesion is weakening.', coll: 'social cohesion', tier: 'intermediate' },
      { w: 'norm', ipa: '/nɔːm/', pos: 'n', vi: 'chuẩn mực', ex: 'Social norms vary by culture.', coll: 'cultural norms', tier: 'intermediate' },
      { w: 'segregation', ipa: '/ˌseɡrɪˈɡeɪʃn/', pos: 'n', vi: 'sự phân biệt', ex: 'Racial segregation is now illegal.', coll: 'racial segregation', tier: 'intermediate' },
      { w: 'philanthropy', ipa: '/fɪˈlænθrəpi/', pos: 'n', vi: 'hoạt động từ thiện', ex: 'Philanthropy supports many causes.', coll: 'private philanthropy', tier: 'intermediate' },
      { w: 'gentrification', ipa: '/ˌdʒentrɪfɪˈkeɪʃn/', pos: 'n', vi: 'quý tộc hóa', ex: 'Gentrification displaces poor residents.', coll: 'urban gentrification', tier: 'intermediate' },
      { w: 'stereotype', ipa: '/ˈsteriətaɪp/', pos: 'n', vi: 'định kiến', ex: 'Stereotypes harm communities.', coll: 'challenge a stereotype', tier: 'intermediate' }
    ]
  },

  // ==================== TRAVEL ====================
  'travel': {
    title: 'Travel & Tourism',
    titleVi: 'Du lịch',
    icon: '✈️',
    color: 'sky',
    words: [
      // ----- FOUNDATION -----
      { w: 'travel', ipa: '/ˈtrævl/', pos: 'v/n', vi: 'đi du lịch', ex: 'I love to travel.', coll: 'travel abroad, travel agent', tier: 'foundation' },
      { w: 'holiday', ipa: '/ˈhɒlədeɪ/', pos: 'n', vi: 'kỳ nghỉ', ex: 'We went on holiday to Spain.', coll: 'go on holiday', tier: 'foundation' },
      { w: 'tourist', ipa: '/ˈtʊərɪst/', pos: 'n', vi: 'khách du lịch', ex: 'Tourists visit many countries.', coll: 'tourist attraction', tier: 'foundation' },
      { w: 'visit', ipa: '/ˈvɪzɪt/', pos: 'v', vi: 'thăm', ex: 'I visited London last summer.', coll: 'visit a museum/friend', tier: 'foundation' },
      { w: 'flight', ipa: '/flaɪt/', pos: 'n', vi: 'chuyến bay', ex: 'The flight was delayed.', coll: 'book/cancel a flight', tier: 'foundation' },
      { w: 'hotel', ipa: '/həʊˈtel/', pos: 'n', vi: 'khách sạn', ex: 'We stayed at a nice hotel.', coll: 'book a hotel, five-star hotel', tier: 'foundation' },
      { w: 'beach', ipa: '/biːtʃ/', pos: 'n', vi: 'bãi biển', ex: 'The beach was beautiful.', coll: 'sandy beach, beach holiday', tier: 'foundation' },
      { w: 'foreign', ipa: '/ˈfɒrən/', pos: 'adj', vi: 'nước ngoài', ex: 'I want to visit foreign countries.', coll: 'foreign language/country', tier: 'foundation' },
      { w: 'trip', ipa: '/trɪp/', pos: 'n', vi: 'chuyến đi', ex: 'We took a trip to Paris.', coll: 'business trip, day trip', tier: 'foundation' },
      { w: 'passport', ipa: '/ˈpɑːspɔːt/', pos: 'n', vi: 'hộ chiếu', ex: 'Don\'t forget your passport.', coll: 'apply for a passport', tier: 'foundation' },
      { w: 'culture shock', ipa: '/ˈkʌltʃə ʃɒk/', pos: 'n', vi: 'sốc văn hóa', ex: 'I experienced culture shock in Japan.', coll: 'suffer culture shock', tier: 'foundation' },
      { w: 'journey', ipa: '/ˈdʒɜːni/', pos: 'n', vi: 'cuộc hành trình', ex: 'It was a long journey.', coll: 'long journey, safe journey', tier: 'foundation' },
      { w: 'destination', ipa: '/ˌdestɪˈneɪʃn/', pos: 'n', vi: 'điểm đến', ex: 'Paris is a popular destination.', coll: 'tourist destination', tier: 'foundation' },
      { w: 'guide', ipa: '/ɡaɪd/', pos: 'n', vi: 'hướng dẫn viên', ex: 'The tour guide was informative.', coll: 'tour guide', tier: 'foundation' },
      { w: 'sightseeing', ipa: '/ˈsaɪtsiːɪŋ/', pos: 'n', vi: 'tham quan', ex: 'We did some sightseeing in Rome.', coll: 'go sightseeing', tier: 'foundation' },
      // ----- INTERMEDIATE -----
      { w: 'itinerary', ipa: '/aɪˈtɪnərəri/', pos: 'n', vi: 'lịch trình', ex: 'I planned my itinerary carefully.', coll: 'detailed itinerary', tier: 'intermediate' },
      { w: 'accommodation', ipa: '/əˌkɒməˈdeɪʃn/', pos: 'n', vi: 'chỗ ở', ex: 'Accommodation is expensive in summer.', coll: 'book accommodation', tier: 'intermediate' },
      { w: 'expedition', ipa: '/ˌekspəˈdɪʃn/', pos: 'n', vi: 'chuyến thám hiểm', ex: 'They organised an expedition to Antarctica.', coll: 'mount an expedition', tier: 'intermediate' },
      { w: 'breathtaking', ipa: '/ˈbreθteɪkɪŋ/', pos: 'adj', vi: 'ngoạn mục', ex: 'The view was breathtaking.', coll: 'breathtaking views/scenery', tier: 'intermediate' },
      { w: 'remote', ipa: '/rɪˈməʊt/', pos: 'adj', vi: 'xa xôi', ex: 'They live in a remote village.', coll: 'remote location/village', tier: 'intermediate' },
      { w: 'mass tourism', ipa: '/mæs ˈtʊərɪzəm/', pos: 'n', vi: 'du lịch đại trà', ex: 'Mass tourism damages local cultures.', coll: 'impact of mass tourism', tier: 'intermediate' },
      { w: 'ecotourism', ipa: '/ˈiːkəʊˌtʊərɪzəm/', pos: 'n', vi: 'du lịch sinh thái', ex: 'Ecotourism protects environments.', coll: 'promote ecotourism', tier: 'intermediate' },
      { w: 'venture', ipa: '/ˈventʃə/', pos: 'v', vi: 'mạo hiểm đi', ex: 'We ventured into the desert.', coll: 'venture into/abroad', tier: 'intermediate' },
      { w: 'voyage', ipa: '/ˈvɔɪɪdʒ/', pos: 'n', vi: 'chuyến đi biển', ex: 'His voyage lasted three months.', coll: 'long voyage, sea voyage', tier: 'intermediate' },
      { w: 'embark', ipa: '/ɪmˈbɑːk/', pos: 'v', vi: 'bắt đầu hành trình', ex: 'They embarked on a long journey.', coll: 'embark on a journey', tier: 'intermediate' },
      { w: 'jet lag', ipa: '/ˈdʒet læɡ/', pos: 'n', vi: 'mệt do lệch múi giờ', ex: 'I suffered from severe jet lag.', coll: 'suffer from jet lag', tier: 'intermediate' },
      { w: 'cosmopolitan', ipa: '/ˌkɒzməˈpɒlɪtən/', pos: 'adj', vi: 'mang tính quốc tế', ex: 'London is a cosmopolitan city.', coll: 'cosmopolitan city', tier: 'intermediate' },
      { w: 'wanderlust', ipa: '/ˈwɒndəlʌst/', pos: 'n', vi: 'niềm đam mê đi đây đó', ex: 'She has a strong wanderlust.', coll: 'have wanderlust', tier: 'intermediate' },
      { w: 'overcrowded', ipa: '/ˌəʊvəˈkraʊdɪd/', pos: 'adj', vi: 'quá tải khách', ex: 'Venice is often overcrowded.', coll: 'overcrowded destination', tier: 'intermediate' },
      { w: 'heritage', ipa: '/ˈherɪtɪdʒ/', pos: 'n', vi: 'di sản', ex: 'We must protect our heritage.', coll: 'cultural heritage, heritage site', tier: 'intermediate' }
    ]
  },

  // ==================== MEDIA ====================
  'media': {
    title: 'Media',
    titleVi: 'Truyền thông',
    icon: '📰',
    color: 'paper',
    words: [
      // ----- FOUNDATION -----
      { w: 'news', ipa: '/njuːz/', pos: 'n', vi: 'tin tức', ex: 'I watch the news every evening.', coll: 'good/bad news, news report', tier: 'foundation' },
      { w: 'newspaper', ipa: '/ˈnjuːzpeɪpə/', pos: 'n', vi: 'báo', ex: 'I read the newspaper every day.', coll: 'daily newspaper', tier: 'foundation' },
      { w: 'TV', ipa: '/ˌtiːˈviː/', pos: 'n', vi: 'truyền hình', ex: 'My family watches TV together.', coll: 'watch TV, TV programme', tier: 'foundation' },
      { w: 'radio', ipa: '/ˈreɪdiəʊ/', pos: 'n', vi: 'đài radio', ex: 'I listen to the radio in the car.', coll: 'listen to the radio', tier: 'foundation' },
      { w: 'magazine', ipa: '/ˌmæɡəˈziːn/', pos: 'n', vi: 'tạp chí', ex: 'She subscribes to several magazines.', coll: 'fashion magazine', tier: 'foundation' },
      { w: 'channel', ipa: '/ˈtʃænl/', pos: 'n', vi: 'kênh', ex: 'There are many channels on TV.', coll: 'TV channel, news channel', tier: 'foundation' },
      { w: 'report', ipa: '/rɪˈpɔːt/', pos: 'n/v', vi: 'báo cáo/đưa tin', ex: 'The journalist reported the event.', coll: 'news report, report on', tier: 'foundation' },
      { w: 'advertise', ipa: '/ˈædvətaɪz/', pos: 'v', vi: 'quảng cáo', ex: 'Companies advertise on TV.', coll: 'advertise products', tier: 'foundation' },
      { w: 'audience', ipa: '/ˈɔːdiəns/', pos: 'n', vi: 'khán giả', ex: 'The film attracts a large audience.', coll: 'target audience', tier: 'foundation' },
      { w: 'famous', ipa: '/ˈfeɪməs/', pos: 'adj', vi: 'nổi tiếng', ex: 'She is a famous actress.', coll: 'world-famous', tier: 'foundation' },
      { w: 'celebrity', ipa: '/səˈlebrəti/', pos: 'n', vi: 'người nổi tiếng', ex: 'Celebrities influence young people.', coll: 'celebrity culture', tier: 'foundation' },
      { w: 'film', ipa: '/fɪlm/', pos: 'n', vi: 'phim', ex: 'I watched a great film.', coll: 'watch a film, film star', tier: 'foundation' },
      { w: 'movie', ipa: '/ˈmuːvi/', pos: 'n', vi: 'phim ảnh', ex: 'I love romantic movies.', coll: 'movie theatre, action movie', tier: 'foundation' },
      { w: 'broadcast', ipa: '/ˈbrɔːdkɑːst/', pos: 'v/n', vi: 'phát sóng', ex: 'The game was broadcast live.', coll: 'live broadcast', tier: 'foundation' },
      { w: 'website', ipa: '/ˈwebsaɪt/', pos: 'n', vi: 'trang web (tin tức)', ex: 'I read news on the website.', coll: 'news website', tier: 'foundation' },
      // ----- INTERMEDIATE -----
      { w: 'censorship', ipa: '/ˈsensəʃɪp/', pos: 'n', vi: 'sự kiểm duyệt', ex: 'Censorship limits free expression.', coll: 'media censorship', tier: 'intermediate' },
      { w: 'propaganda', ipa: '/ˌprɒpəˈɡændə/', pos: 'n', vi: 'tuyên truyền', ex: 'Propaganda manipulates public opinion.', coll: 'spread propaganda', tier: 'intermediate' },
      { w: 'objective', ipa: '/əbˈdʒektɪv/', pos: 'adj', vi: 'khách quan', ex: 'Journalists should be objective.', coll: 'objective reporting', tier: 'intermediate' },
      { w: 'biased', ipa: '/ˈbaɪəst/', pos: 'adj', vi: 'thiên vị', ex: 'The article is heavily biased.', coll: 'biased reporting', tier: 'intermediate' },
      { w: 'tabloid', ipa: '/ˈtæblɔɪd/', pos: 'n', vi: 'báo lá cải', ex: 'Tabloids print sensational stories.', coll: 'tabloid press', tier: 'intermediate' },
      { w: 'misinformation', ipa: '/ˌmɪsɪnfəˈmeɪʃn/', pos: 'n', vi: 'thông tin sai lệch', ex: 'Misinformation spreads quickly online.', coll: 'spread misinformation', tier: 'intermediate' },
      { w: 'mainstream', ipa: '/ˈmeɪnstriːm/', pos: 'adj', vi: 'dòng chính', ex: 'Mainstream media has lost trust.', coll: 'mainstream media', tier: 'intermediate' },
      { w: 'coverage', ipa: '/ˈkʌvərɪdʒ/', pos: 'n', vi: 'sự đưa tin', ex: 'The event received wide coverage.', coll: 'media coverage', tier: 'intermediate' },
      { w: 'influence', ipa: '/ˈɪnfluəns/', pos: 'n/v', vi: 'ảnh hưởng', ex: 'Media influences public opinion.', coll: 'have an influence on', tier: 'intermediate' },
      { w: 'sensationalise', ipa: '/senˈseɪʃənəlaɪz/', pos: 'v', vi: 'phóng đại tin', ex: 'Tabloids sensationalise stories.', coll: 'sensationalise news', tier: 'intermediate' },
      { w: 'paparazzi', ipa: '/ˌpæpəˈrætsi/', pos: 'n', vi: 'phóng viên săn ảnh', ex: 'Paparazzi follow celebrities.', coll: 'chased by paparazzi', tier: 'intermediate' },
      { w: 'manipulate', ipa: '/məˈnɪpjuleɪt/', pos: 'v', vi: 'thao túng', ex: 'Media can manipulate emotions.', coll: 'manipulate opinion', tier: 'intermediate' },
      { w: 'subliminal', ipa: '/ˌsʌbˈlɪmɪnl/', pos: 'adj', vi: 'tiềm thức', ex: 'Subliminal advertising is controversial.', coll: 'subliminal messaging', tier: 'intermediate' },
      { w: 'press', ipa: '/pres/', pos: 'n', vi: 'báo chí', ex: 'The press has freedom in democracies.', coll: 'press freedom', tier: 'intermediate' },
      { w: 'journalism', ipa: '/ˈdʒɜːnəlɪzəm/', pos: 'n', vi: 'báo chí (nghề)', ex: 'Investigative journalism reveals corruption.', coll: 'investigative journalism', tier: 'intermediate' }
    ]
  },

  // ==================== CRIME ====================
  'crime': {
    title: 'Crime & Law',
    titleVi: 'Tội phạm & Luật pháp',
    icon: '⚖️',
    color: 'paper',
    words: [
      // ----- FOUNDATION -----
      { w: 'crime', ipa: '/kraɪm/', pos: 'n', vi: 'tội phạm', ex: 'Crime rates are rising.', coll: 'commit a crime, crime rate', tier: 'foundation' },
      { w: 'criminal', ipa: '/ˈkrɪmɪnl/', pos: 'n', vi: 'kẻ phạm tội', ex: 'The criminal was arrested.', coll: 'convicted criminal', tier: 'foundation' },
      { w: 'police', ipa: '/pəˈliːs/', pos: 'n', vi: 'cảnh sát', ex: 'The police investigated the case.', coll: 'call the police, police officer', tier: 'foundation' },
      { w: 'prison', ipa: '/ˈprɪzn/', pos: 'n', vi: 'nhà tù', ex: 'He spent five years in prison.', coll: 'go to prison, in prison', tier: 'foundation' },
      { w: 'steal', ipa: '/stiːl/', pos: 'v', vi: 'ăn trộm', ex: 'Someone stole my bike.', coll: 'steal money/from', tier: 'foundation' },
      { w: 'punish', ipa: '/ˈpʌnɪʃ/', pos: 'v', vi: 'trừng phạt', ex: 'Criminals must be punished.', coll: 'severely punished', tier: 'foundation' },
      { w: 'judge', ipa: '/dʒʌdʒ/', pos: 'n', vi: 'thẩm phán', ex: 'The judge made a decision.', coll: 'judge a case', tier: 'foundation' },
      { w: 'court', ipa: '/kɔːt/', pos: 'n', vi: 'tòa án', ex: 'The case will go to court.', coll: 'court of law', tier: 'foundation' },
      { w: 'guilty', ipa: '/ˈɡɪlti/', pos: 'adj', vi: 'có tội', ex: 'She was found guilty.', coll: 'plead guilty, found guilty', tier: 'foundation' },
      { w: 'innocent', ipa: '/ˈɪnəsnt/', pos: 'adj', vi: 'vô tội', ex: 'He claims he is innocent.', coll: 'innocent until proven', tier: 'foundation' },
      { w: 'illegal', ipa: '/ɪˈliːɡl/', pos: 'adj', vi: 'bất hợp pháp', ex: 'Drugs are illegal here.', coll: 'illegal activities', tier: 'foundation' },
      { w: 'arrest', ipa: '/əˈrest/', pos: 'v', vi: 'bắt giữ', ex: 'Police arrested the suspect.', coll: 'arrest someone, under arrest', tier: 'foundation' },
      { w: 'fine', ipa: '/faɪn/', pos: 'n', vi: 'tiền phạt', ex: 'He paid a heavy fine.', coll: 'pay a fine, hefty fine', tier: 'foundation' },
      { w: 'safe', ipa: '/seɪf/', pos: 'adj', vi: 'an toàn', ex: 'This neighbourhood is safe.', coll: 'safe and sound, safe place', tier: 'foundation' },
      { w: 'thief', ipa: '/θiːf/', pos: 'n', vi: 'tên trộm', ex: 'The thief escaped.', coll: 'catch a thief', tier: 'foundation' },
      // ----- INTERMEDIATE -----
      { w: 'offence', ipa: '/əˈfens/', pos: 'n', vi: 'sự vi phạm', ex: 'This is a serious offence.', coll: 'commit an offence', tier: 'intermediate' },
      { w: 'prosecution', ipa: '/ˌprɒsɪˈkjuːʃn/', pos: 'n', vi: 'truy tố', ex: 'The prosecution presented evidence.', coll: 'face prosecution', tier: 'intermediate' },
      { w: 'verdict', ipa: '/ˈvɜːdɪkt/', pos: 'n', vi: 'phán quyết', ex: 'The jury reached a verdict.', coll: 'reach/deliver a verdict', tier: 'intermediate' },
      { w: 'sentence', ipa: '/ˈsentəns/', pos: 'n/v', vi: 'án phạt', ex: 'He received a long sentence.', coll: 'prison sentence, life sentence', tier: 'intermediate' },
      { w: 'rehabilitation', ipa: '/ˌriːəˌbɪlɪˈteɪʃn/', pos: 'n', vi: 'cải tạo', ex: 'Rehabilitation reduces re-offending.', coll: 'offender rehabilitation', tier: 'intermediate' },
      { w: 'deterrent', ipa: '/dɪˈterənt/', pos: 'n', vi: 'sự răn đe', ex: 'Heavy fines act as a deterrent.', coll: 'strong deterrent', tier: 'intermediate' },
      { w: 'corrupt', ipa: '/kəˈrʌpt/', pos: 'adj', vi: 'tham nhũng', ex: 'Some officials are corrupt.', coll: 'corrupt officials', tier: 'intermediate' },
      { w: 'fraud', ipa: '/frɔːd/', pos: 'n', vi: 'gian lận', ex: 'He was charged with fraud.', coll: 'commit fraud', tier: 'intermediate' },
      { w: 'capital punishment', ipa: '/ˈkæpɪtl ˈpʌnɪʃmənt/', pos: 'n', vi: 'án tử hình', ex: 'Capital punishment is controversial.', coll: 'abolish capital punishment', tier: 'intermediate' },
      { w: 'juvenile', ipa: '/ˈdʒuːvənaɪl/', pos: 'adj', vi: 'vị thành niên', ex: 'Juvenile crime requires special handling.', coll: 'juvenile delinquency', tier: 'intermediate' },
      { w: 'witness', ipa: '/ˈwɪtnəs/', pos: 'n', vi: 'nhân chứng', ex: 'The witness identified him.', coll: 'key witness, eye witness', tier: 'intermediate' },
      { w: 'allegation', ipa: '/ˌæləˈɡeɪʃn/', pos: 'n', vi: 'lời cáo buộc', ex: 'He denied all allegations.', coll: 'make/deny allegations', tier: 'intermediate' },
      { w: 'embezzlement', ipa: '/ɪmˈbezlmənt/', pos: 'n', vi: 'biển thủ', ex: 'The director was accused of embezzlement.', coll: 'charged with embezzlement', tier: 'intermediate' },
      { w: 'cybercrime', ipa: '/ˈsaɪbəkraɪm/', pos: 'n', vi: 'tội phạm mạng', ex: 'Cybercrime is on the rise.', coll: 'combat cybercrime', tier: 'intermediate' },
      { w: 'tackle', ipa: '/ˈtækl/', pos: 'v', vi: 'đối phó với', ex: 'Society must tackle crime.', coll: 'tackle a problem', tier: 'intermediate' }
    ]
  },

  // ==================== FAMILY ====================
  'family': {
    title: 'Family & Relationships',
    titleVi: 'Gia đình',
    icon: '👨‍👩‍👧',
    color: 'coral',
    words: [
      // ----- FOUNDATION -----
      { w: 'family', ipa: '/ˈfæməli/', pos: 'n', vi: 'gia đình', ex: 'My family is small.', coll: 'family member, big family', tier: 'foundation' },
      { w: 'parents', ipa: '/ˈpeərənts/', pos: 'n', vi: 'cha mẹ', ex: 'My parents live in Hanoi.', coll: 'strict parents', tier: 'foundation' },
      { w: 'children', ipa: '/ˈtʃɪldrən/', pos: 'n', vi: 'con cái', ex: 'They have three children.', coll: 'raise children', tier: 'foundation' },
      { w: 'brother', ipa: '/ˈbrʌðə/', pos: 'n', vi: 'anh/em trai', ex: 'My brother is older than me.', coll: 'younger/older brother', tier: 'foundation' },
      { w: 'sister', ipa: '/ˈsɪstə/', pos: 'n', vi: 'chị/em gái', ex: 'I have one sister.', coll: 'twin sister', tier: 'foundation' },
      { w: 'relative', ipa: '/ˈrelətɪv/', pos: 'n', vi: 'họ hàng', ex: 'Many relatives came to the wedding.', coll: 'close relative', tier: 'foundation' },
      { w: 'marriage', ipa: '/ˈmærɪdʒ/', pos: 'n', vi: 'hôn nhân', ex: 'A happy marriage takes work.', coll: 'happy marriage', tier: 'foundation' },
      { w: 'wedding', ipa: '/ˈwedɪŋ/', pos: 'n', vi: 'đám cưới', ex: 'Their wedding was wonderful.', coll: 'wedding ceremony', tier: 'foundation' },
      { w: 'friend', ipa: '/frend/', pos: 'n', vi: 'bạn', ex: 'She is my best friend.', coll: 'close friend, best friend', tier: 'foundation' },
      { w: 'love', ipa: '/lʌv/', pos: 'v/n', vi: 'yêu', ex: 'I love my family.', coll: 'fall in love', tier: 'foundation' },
      { w: 'baby', ipa: '/ˈbeɪbi/', pos: 'n', vi: 'em bé', ex: 'They have a new baby.', coll: 'newborn baby', tier: 'foundation' },
      { w: 'grow up', ipa: '/ɡrəʊ ʌp/', pos: 'v', vi: 'lớn lên', ex: 'I grew up in Hanoi.', coll: 'grow up in', tier: 'foundation' },
      { w: 'happy', ipa: '/ˈhæpi/', pos: 'adj', vi: 'hạnh phúc', ex: 'They are a happy family.', coll: 'happy family, happy life', tier: 'foundation' },
      { w: 'close', ipa: '/kləʊs/', pos: 'adj', vi: 'gần gũi', ex: 'We are a close family.', coll: 'close-knit family', tier: 'foundation' },
      { w: 'support', ipa: '/səˈpɔːt/', pos: 'v/n', vi: 'ủng hộ', ex: 'My family supports me.', coll: 'emotional support', tier: 'foundation' },
      // ----- INTERMEDIATE -----
      { w: 'nuclear family', ipa: '/ˈnjuːkliə ˈfæməli/', pos: 'n', vi: 'gia đình hạt nhân', ex: 'The nuclear family is common today.', coll: 'traditional nuclear family', tier: 'intermediate' },
      { w: 'extended family', ipa: '/ɪkˈstendɪd ˈfæməli/', pos: 'n', vi: 'đại gia đình', ex: 'My extended family is large.', coll: 'large extended family', tier: 'intermediate' },
      { w: 'bond', ipa: '/bɒnd/', pos: 'n', vi: 'mối liên kết', ex: 'They share a strong bond.', coll: 'strong bond, family bond', tier: 'intermediate' },
      { w: 'sibling', ipa: '/ˈsɪblɪŋ/', pos: 'n', vi: 'anh chị em', ex: 'I have three siblings.', coll: 'sibling rivalry', tier: 'intermediate' },
      { w: 'upbringing', ipa: '/ˈʌpbrɪŋɪŋ/', pos: 'n', vi: 'sự dạy dỗ', ex: 'A good upbringing is invaluable.', coll: 'strict upbringing', tier: 'intermediate' },
      { w: 'nurture', ipa: '/ˈnɜːtʃə/', pos: 'v', vi: 'nuôi dưỡng', ex: 'Parents nurture their children.', coll: 'nurture talent/abilities', tier: 'intermediate' },
      { w: 'estranged', ipa: '/ɪˈstreɪndʒd/', pos: 'adj', vi: 'xa cách', ex: 'They are estranged from their father.', coll: 'estranged from', tier: 'intermediate' },
      { w: 'divorce', ipa: '/dɪˈvɔːs/', pos: 'n/v', vi: 'ly hôn', ex: 'Divorce rates have risen.', coll: 'divorce rate', tier: 'intermediate' },
      { w: 'cohabit', ipa: '/kəʊˈhæbɪt/', pos: 'v', vi: 'sống chung', ex: 'They cohabit before marriage.', coll: 'cohabit with', tier: 'intermediate' },
      { w: 'generation gap', ipa: '/ˌdʒenəˈreɪʃn ɡæp/', pos: 'n', vi: 'khoảng cách thế hệ', ex: 'The generation gap can cause friction.', coll: 'bridge the generation gap', tier: 'intermediate' },
      { w: 'descendant', ipa: '/dɪˈsendənt/', pos: 'n', vi: 'hậu duệ', ex: 'We are all descendants of Africa.', coll: 'direct descendant', tier: 'intermediate' },
      { w: 'inherit', ipa: '/ɪnˈherɪt/', pos: 'v', vi: 'thừa kế', ex: 'She inherited the house.', coll: 'inherit a trait/property', tier: 'intermediate' },
      { w: 'adoption', ipa: '/əˈdɒpʃn/', pos: 'n', vi: 'sự nhận con nuôi', ex: 'Adoption can change lives.', coll: 'put up for adoption', tier: 'intermediate' },
      { w: 'reconcile', ipa: '/ˈrekənsaɪl/', pos: 'v', vi: 'hòa giải', ex: 'They reconciled after the fight.', coll: 'reconcile with', tier: 'intermediate' },
      { w: 'foster', ipa: '/ˈfɒstə/', pos: 'v/adj', vi: 'nuôi dưỡng (con nuôi)', ex: 'They foster three children.', coll: 'foster care, foster parent', tier: 'intermediate' }
    ]
  }

};
