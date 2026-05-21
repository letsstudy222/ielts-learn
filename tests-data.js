// =================== TESTS DATA ===================
// Mỗi test = 1 passage chính + 13 câu hỏi (3 nhóm dạng câu hỏi)
// Có thể mở rộng lên 3 passages/test sau này
// vi: dịch tiếng Việt (ẩn mặc định)
// vocab: từ khó kèm nghĩa cho popup
// explain: giải thích cho từng câu hỏi

const TESTS_DATA = {
  
  // ==================== CAMBRIDGE 19 - TEST 1 ====================
  'cam19-t1': {
    title: 'The Story of Glass',
    topic: 'History · Material Science',
    difficulty: 'Medium',
    passages: [
      {
        label: 'Reading Passage 1',
        title: 'The Story of Glass',
        content: `<p><span class="para-num">A</span> Glass is one of the most fascinating substances ever created by human hands. Its origins can be traced back over 4,000 years to ancient Mesopotamia and Egypt, where craftsmen first discovered that sand, when heated to extreme temperatures, transformed into a transparent material with extraordinary properties. However, the earliest natural form of glass — obsidian — had already been used by prehistoric peoples for over 100,000 years. Formed when volcanic lava cooled rapidly, obsidian was prized for its sharp edges and was crafted into <span class="vocab" data-word="implements" data-def="công cụ, dụng cụ">implements</span> for hunting and cutting.</p>
        
        <p><span class="para-num">B</span> The deliberate manufacture of glass began with small decorative objects. Early Egyptian glassmakers produced beads and amulets by wrapping molten glass around clay cores, which were later removed to leave hollow vessels. This labor-intensive method limited production to elite households and religious purposes. It was not until the first century BCE that a revolutionary innovation transformed the craft: the invention of glassblowing in the Syro-Palestinian region. By inserting a hollow iron tube into molten glass and blowing through it, artisans could produce vessels far more quickly and in a greater variety of shapes than ever before.</p>
        
        <p><span class="para-num">C</span> The Romans <span class="vocab" data-word="embraced" data-def="đón nhận, áp dụng nhiệt tình">embraced</span> glassblowing with remarkable enthusiasm, and within decades, glass production spread across the empire. Roman glass became so common that even modest households possessed drinking cups, bottles, and window panes — items that had previously been luxuries. Archaeological evidence suggests that by the second century CE, glass factories operated from Britain to the Middle East, producing standardized products for trade. Roman engineers also pioneered the use of glass in architecture, installing windows in public baths and wealthy villas, though these early windows were typically small and irregular.</p>
        
        <p><span class="para-num">D</span> After the fall of the Roman Empire, glassmaking knowledge was preserved primarily in the Byzantine Empire and the Islamic world. Venetian craftsmen, who learned from Byzantine sources, eventually established a glass industry on the island of Murano in 1291 — a deliberate relocation designed to prevent fires in Venice itself and to protect trade secrets. For centuries, Murano glass dominated European markets, and revealing the techniques was punishable by death. Despite such measures, knowledge gradually <span class="vocab" data-word="leaked" data-def="rò rỉ, lộ ra">leaked</span> to other European centers, particularly Bohemia and England.</p>
        
        <p><span class="para-num">E</span> In Britain, the modern glass industry only truly emerged after the repeal of the Excise Act in 1845. From 1745 onwards, heavy taxes had been imposed on the weight of glass produced, severely restricting innovation and forcing manufacturers to favor thin, lightweight designs. Once these taxes were lifted, British glassmakers rapidly developed new techniques, and the Crystal Palace, built for the Great Exhibition of 1851, became a stunning symbol of glass's architectural potential, using nearly 300,000 panes.</p>
        
        <p><span class="para-num">F</span> The twentieth century brought perhaps the most significant innovation since glassblowing: the float glass process, invented by Sir Alastair Pilkington in 1952. In this method, molten glass is poured onto a bath of molten tin, where it spreads out and forms a perfectly flat surface as it cools. This eliminated the need for grinding and polishing, dramatically reducing costs while improving quality. Today, the float process accounts for approximately 90 percent of all flat glass produced globally, and the technique has remained essentially unchanged for over seventy years.</p>
        
        <p><span class="para-num">G</span> Contemporary glass technology has expanded far beyond traditional applications. Fiber optics, developed in the 1970s, revolutionized telecommunications by transmitting information through hair-thin glass strands at the speed of light. Specialized glasses now serve in fields ranging from medicine — where bioactive glasses can stimulate bone regeneration — to space exploration, where heat-resistant glass protects spacecraft during re-entry. Researchers are even developing "smart" glass that can darken automatically in response to sunlight or transmit data wirelessly. What began as a curiosity in ancient furnaces has become one of the most <span class="vocab" data-word="versatile" data-def="đa năng, linh hoạt">versatile</span> materials of the modern age.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Thủy tinh là một trong những chất liệu hấp dẫn nhất từng được tạo ra bởi bàn tay con người. Nguồn gốc của nó có thể truy ngược lại hơn 4.000 năm trước ở vùng Lưỡng Hà và Ai Cập cổ đại. Tuy nhiên, dạng thủy tinh tự nhiên sớm nhất — đá obsidian — đã được người tiền sử sử dụng hơn 100.000 năm trước.</p>
        <p><strong>Đoạn B:</strong> Việc sản xuất thủy tinh có chủ đích bắt đầu với các vật trang trí nhỏ. Phải đến thế kỷ thứ nhất TCN, kỹ thuật thổi thủy tinh được phát minh ở vùng Syro-Palestinian.</p>
        <p><strong>Đoạn C:</strong> Người La Mã đã đón nhận kỹ thuật thổi thủy tinh với sự nhiệt tình đáng kể. Đến thế kỷ thứ hai SCN, các nhà máy thủy tinh đã hoạt động từ Anh đến Trung Đông.</p>
        <p><strong>Đoạn D:</strong> Sau sự sụp đổ của Đế chế La Mã, các nghệ nhân Venice đã thành lập ngành công nghiệp thủy tinh trên đảo Murano vào năm 1291. Tiết lộ kỹ thuật bị tử hình.</p>
        <p><strong>Đoạn E:</strong> Ở Anh, ngành công nghiệp thủy tinh hiện đại chỉ thực sự xuất hiện sau khi Đạo luật Tiêu thụ Đặc biệt được bãi bỏ năm 1845. Cung điện Pha lê 1851 đã sử dụng gần 300.000 tấm kính.</p>
        <p><strong>Đoạn F:</strong> Quy trình thủy tinh nổi (float glass), do Sir Alastair Pilkington phát minh năm 1952, hiện chiếm 90% tổng lượng thủy tinh phẳng sản xuất toàn cầu.</p>
        <p><strong>Đoạn G:</strong> Công nghệ thủy tinh hiện đại đã mở rộng vượt xa các ứng dụng truyền thống. Sợi quang, thủy tinh y học, không gian. Các nhà nghiên cứu đang phát triển "smart glass".</p>`
      },
      {
        label: 'Reading Passage 2',
        title: 'The Mysterious Disappearance of the Roman Lead Industry',
        content: `<p><span class="para-num">A</span> When archaeologists examine ice cores drilled from glaciers in Greenland and the Arctic, they can read a remarkable record of human industrial activity stretching back thousands of years. Trapped within the layers of ancient ice are tiny amounts of metals and other pollutants that drifted through the atmosphere in distant times. Lead, in particular, leaves a distinctive signature that has allowed scientists to reconstruct the rise and fall of ancient mining industries in ways no written record could provide.</p>
        
        <p><span class="para-num">B</span> The Roman Empire was responsible for one of the most intensive periods of lead production in pre-industrial history. Lead was essential to Roman civilisation in ways that modern readers may find surprising. The empire\'s famous water systems depended on lead pipes — the Latin word "plumbum", meaning lead, gives us the modern word "plumbing". Lead was also used extensively in roofing, cooking vessels, cosmetics, and even as a sweetener in wine, where lead acetate produced a pleasant flavour. The empire\'s appetite for lead drove mining operations across Britain, Spain, and the Balkans.</p>
        
        <p><span class="para-num">C</span> Ice core analysis has revealed striking patterns in Roman lead production. From about 250 BCE through the second century CE, lead concentrations in atmospheric records rose steadily, reaching levels that would not be matched again until the Industrial Revolution nearly two thousand years later. The peak corresponded almost exactly with the period of maximum Roman territorial extent and economic activity. Then, beginning around 165 CE, lead concentrations began a precipitous decline.</p>
        
        <p><span class="para-num">D</span> The cause of this decline has been a subject of intense scholarly debate. Some researchers have linked it to the Antonine Plague, a devastating epidemic that struck the empire in 165 CE and killed between 5 and 10 percent of the population. Others have pointed to political instability, with frequent civil wars disrupting mining operations and trade networks. A third explanation focuses on the exhaustion of accessible ore deposits — the easily mined surface deposits had been worked for centuries by the height of Roman activity, and accessing deeper deposits would have required investment that political conditions made impossible.</p>
        
        <p><span class="para-num">E</span> Recent archaeological work has added important detail to this picture. Studies of abandoned Roman mining sites in Britain and Spain reveal complex underground workings, evidence of sophisticated water management systems for draining mines, and ruined housing for what must have been substantial workforces. The scale of these operations demonstrates that Roman lead production was not just casual extraction but a major industrial undertaking. When this infrastructure was abandoned in the third century, the techniques and organisational knowledge required to operate at such a scale were lost.</p>
        
        <p><span class="para-num">F</span> The consequences of declining lead production extended well beyond economics. Roman public health, while terrible by modern standards, depended on the urban water systems that the lead industry made possible. As maintenance of these systems lapsed and supplies of pipes became unavailable, urban water quality deteriorated. Some historians believe this contributed to the gradual depopulation of Roman cities during late antiquity, as urban environments became less healthy and rural alternatives more attractive.</p>
        
        <p><span class="para-num">G</span> The recovery of large-scale lead production took longer than might be expected. Significant new mining operations did not develop until well into the medieval period, and lead production levels comparable to those of the Roman peak were not reached again in Europe until the seventeenth century. The ice core records show clearly the long industrial decline of medieval Europe followed by the gradual recovery of mining activity in the early modern period and the dramatic expansion of the Industrial Revolution. Ancient lead, captured in ice, has thus become one of our most precise records of the rhythms of human civilisation.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Khi các nhà khảo cổ kiểm tra lõi băng khoan từ các sông băng ở Greenland và Bắc Cực, họ có thể đọc được hồ sơ đáng chú ý về hoạt động công nghiệp con người kéo dài hàng nghìn năm. Bị giam giữ trong các lớp băng cổ là lượng nhỏ kim loại và các chất ô nhiễm khác.</p>
        <p><strong>Đoạn B:</strong> Đế chế La Mã chịu trách nhiệm về một trong những thời kỳ sản xuất chì tích cực nhất trong lịch sử tiền công nghiệp. Chì là thiết yếu cho nền văn minh La Mã - hệ thống nước, mái nhà, đồ nấu, mỹ phẩm. Từ Latin "plumbum" cho chúng ta từ "plumbing".</p>
        <p><strong>Đoạn C:</strong> Phân tích lõi băng đã tiết lộ các mẫu nổi bật trong sản xuất chì La Mã. Từ khoảng 250 TCN qua thế kỷ thứ 2 SCN, nồng độ chì tăng đều đặn. Bắt đầu khoảng 165 SCN, nồng độ chì bắt đầu sụt giảm mạnh.</p>
        <p><strong>Đoạn D:</strong> Nguyên nhân của sự sụt giảm này đã là chủ đề tranh luận. Một số nhà nghiên cứu liên kết nó với Bệnh dịch Antonine. Những người khác chỉ ra sự bất ổn chính trị. Một giải thích thứ ba tập trung vào sự cạn kiệt của các mỏ quặng dễ tiếp cận.</p>
        <p><strong>Đoạn E:</strong> Công việc khảo cổ gần đây đã thêm chi tiết quan trọng. Quy mô của các hoạt động này chứng tỏ sản xuất chì La Mã không chỉ là khai thác tự phát mà là một nỗ lực công nghiệp lớn.</p>
        <p><strong>Đoạn F:</strong> Hậu quả của việc sản xuất chì giảm vượt xa kinh tế. Sức khỏe công cộng La Mã phụ thuộc vào hệ thống nước đô thị mà ngành công nghiệp chì làm cho có thể.</p>
        <p><strong>Đoạn G:</strong> Sự phục hồi của sản xuất chì quy mô lớn mất nhiều thời gian hơn người ta có thể mong đợi. Mức sản xuất chì có thể so sánh với đỉnh cao La Mã không đạt được lại ở châu Âu cho đến thế kỷ 17.</p>`
      },
      {
        label: 'Reading Passage 3',
        title: 'The Science of Smell',
        content: `<p><span class="para-num">A</span> Of all the senses, smell is perhaps the most poorly understood. While vision and hearing have been studied intensively for centuries, leading to detailed models of how these senses work, the sense of smell — formally known as olfaction — has long resisted scientific explanation. Even today, despite considerable progress, basic questions about how smell works remain contested. Why are some odours pleasant and others repulsive? How can humans distinguish among thousands of different scents? Why do smells trigger such intense emotional and memory responses?</p>
        
        <p><span class="para-num">B</span> The biological mechanism of smell begins when odour molecules — typically small, light molecules called volatiles — enter the nose through breathing or sniffing. These molecules bind to receptors on specialized cells in a small region of tissue called the olfactory epithelium, located high in the nasal cavity. Signals from these receptors travel directly to the olfactory bulb of the brain, which connects to areas involved in emotion and memory more directly than any other sensory system. This direct neural pathway explains the remarkable ability of smells to evoke powerful memories and feelings — sometimes called the Proust effect, after the French novelist who described how a smell from his childhood could trigger detailed memories from decades earlier.</p>
        
        <p><span class="para-num">C</span> For most of the twentieth century, scientists believed that humans possessed relatively few types of smell receptors, perhaps a few hundred at most. This view was challenged in 1991 by American researchers Linda Buck and Richard Axel, who discovered that mammals actually have hundreds of different receptor types. The human genome contains approximately 400 functional olfactory receptor genes, although humans have lost many that are functional in other mammals — domestic dogs, for example, have nearly twice as many functional receptors. Buck and Axel\'s discovery, which won them the Nobel Prize in 2004, opened up modern smell research.</p>
        
        <p><span class="para-num">D</span> The combinatorial nature of smell explains how a relatively small number of receptors can distinguish such a vast array of scents. Each individual odour activates a unique combination of receptors rather than any single type. Like the way that 26 letters can combine to produce countless words, hundreds of olfactory receptors combine to encode an essentially unlimited variety of smells. Some researchers estimate that humans may be able to distinguish over a trillion different odours, although this number remains controversial and varies dramatically between individuals.</p>
        
        <p><span class="para-num">E</span> Individual differences in smell perception are remarkably large. About 1 percent of people experience anosmia — complete inability to smell — either from birth or following injury or illness. Many more people experience reduced sensitivity to specific smells without realising it; about 50 percent of people, for example, cannot detect the distinctive musky odour of androstenone, while others find it overwhelming. Genetic studies have identified specific variations in receptor genes that cause these differences. Two people may genuinely live in different sensory worlds when it comes to smell.</p>
        
        <p><span class="para-num">F</span> The cultural and emotional dimensions of smell are equally fascinating. Different cultures find different odours appealing, and what registers as pleasant in one society may be experienced as offensive in another. Body odours that some Western cultures view as unacceptable are tolerated or even valued elsewhere. Food preferences depend heavily on smell, and people often dislike unfamiliar cuisines initially because of unfamiliar scents rather than tastes. These cultural variations interact with biological differences to produce the rich variation in smell experience between individuals and communities.</p>
        
        <p><span class="para-num">G</span> The consequences of smell loss extend far beyond simple inconvenience. People who lose their sense of smell — most dramatically demonstrated by the millions affected by COVID-19 — often report significant decreases in quality of life. Eating becomes joyless, as much of what we experience as taste actually depends on smell. Detection of warning signals like smoke, spoiled food, or gas leaks becomes impossible. Emotional connections to memories and people become diminished. Despite these substantial impacts, anosmia receives far less medical attention and research funding than vision and hearing loss. The remarkable progress in olfactory science over the past three decades may eventually change this neglect, but for now smell remains the forgotten sense.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Trong tất cả các giác quan, mùi có lẽ là kém được hiểu biết nhất. Trong khi thị giác và thính giác đã được nghiên cứu kỹ lưỡng, khứu giác đã từ lâu chống lại sự giải thích khoa học. Tại sao một số mùi dễ chịu và những mùi khác đẩy lùi?</p>
        <p><strong>Đoạn B:</strong> Cơ chế sinh học của mùi bắt đầu khi các phân tử mùi đi vào mũi. Tín hiệu đi trực tiếp đến hành khứu giác của não, kết nối với các vùng cảm xúc và trí nhớ trực tiếp hơn bất kỳ hệ thống cảm giác nào khác. Hiệu ứng Proust giải thích cách mùi gợi lên ký ức mạnh mẽ.</p>
        <p><strong>Đoạn C:</strong> Trong phần lớn thế kỷ 20, các nhà khoa học tin con người có ít loại thụ thể mùi. Quan điểm này bị thách thức năm 1991 bởi Linda Buck và Richard Axel - động vật có vú thực sự có hàng trăm loại thụ thể khác nhau. Họ giành giải Nobel năm 2004.</p>
        <p><strong>Đoạn D:</strong> Bản chất tổ hợp của mùi giải thích cách một số lượng thụ thể tương đối nhỏ có thể phân biệt một dãy lớn các mùi. Mỗi mùi kích hoạt một tổ hợp thụ thể duy nhất. Con người có thể phân biệt hơn một nghìn tỷ mùi khác nhau.</p>
        <p><strong>Đoạn E:</strong> Khác biệt cá nhân trong cảm nhận mùi rất lớn. Khoảng 1% người mắc chứng anosmia - không thể ngửi được. Nhiều người khác có độ nhạy cảm giảm với các mùi cụ thể mà không nhận ra.</p>
        <p><strong>Đoạn F:</strong> Các khía cạnh văn hóa và cảm xúc của mùi cũng hấp dẫn. Các nền văn hóa khác nhau thấy các mùi khác nhau hấp dẫn. Mùi cơ thể mà một số văn hóa phương Tây coi là không thể chấp nhận được được dung nạp hoặc thậm chí có giá trị ở nơi khác.</p>
        <p><strong>Đoạn G:</strong> Hậu quả của việc mất mùi vượt xa sự bất tiện đơn giản. Những người mất khứu giác - được chứng minh kịch tính bởi hàng triệu người bị ảnh hưởng bởi COVID-19 - thường báo cáo giảm đáng kể chất lượng cuộc sống. Khứu giác vẫn là giác quan bị lãng quên.</p>`
      }
    ],
    
    questions: [
      // ========== PASSAGE 1 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 1–5',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'Obsidian was used by humans before the invention of man-made glass.', answer: 'TRUE', explain: 'Đoạn A nói obsidian được người tiền sử sử dụng hơn 100.000 năm, trong khi thủy tinh nhân tạo bắt đầu cách đây 4.000 năm.' },
            { q: 'Early Egyptian glass was mainly produced for ordinary households.', answer: 'FALSE', explain: 'Đoạn B: "limited production to elite households" - chỉ giới hạn cho các hộ thượng lưu.' },
            { q: 'The inventor of glassblowing is known by name.', answer: 'NOT GIVEN', explain: 'Đoạn B chỉ nói kỹ thuật này phát minh ở vùng Syro-Palestinian thế kỷ 1 TCN, không nêu tên người phát minh.' },
            { q: 'Roman glass production was confined to a single region of the empire.', answer: 'FALSE', explain: 'Đoạn C: "glass factories operated from Britain to the Middle East" - hoạt động khắp đế chế.' },
            { q: 'Murano glassworkers who revealed their techniques faced severe punishment.', answer: 'TRUE', explain: 'Đoạn D: "revealing the techniques was punishable by death" - bị tử hình nếu tiết lộ.' }
          ]
        },
        {
          group: 'Questions 6–9',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, the Excise Act of 1745:', options: ['A. Encouraged innovation in British glassmaking', 'B. Required glass to be heavy and ornate', 'C. Restricted the development of the glass industry', 'D. Was introduced to compete with Venice'], answer: 'C', explain: 'Đoạn E: "severely restricting innovation".' },
            { q: 'The Crystal Palace was significant because it:', options: ['A. Was built before the Excise Act was repealed', 'B. Demonstrated the architectural potential of glass', 'C. Used the float glass process', 'D. Was the first building made entirely of glass'], answer: 'B', explain: 'Đoạn E: "stunning symbol of glass\'s architectural potential".' },
            { q: 'The float glass process, invented in 1952:', options: ['A. Has been significantly modified in recent decades', 'B. Is used for about half of flat glass today', 'C. Requires extensive grinding and polishing', 'D. Remains largely unchanged in current production'], answer: 'D', explain: 'Đoạn F: "the technique has remained essentially unchanged for over seventy years".' },
            { q: 'Which of the following is NOT mentioned as a modern application of glass?', options: ['A. Underwater communication cables', 'B. Bone regeneration', 'C. Spacecraft protection', 'D. Telecommunications'], answer: 'A', explain: 'Đoạn G đề cập sợi quang viễn thông, y học (xương), không gian — không có cáp dưới nước.' }
          ]
        },
        {
          group: 'Questions 10–13',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Prehistoric peoples used obsidian to make __________ for hunting.', answer: 'implements', explain: 'Đoạn A: "crafted into implements for hunting and cutting".' },
            { q: 'Venice moved its glass industry to Murano partly to prevent __________.', answer: 'fires', explain: 'Đoạn D: "designed to prevent fires in Venice itself".' },
            { q: 'Sir Alastair Pilkington poured molten glass onto a bath of __________ to create flat surfaces.', answer: 'molten tin', explain: 'Đoạn F: "molten glass is poured onto a bath of molten tin".' },
            { q: 'Fiber optics transmit information through hair-thin __________ at the speed of light.', answer: 'glass strands', explain: 'Đoạn G: "transmitting information through hair-thin glass strands".' }
          ]
        }
      ],
      
      // ========== PASSAGE 2 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 14–20',
          type: 'matching-headings',
          instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list below.',
          headings: [
            { id: 'i', text: 'Health consequences of industrial decline' },
            { id: 'ii', text: 'Reading climate history through ancient ice' },
            { id: 'iii', text: 'Multiple theories explain the dramatic fall' },
            { id: 'iv', text: 'The long path back to industrial recovery' },
            { id: 'v', text: 'Why lead mattered so much to Rome' },
            { id: 'vi', text: 'The geographical spread of lead mining' },
            { id: 'vii', text: 'Evidence of industrial sophistication uncovered' },
            { id: 'viii', text: 'Charting the rise and fall in atmospheric records' },
            { id: 'ix', text: 'Modern uses of lead in technology' }
          ],
          items: [
            { q: 'A', answer: 'ii', explain: 'Đoạn A giới thiệu việc đọc lịch sử công nghiệp qua lõi băng cổ.' },
            { q: 'B', answer: 'v', explain: 'Đoạn B giải thích tại sao chì quan trọng với La Mã - ống nước, mái nhà, mỹ phẩm.' },
            { q: 'C', answer: 'viii', explain: 'Đoạn C nói về mẫu hình tăng và giảm của chì trong khí quyển.' },
            { q: 'D', answer: 'iii', explain: 'Đoạn D đưa ra nhiều lý thuyết giải thích sự sụt giảm: dịch bệnh, bất ổn chính trị, cạn kiệt mỏ.' },
            { q: 'E', answer: 'vii', explain: 'Đoạn E nói về bằng chứng khảo cổ cho thấy sự tinh vi công nghiệp.' },
            { q: 'F', answer: 'i', explain: 'Đoạn F đề cập hậu quả sức khỏe khi hệ thống nước suy giảm.' },
            { q: 'G', answer: 'iv', explain: 'Đoạn G nói về sự phục hồi dài hạn của sản xuất chì.' }
          ]
        },
        {
          group: 'Questions 21–23',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'Roman lead production levels were not matched again until modern times.', answer: 'TRUE', explain: 'Đoạn C: "would not be matched again until the Industrial Revolution nearly two thousand years later".' },
            { q: 'The Antonine Plague killed more than half of the Roman population.', answer: 'FALSE', explain: 'Đoạn D: "killed between 5 and 10 percent of the population".' },
            { q: 'Medieval European lead production reached Roman levels by the 13th century.', answer: 'FALSE', explain: 'Đoạn G: "lead production levels comparable to those of the Roman peak were not reached again in Europe until the seventeenth century".' }
          ]
        },
        {
          group: 'Questions 24–26',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'The Latin word "plumbum" means __________.', answer: 'lead', explain: 'Đoạn B: "the Latin word plumbum, meaning lead".' },
            { q: 'Lead concentrations began declining around the year __________ CE.', answer: '165', explain: 'Đoạn C: "beginning around 165 CE, lead concentrations began a precipitous decline".' },
            { q: 'Roman mining sites contained sophisticated systems for __________ mines.', answer: 'draining', explain: 'Đoạn E: "sophisticated water management systems for draining mines".' }
          ]
        }
      ],
      
      // ========== PASSAGE 3 QUESTIONS (14 questions) ==========
      [
        {
          group: 'Questions 27–32',
          type: 'matching-information',
          instruction: 'Reading Passage 3 has seven paragraphs, A-G. Which paragraph contains the following information?',
          paragraphs: ['A','B','C','D','E','F','G'],
          items: [
            { q: 'A reference to the year Buck and Axel made their breakthrough discovery.', answer: 'C', explain: 'Đoạn C: "This view was challenged in 1991 by American researchers Linda Buck and Richard Axel".' },
            { q: 'An estimate of how many different smells humans can distinguish.', answer: 'D', explain: 'Đoạn D: "humans may be able to distinguish over a trillion different odours".' },
            { q: 'The percentage of people who cannot detect a specific musky odour.', answer: 'E', explain: 'Đoạn E: "about 50 percent of people, for example, cannot detect the distinctive musky odour".' },
            { q: 'A comparison of smell receptors between humans and another species.', answer: 'C', explain: 'Đoạn C: "domestic dogs, for example, have nearly twice as many functional receptors".' },
            { q: 'Description of a pathway in the brain that affects emotion and memory.', answer: 'B', explain: 'Đoạn B: "Signals... travel directly to the olfactory bulb... which connects to areas involved in emotion and memory".' },
            { q: 'A reference to a global health event affecting smell.', answer: 'G', explain: 'Đoạn G: "the millions affected by COVID-19".' }
          ]
        },
        {
          group: 'Questions 33–36',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, the human genome contains approximately how many functional olfactory receptor genes?', options: ['A. 100', 'B. 200', 'C. 400', 'D. 800'], answer: 'C', explain: 'Đoạn C: "The human genome contains approximately 400 functional olfactory receptor genes".' },
            { q: 'The "Proust effect" refers to:', options: ['A. The cultural variation in smell preferences', 'B. The ability of smells to trigger detailed memories', 'C. The loss of smell after illness', 'D. The discovery of new types of receptors'], answer: 'B', explain: 'Đoạn B: "sometimes called the Proust effect, after the French novelist who described how a smell from his childhood could trigger detailed memories".' },
            { q: 'The combinatorial nature of smell is compared to:', options: ['A. Musical notes forming melodies', 'B. Letters combining to form words', 'C. Colours mixing on a palette', 'D. Chemicals reacting in a laboratory'], answer: 'B', explain: 'Đoạn D: "Like the way that 26 letters can combine to produce countless words".' },
            { q: 'The author suggests that anosmia:', options: ['A. Receives appropriate medical attention compared to other sensory losses', 'B. Affects fewer than 1 in 10,000 people', 'C. Has been largely cured by modern medicine', 'D. Has significant impacts but receives less attention than vision/hearing loss'], answer: 'D', explain: 'Đoạn G: "anosmia receives far less medical attention and research funding than vision and hearing loss".' }
          ]
        },
        {
          group: 'Questions 37–40',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Smell molecules are usually small, light molecules called __________.', answer: 'volatiles', explain: 'Đoạn B: "small, light molecules called volatiles".' },
            { q: 'Smell receptors are located on the __________ epithelium in the nasal cavity.', answer: 'olfactory', explain: 'Đoạn B: "specialized cells in a small region of tissue called the olfactory epithelium".' },
            { q: 'Buck and Axel won the __________ Prize in 2004 for their discovery.', answer: 'Nobel', explain: 'Đoạn C: "won them the Nobel Prize in 2004".' },
            { q: 'About __________ percent of people experience complete inability to smell.', answer: '1', explain: 'Đoạn E: "About 1 percent of people experience anosmia".' }
          ]
        }
      ]
    ]
  },

  // ==================== CAMBRIDGE 19 - TEST 2 ====================
  'cam19-t2': {
    title: 'The Octopus Mind',
    topic: 'Biology · Animal Intelligence',
    difficulty: 'Hard',
    passages: [
      {
        label: 'Reading Passage 1',
        title: 'The Octopus Mind: Intelligence in an Alien Body',
        content: `<p><span class="para-num">A</span> When we consider intelligent animals, we typically think of mammals — chimpanzees, dolphins, elephants — creatures whose evolutionary history is intertwined with our own. Yet some of the most remarkable minds on Earth belong to creatures separated from humans by over 600 million years of evolution: octopuses. These eight-armed <span class="vocab" data-word="cephalopods" data-def="động vật chân đầu (mực, bạch tuộc)">cephalopods</span>, along with their cousins the cuttlefish and squid, have developed sophisticated cognitive abilities through a path entirely independent of vertebrates.</p>
        
        <p><span class="para-num">B</span> The octopus nervous system is unlike anything else in the animal kingdom. While humans concentrate their neurons in a centralized brain, an octopus distributes roughly two-thirds of its 500 million neurons throughout its eight arms. Each arm contains its own neural cluster capable of processing information and initiating movement without direct instructions from the central brain. This means an octopus arm can, in a meaningful sense, "think" for itself. Researchers have observed severed octopus arms continuing to react to stimuli for hours after separation — recoiling from harm and reaching toward food.</p>
        
        <p><span class="para-num">C</span> This distributed intelligence creates remarkable capabilities. An octopus can simultaneously open a jar with one arm, hunt prey with another, and explore its environment with the remaining six — all without conscious coordination. Dr. Jennifer Mather, a leading researcher in <span class="vocab" data-word="cephalopod" data-def="thuộc về động vật chân đầu">cephalopod</span> behavior, compares the experience to having eight semi-independent assistants, each handling its own tasks while sharing information with a central coordinator. How an octopus integrates this <span class="vocab" data-word="dispersed" data-def="phân tán">dispersed</span> activity into unified behavior remains one of neuroscience's most intriguing puzzles.</p>
        
        <p><span class="para-num">D</span> Octopuses demonstrate problem-solving abilities that rival those of many vertebrates. In laboratory experiments, they have learned to navigate mazes, open childproof medicine bottles, and even distinguish between individual human caretakers — sometimes squirting water at researchers they apparently dislike. One famous octopus at the Seattle Aquarium, named Otto, repeatedly extinguished lights by squirting water at them after closing time, prompting staff to disconnect the tank's electrical system at night. Such behavior suggests not just learning but a degree of <span class="vocab" data-word="mischief" data-def="sự tinh nghịch, nghịch ngợm">mischief</span> and personality previously thought impossible in invertebrates.</p>
        
        <p><span class="para-num">E</span> Perhaps the most astonishing cognitive feat displayed by octopuses involves camouflage. Despite being colorblind, octopuses can match the colors, patterns, and even textures of their surroundings with extraordinary precision. They achieve this through millions of specialized skin cells called chromatophores, controlled directly by the nervous system. Recent research suggests that octopus skin itself may contain light-sensitive proteins, effectively allowing the animal to "see" with its entire body. This would explain how a colorblind creature can produce such accurate color matches.</p>
        
        <p><span class="para-num">F</span> Despite these remarkable abilities, octopus intelligence presents a profound puzzle: octopuses live extraordinarily short lives. Most species survive only one to two years, with females typically dying shortly after their eggs hatch. This brevity is particularly strange given that intelligence in vertebrates usually correlates with long lifespans, allowing time to learn from experience and pass knowledge to offspring. Octopuses, by contrast, are largely solitary and receive no parental teaching. Each generation must rediscover the world independently, raising fundamental questions about why such sophisticated cognition evolved at all.</p>
        
        <p><span class="para-num">G</span> Some researchers suggest that octopus intelligence may have evolved primarily for hunting and predator avoidance rather than social interaction — the driver behind much vertebrate intelligence. Whatever its origins, the octopus mind represents a fundamentally different way of being intelligent, one that challenges our human-centered assumptions about cognition. As philosopher Peter Godfrey-Smith has written, encountering an octopus may be the closest we will come to meeting an intelligent alien — a creature whose mind evolved on a parallel but utterly distinct path from our own.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Khi nói đến động vật thông minh, chúng ta thường nghĩ tới động vật có vú. Tuy nhiên, một số trí tuệ phi thường nhất trên Trái Đất lại thuộc về sinh vật cách xa con người hơn 600 triệu năm tiến hóa: bạch tuộc.</p>
        <p><strong>Đoạn B:</strong> Hệ thần kinh của bạch tuộc khác hẳn mọi loài động vật khác. Bạch tuộc phân tán khoảng 2/3 trong số 500 triệu neuron của nó khắp 8 cánh tay. Mỗi cánh tay có cụm thần kinh riêng, có thể "suy nghĩ" độc lập.</p>
        <p><strong>Đoạn C:</strong> Trí tuệ phân tán này tạo nên khả năng đáng kinh ngạc. Bạch tuộc có thể đồng thời mở lọ, săn mồi, và khám phá môi trường bằng 8 cánh tay cùng lúc.</p>
        <p><strong>Đoạn D:</strong> Bạch tuộc thể hiện khả năng giải quyết vấn đề ngang ngửa nhiều loài có xương sống. Otto - bạch tuộc nổi tiếng - liên tục dập tắt đèn bằng cách phun nước.</p>
        <p><strong>Đoạn E:</strong> Khả năng nhận thức đáng kinh ngạc nhất của bạch tuộc là ngụy trang. Dù bị mù màu, bạch tuộc có thể bắt chước màu sắc, hoa văn, kết cấu môi trường xung quanh chính xác phi thường.</p>
        <p><strong>Đoạn F:</strong> Tuy nhiên, bạch tuộc sống cực kỳ ngắn — chỉ 1-2 năm. Điều này rất lạ vì trí tuệ ở động vật có xương sống thường tương quan với tuổi thọ dài.</p>
        <p><strong>Đoạn G:</strong> Một số nhà nghiên cứu cho rằng trí tuệ bạch tuộc tiến hóa chủ yếu để săn mồi và tránh kẻ thù. Triết gia Peter Godfrey-Smith nói: gặp một con bạch tuộc có thể là gần nhất chúng ta có thể đến với việc gặp một sinh vật ngoài hành tinh thông minh.</p>`
      },
      {
        label: 'Reading Passage 2',
        title: 'The Rise and Fall of the Mediterranean Tuna Fishery',
        content: `<p><span class="para-num">A</span> For more than three thousand years, the bluefin tuna of the Mediterranean Sea has been one of the most prized fish in the world. Ancient civilisations from the Phoenicians to the Romans developed elaborate methods for catching these fast, powerful predators, and the tuna trade played important roles in the economic life of coastal communities throughout antiquity. Yet within the past several decades, this remarkable fishery has come under unprecedented threat, raising urgent questions about the sustainability of one of humanity\'s oldest food sources.</p>
        
        <p><span class="para-num">B</span> The traditional Mediterranean technique for catching tuna, known in Italian as the "mattanza" and dating back at least to the medieval period, involved an elaborate system of nets arranged in a series of chambers. Migrating bluefin tuna, which enter the Mediterranean each spring to spawn, were channelled progressively into smaller compartments until they reached the final "death chamber". This communal fishing event involved entire coastal communities, with skills and equipment passed down through generations of fishing families. Despite its dramatic ending, the mattanza was actually a relatively sustainable practice, harvesting only a small fraction of the migrating population each year.</p>
        
        <p><span class="para-num">C</span> The transformation of the bluefin fishery began in the 1970s, when Japanese demand for raw tuna for sushi exploded. Bluefin tuna, with its rich red flesh perfectly suited to high-end sushi, became one of the most expensive fish in the world. A single large fish could sell for tens of thousands of dollars at auctions in Tokyo. This astronomical pricing motivated the rapid development of industrial-scale fishing operations across the Mediterranean. Modern techniques bore little resemblance to traditional methods: massive purse-seine nets, deployed by industrial fishing vessels and guided by spotter aircraft, could catch entire schools of tuna in single operations.</p>
        
        <p><span class="para-num">D</span> The development of tuna ranching further transformed the industry in the 1990s. Rather than simply catching and killing tuna, fishing operations now caught younger fish alive and transferred them to large underwater pens, where they were fattened on huge quantities of smaller fish for months before being slaughtered for export. This practice increased the value of each fish but also dramatically increased fishing pressure, as more juvenile tuna were caught before they had the opportunity to reproduce. The ranching system also created severe environmental problems, including water pollution from concentrated waste and the disruption of marine food chains by the enormous fish consumption required.</p>
        
        <p><span class="para-num">E</span> The biological consequences of these changes were severe. Bluefin tuna populations declined by approximately 80 percent between 1970 and 2010, despite the technological improvements in catching them. The collapse was particularly worrying because bluefin tuna reproduce relatively slowly, with females reaching maturity only at four to five years old and producing comparatively few offspring per spawning event. Once populations declined below critical levels, recovery became extremely difficult. International scientific organisations warned repeatedly that fishing levels were unsustainable, but their warnings were largely ignored for decades.</p>
        
        <p><span class="para-num">F</span> A significant turning point came in 2010 when an attempt to list bluefin tuna under CITES — the international convention restricting trade in endangered species — narrowly failed at a major conference. Although the listing did not succeed, the publicity surrounding the vote prompted significant changes. The International Commission for the Conservation of Atlantic Tunas (ICCAT) adopted dramatically reduced catch quotas, and improved monitoring systems began to detect illegal fishing more effectively. Some governments implemented criminal penalties for tuna-related fraud, which had been widespread.</p>
        
        <p><span class="para-num">G</span> Remarkably, bluefin tuna populations have shown signs of recovery in recent years. Scientific surveys suggest that western Atlantic bluefin populations have stabilised and that Mediterranean populations are slowly increasing. This recovery, while encouraging, remains fragile. Climate change is altering Mediterranean conditions in ways that may affect tuna reproduction. Illegal fishing continues despite improved enforcement. The market for bluefin tuna remains enormous, and economic pressures to increase quotas are constant. Whether the bluefin tuna can be preserved as both an ecological treasure and a sustainable commercial resource will depend on decisions made in the coming decades.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Trong hơn ba nghìn năm, cá ngừ vây xanh ở Địa Trung Hải là một trong những loài cá quý nhất thế giới. Các nền văn minh cổ đại từ Phoenicia đến La Mã đã phát triển phương pháp tinh vi để bắt loài cá săn mồi nhanh và mạnh này. Tuy nhiên, trong vài thập kỷ qua, nghề cá đáng kể này đã chịu mối đe dọa chưa từng có.</p>
        <p><strong>Đoạn B:</strong> Kỹ thuật truyền thống bắt cá ngừ ở Địa Trung Hải, được biết đến với tên tiếng Ý là "mattanza", có từ ít nhất thời trung cổ. Hệ thống lưới phức tạp dẫn cá ngừ di cư vào các ngăn nhỏ hơn dần. Đây là thực hành tương đối bền vững.</p>
        <p><strong>Đoạn C:</strong> Sự biến đổi bắt đầu vào những năm 1970, khi nhu cầu sushi của Nhật Bản bùng nổ. Một con cá lớn có thể bán giá hàng chục nghìn USD ở Tokyo. Các kỹ thuật công nghiệp - lưới vây lớn, máy bay phát hiện - có thể bắt cả đàn cá ngừ trong một lần.</p>
        <p><strong>Đoạn D:</strong> Việc nuôi cá ngừ trong lồng những năm 1990 biến đổi ngành công nghiệp tiếp. Cá ngừ con bị bắt sống và nuôi vỗ béo trong các lồng ngầm trước khi giết để xuất khẩu. Hệ thống này tăng giá trị mỗi con cá nhưng cũng tăng áp lực đánh bắt.</p>
        <p><strong>Đoạn E:</strong> Hậu quả sinh học rất nghiêm trọng. Quần thể cá ngừ vây xanh giảm khoảng 80% giữa 1970 và 2010. Cá ngừ sinh sản chậm - cá cái chỉ trưởng thành ở 4-5 năm tuổi. Một khi quần thể giảm dưới mức quan trọng, việc phục hồi cực kỳ khó khăn.</p>
        <p><strong>Đoạn F:</strong> Điểm ngoặt quan trọng đến năm 2010 khi nỗ lực liệt kê cá ngừ vây xanh dưới CITES suýt thất bại. ICCAT đã áp dụng các hạn ngạch bắt cá giảm mạnh và các hệ thống giám sát được cải thiện.</p>
        <p><strong>Đoạn G:</strong> Đáng chú ý, quần thể cá ngừ vây xanh đã có dấu hiệu phục hồi trong những năm gần đây. Tuy nhiên, sự phục hồi vẫn mong manh. Biến đổi khí hậu đang thay đổi điều kiện Địa Trung Hải. Đánh bắt bất hợp pháp vẫn tiếp tục.</p>`
      },
      {
        label: 'Reading Passage 3',
        title: 'The Psychology of Negotiation',
        content: `<p><span class="para-num">A</span> Few aspects of human interaction have received more practical attention than the art of negotiation. From international diplomacy to commercial dealmaking to ordinary domestic compromises, the ability to reach mutually acceptable agreements with others is among the most valuable skills a person can possess. Yet research in psychology and economics over the past several decades has revealed that human negotiation involves systematic patterns and biases that are often invisible to participants — patterns that can be exploited by skilled negotiators or addressed by careful preparation.</p>
        
        <p><span class="para-num">B</span> One of the most well-documented findings concerns what researchers call the anchoring effect. The first number mentioned in a negotiation tends to exert a powerful gravitational pull on the final outcome, regardless of whether that initial figure has any rational basis. In experiments, even obviously arbitrary numbers — such as the last two digits of a social security number — can influence subsequent estimates of values or prices. Skilled negotiators understand this effect and use it deliberately, opening with ambitious initial positions that anchor subsequent discussions in their favour.</p>
        
        <p><span class="para-num">C</span> A second crucial pattern involves what psychologists call loss aversion. People consistently react more strongly to losing something than to gaining something of equivalent value. This asymmetry has profound implications for negotiation. Framing the same outcome as either a gain or a loss can produce dramatically different responses. A negotiator who emphasises what the other party stands to lose by failing to agree will often achieve better results than one who emphasises what could be gained by agreeing.</p>
        
        <p><span class="para-num">D</span> The classical economic view of negotiation assumed that participants were rational actors who would coolly calculate their interests and propose mutually beneficial agreements. Behavioural economics has thoroughly demolished this picture. Real negotiators are influenced by emotions, social pressures, perceived fairness, and various cognitive biases that they may not recognise. The ultimatum game, one of the most famous experiments in behavioural economics, demonstrates how powerfully these factors operate. In this game, one player proposes how to divide a sum of money with a second player, who can either accept the proposal or reject it, in which case neither player gets anything. Rational players should accept any non-zero offer, but real people consistently reject offers they perceive as unfair, even at considerable cost to themselves.</p>
        
        <p><span class="para-num">E</span> Cultural differences in negotiation behaviour are substantial and often underappreciated. Research comparing American and Chinese negotiation styles has shown that Americans typically focus on immediate transactional details while Chinese negotiators often place greater emphasis on building long-term relationships before discussing specifics. Japanese negotiators frequently use silence in ways that Western participants find uncomfortable, while Middle Eastern traditions often expect extensive preliminary courtesies that Western negotiators may find inefficient. Effective international negotiation requires sensitivity to these variations rather than assuming that techniques effective in one cultural context will work elsewhere.</p>
        
        <p><span class="para-num">F</span> Modern research has identified several principles that consistently improve negotiation outcomes. Preparation matters enormously: negotiators who research their counterparts, understand their alternatives if no agreement is reached, and set clear goals before beginning consistently outperform those who improvise. Active listening is another powerful tool, with skilled negotiators often spending more time understanding the other party\'s interests than presenting their own positions. The willingness to ask probing questions, rather than making aggressive demands, often produces better outcomes than purely competitive approaches.</p>
        
        <p><span class="para-num">G</span> Technology is changing negotiation in interesting ways. Online platforms enable negotiations between parties who never meet face-to-face, potentially reducing the influence of personal charisma and physical presence but also limiting the social information that helps build trust. Artificial intelligence systems are increasingly able to negotiate on behalf of humans, raising both practical and ethical questions. Some researchers suggest that AI negotiators may eventually become superior to human ones in many contexts, particularly when emotional reactions might lead humans to make suboptimal decisions. Whether this prospect represents progress or loss depends partly on what we value about negotiation beyond its economic outcomes.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Ít khía cạnh tương tác con người nhận được sự chú ý thực tế hơn nghệ thuật đàm phán. Từ ngoại giao quốc tế đến thương vụ thương mại. Nghiên cứu tâm lý và kinh tế trong vài thập kỷ qua đã tiết lộ các mẫu hệ thống và thiên kiến.</p>
        <p><strong>Đoạn B:</strong> Một trong những phát hiện được ghi chép rõ nhất là hiệu ứng neo (anchoring). Con số đầu tiên đề cập trong đàm phán có lực hấp dẫn mạnh mẽ lên kết quả cuối cùng. Các nhà đàm phán giỏi sử dụng điều này có chủ đích.</p>
        <p><strong>Đoạn C:</strong> Mẫu thứ hai quan trọng là loss aversion (ác cảm với mất mát). Con người phản ứng mạnh hơn với mất mát so với được lợi tương đương. Việc đóng khung kết quả như mất hay được có thể tạo phản ứng dramatic khác nhau.</p>
        <p><strong>Đoạn D:</strong> Kinh tế học hành vi đã hoàn toàn phá đổ quan điểm cổ điển rằng người đàm phán là các tác nhân lý trí. Trò chơi ultimatum cho thấy người thật từ chối lời đề nghị họ cho là không công bằng, ngay cả khi tự gây tổn thất.</p>
        <p><strong>Đoạn E:</strong> Khác biệt văn hóa trong hành vi đàm phán rất lớn. Người Mỹ tập trung vào chi tiết giao dịch; người Trung tập trung xây dựng mối quan hệ dài hạn. Người Nhật sử dụng sự im lặng. Đàm phán quốc tế hiệu quả cần nhạy bén với các khác biệt này.</p>
        <p><strong>Đoạn F:</strong> Nghiên cứu hiện đại đã xác định một số nguyên tắc cải thiện kết quả đàm phán. Chuẩn bị quan trọng enormously. Lắng nghe tích cực. Đặt câu hỏi thăm dò thay vì yêu cầu hung hăng.</p>
        <p><strong>Đoạn G:</strong> Công nghệ đang thay đổi đàm phán theo những cách thú vị. Hệ thống AI ngày càng có thể đàm phán thay cho con người. Một số nhà nghiên cứu cho rằng AI cuối cùng có thể vượt qua con người trong nhiều bối cảnh.</p>`
      }
    ],
    
    questions: [
      // ========== PASSAGE 1 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 1–6',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'Octopuses and humans share a relatively recent common ancestor.', answer: 'FALSE', explain: 'Đoạn A: "separated from humans by over 600 million years of evolution".' },
            { q: 'Most of an octopus\'s neurons are located in its central brain.', answer: 'FALSE', explain: 'Đoạn B: "two-thirds of its 500 million neurons throughout its eight arms".' },
            { q: 'Severed octopus arms can still respond to their environment.', answer: 'TRUE', explain: 'Đoạn B: "severed octopus arms continuing to react to stimuli for hours".' },
            { q: 'Dr. Jennifer Mather discovered the distributed nature of octopus intelligence.', answer: 'NOT GIVEN', explain: 'Đoạn C chỉ nói bà là nhà nghiên cứu hàng đầu, không nói bà phát hiện ra điều này.' },
            { q: 'Octopuses can recognize individual humans.', answer: 'TRUE', explain: 'Đoạn D: "distinguish between individual human caretakers".' },
            { q: 'Otto the octopus was eventually moved to a different aquarium.', answer: 'NOT GIVEN', explain: 'Đoạn D chỉ nói nhân viên ngắt điện, không nói chuyển Otto.' }
          ]
        },
        {
          group: 'Questions 7–10',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, octopus camouflage is remarkable because:', options: ['A. It works in complete darkness', 'B. The animals are colorblind yet match colors precisely', 'C. It can be maintained for many hours', 'D. It changes more rapidly than any other animal\'s'], answer: 'B', explain: 'Đoạn E: "Despite being colorblind, octopuses can match the colors... with extraordinary precision".' },
            { q: 'Recent research on octopus skin suggests:', options: ['A. The skin can detect light independently of the eyes', 'B. Chromatophores are controlled by hormones', 'C. The skin develops differently in young octopuses', 'D. Color matching is learned through experience'], answer: 'A', explain: 'Đoạn E: "octopus skin itself may contain light-sensitive proteins... to see with its entire body".' },
            { q: 'The passage describes octopus lifespan as puzzling because:', options: ['A. It varies significantly between species', 'B. Intelligence usually develops alongside long lives in vertebrates', 'C. Octopuses appear to age more rapidly than expected', 'D. Females tend to outlive males by many years'], answer: 'B', explain: 'Đoạn F: "intelligence in vertebrates usually correlates with long lifespans".' },
            { q: 'Peter Godfrey-Smith compares meeting an octopus to:', options: ['A. Discovering a new species of mammal', 'B. Communicating across language barriers', 'C. Meeting an intelligent alien being', 'D. Watching the evolution of consciousness'], answer: 'C', explain: 'Đoạn G: "the closest we will come to meeting an intelligent alien".' }
          ]
        },
        {
          group: 'Questions 11–13',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Octopus skin contains specialized cells called __________ that control color change.', answer: 'chromatophores', explain: 'Đoạn E: "specialized skin cells called chromatophores".' },
            { q: 'Unlike many social animals, octopuses are largely __________.', answer: 'solitary', explain: 'Đoạn F: "Octopuses, by contrast, are largely solitary".' },
            { q: 'Researchers suggest octopus intelligence evolved primarily for hunting and __________.', answer: 'predator avoidance', explain: 'Đoạn G: "evolved primarily for hunting and predator avoidance".' }
          ]
        }
      ],
      
      // ========== PASSAGE 2 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 14–20',
          type: 'matching-headings',
          instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list below.',
          headings: [
            { id: 'i', text: 'How sushi demand changed everything' },
            { id: 'ii', text: 'Sustainable practices over centuries' },
            { id: 'iii', text: 'Hopeful signs but continued risks' },
            { id: 'iv', text: 'An ancient and valuable resource under threat' },
            { id: 'v', text: 'New scientific tracking methods' },
            { id: 'vi', text: 'Devastating population collapse' },
            { id: 'vii', text: 'Adding value while increasing damage' },
            { id: 'viii', text: 'International regulatory turning point' },
            { id: 'ix', text: 'Migration patterns explained' }
          ],
          items: [
            { q: 'A', answer: 'iv', explain: 'Đoạn A giới thiệu cá ngừ vây xanh là nguồn tài nguyên cổ và quý hiện đang chịu mối đe dọa.' },
            { q: 'B', answer: 'ii', explain: 'Đoạn B mô tả kỹ thuật mattanza truyền thống là thực hành tương đối bền vững qua nhiều thế kỷ.' },
            { q: 'C', answer: 'i', explain: 'Đoạn C nói về cách nhu cầu sushi Nhật Bản từ những năm 1970 đã biến đổi mọi thứ.' },
            { q: 'D', answer: 'vii', explain: 'Đoạn D về tuna ranching - tăng giá trị nhưng cũng tăng tổn hại môi trường.' },
            { q: 'E', answer: 'vi', explain: 'Đoạn E mô tả sự sụp đổ quần thể cá ngừ 80% giữa 1970-2010.' },
            { q: 'F', answer: 'viii', explain: 'Đoạn F về điểm ngoặt CITES 2010 và những thay đổi quy định quốc tế.' },
            { q: 'G', answer: 'iii', explain: 'Đoạn G nói về dấu hiệu phục hồi nhưng vẫn có rủi ro tiếp diễn.' }
          ]
        },
        {
          group: 'Questions 21–23',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'The mattanza was a destructive fishing method that harmed tuna populations.', answer: 'FALSE', explain: 'Đoạn B: "the mattanza was actually a relatively sustainable practice".' },
            { q: 'Bluefin tuna ranching reduced the pressure on wild populations.', answer: 'FALSE', explain: 'Đoạn D: "dramatically increased fishing pressure, as more juvenile tuna were caught".' },
            { q: 'The CITES proposal to protect bluefin tuna in 2010 succeeded.', answer: 'FALSE', explain: 'Đoạn F: "an attempt to list bluefin tuna under CITES... narrowly failed".' }
          ]
        },
        {
          group: 'Questions 24–26',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'The Italian name for the traditional tuna catching technique is the __________.', answer: 'mattanza', explain: 'Đoạn B: "known in Italian as the mattanza".' },
            { q: 'Female bluefin tuna only reach maturity at __________ years old.', answer: 'four to five', explain: 'Đoạn E: "females reaching maturity only at four to five years old".' },
            { q: 'Bluefin tuna populations declined by approximately __________ percent between 1970 and 2010.', answer: '80', explain: 'Đoạn E: "declined by approximately 80 percent between 1970 and 2010".' }
          ]
        }
      ],
      
      // ========== PASSAGE 3 QUESTIONS (14 questions) ==========
      [
        {
          group: 'Questions 27–32',
          type: 'matching-information',
          instruction: 'Reading Passage 3 has seven paragraphs, A-G. Which paragraph contains the following information?',
          paragraphs: ['A','B','C','D','E','F','G'],
          items: [
            { q: 'A description of an experimental game involving dividing money.', answer: 'D', explain: 'Đoạn D mô tả ultimatum game - chia tiền giữa hai người chơi.' },
            { q: 'A comparison of how different cultures approach negotiation.', answer: 'E', explain: 'Đoạn E so sánh phong cách đàm phán Mỹ, Trung Quốc, Nhật Bản, Trung Đông.' },
            { q: 'Mention of how arbitrary numbers can influence pricing decisions.', answer: 'B', explain: 'Đoạn B nói về hiệu ứng neo - "even obviously arbitrary numbers... can influence subsequent estimates".' },
            { q: 'Reference to how AI systems may negotiate on behalf of people.', answer: 'G', explain: 'Đoạn G: "Artificial intelligence systems are increasingly able to negotiate on behalf of humans".' },
            { q: 'Examples of specific principles that improve negotiation outcomes.', answer: 'F', explain: 'Đoạn F: "principles that consistently improve negotiation outcomes" - preparation, active listening.' },
            { q: 'A description of how the same outcome can be presented differently.', answer: 'C', explain: 'Đoạn C: "Framing the same outcome as either a gain or a loss can produce dramatically different responses".' }
          ]
        },
        {
          group: 'Questions 33–36',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'Skilled negotiators use the anchoring effect by:', options: ['A. Avoiding mentioning numbers first', 'B. Opening with ambitious initial positions', 'C. Refusing to discuss specific values', 'D. Letting the other party set all terms'], answer: 'B', explain: 'Đoạn B: "Skilled negotiators... opening with ambitious initial positions that anchor subsequent discussions in their favour".' },
            { q: 'The ultimatum game demonstrates that:', options: ['A. People always behave rationally with money', 'B. People reject offers they perceive as unfair', 'C. Money has no influence on negotiations', 'D. The first player always wins'], answer: 'B', explain: 'Đoạn D: "real people consistently reject offers they perceive as unfair, even at considerable cost to themselves".' },
            { q: 'According to the passage, effective negotiators tend to:', options: ['A. Speak more than they listen', 'B. Improvise rather than prepare', 'C. Spend more time understanding the other party\'s interests', 'D. Make aggressive opening demands'], answer: 'C', explain: 'Đoạn F: "skilled negotiators often spending more time understanding the other party\'s interests".' },
            { q: 'The author suggests AI negotiators may eventually be superior because they:', options: ['A. Can negotiate in many languages', 'B. Cost less than human negotiators', 'C. Lack emotional reactions that lead to suboptimal decisions', 'D. Are unaffected by cultural differences'], answer: 'C', explain: 'Đoạn G: "when emotional reactions might lead humans to make suboptimal decisions".' }
          ]
        },
        {
          group: 'Questions 37–40',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'The first number mentioned in a negotiation has what researchers call the __________ effect.', answer: 'anchoring', explain: 'Đoạn B: "what researchers call the anchoring effect".' },
            { q: 'People react more strongly to losses than equivalent gains; this is called loss __________.', answer: 'aversion', explain: 'Đoạn C: "what psychologists call loss aversion".' },
            { q: 'Japanese negotiators frequently use __________ in ways that Western participants find uncomfortable.', answer: 'silence', explain: 'Đoạn E: "Japanese negotiators frequently use silence".' },
            { q: 'Effective negotiators understand their __________ if no agreement is reached.', answer: 'alternatives', explain: 'Đoạn F: "understand their alternatives if no agreement is reached".' }
          ]
        }
      ]
    ]
  },

  // ==================== CAMBRIDGE 18 - TEST 1 ====================
  'cam18-t1': {
    title: 'The Decline of Bees',
    topic: 'Environment · Biology',
    difficulty: 'Medium',
    passages: [
      {
        label: 'Reading Passage 1',
        title: 'The Silent Hives: Understanding the Decline of Bees',
        content: `<p><span class="para-num">A</span> Bees pollinate approximately one-third of the food we eat. From apples and almonds to coffee and cocoa, our breakfast tables would look dramatically different without these tiny workers. Globally, the economic value of pollination services provided by bees is estimated at over 200 billion dollars annually. Yet in recent decades, bee populations have been declining at alarming rates across North America, Europe, and parts of Asia, prompting urgent scientific investigation into the causes.</p>
        
        <p><span class="para-num">B</span> The phenomenon known as Colony Collapse Disorder (CCD) first attracted widespread attention in 2006, when beekeepers in the United States reported losing 30 to 90 percent of their hives in a single winter. The hallmark of CCD is mysterious: worker bees simply vanish, leaving behind the queen, immature bees, and ample food stores. Unlike other forms of <span class="vocab" data-word="hive" data-def="tổ ong">hive</span> death, dead bodies are rarely found near the colony. This sudden disappearance puzzled scientists for years, and although CCD reports have decreased since 2010, overall bee declines have continued.</p>
        
        <p><span class="para-num">C</span> Researchers now believe that no single cause explains the crisis; instead, multiple stressors interact in complex ways. Among the most heavily investigated factors are <span class="vocab" data-word="neonicotinoids" data-def="thuốc trừ sâu neonicotinoid">neonicotinoids</span>, a class of pesticides introduced in the 1990s that became one of the most widely used insecticides in the world. These chemicals are absorbed into the tissues of treated plants, including their pollen and nectar, exposing bees that visit flowers. Studies have shown that even at sub-lethal doses, neonicotinoids impair bees\' ability to navigate, learn, and reproduce.</p>
        
        <p><span class="para-num">D</span> A second major factor is the parasitic mite Varroa destructor. Originally a parasite of Asian honeybees, which have evolved defenses against it, Varroa jumped to European honeybees in the mid-twentieth century and has since spread worldwide. The mite attaches to bees and feeds on their fat reserves, weakening individuals and transmitting devastating viruses. Beekeepers describe Varroa as the single most damaging pest in modern apiculture, requiring constant management to keep colonies alive.</p>
        
        <p><span class="para-num">E</span> Habitat loss compounds these threats. Modern agriculture often features vast monocultures — single crops grown over enormous areas — which provide bees with food during bloom but leave them starving for the rest of the year. Wildflower meadows, hedgerows, and other diverse habitats have <span class="vocab" data-word="dwindled" data-def="suy giảm, thu hẹp">dwindled</span> dramatically in industrialized countries. In the United Kingdom alone, an estimated 97 percent of flower-rich grasslands have disappeared since the 1930s.</p>
        
        <p><span class="para-num">F</span> Climate change adds yet another layer of complexity. As temperatures shift, the synchronization between bees and the flowers they pollinate can break down. Some flowers now bloom earlier than the bees that traditionally pollinated them emerge, leaving both partners without their usual resources. Extreme weather events, including unseasonal frosts and prolonged droughts, also damage bee populations directly. Researchers in the Rocky Mountains have documented declining bumblebee numbers correlating with rising summer temperatures.</p>
        
        <p><span class="para-num">G</span> Solutions are being pursued on multiple fronts. The European Union banned outdoor use of three major neonicotinoids in 2018, and similar restrictions are being considered elsewhere. Urban beekeeping has grown in popularity, and cities such as Oslo have created "bee highways" — corridors of flower-rich plantings designed to support pollinators. Farmers are being encouraged to plant pollinator-friendly hedgerows and reduce pesticide use. Individual gardeners can contribute by choosing native flowering plants and avoiding chemical sprays. The fate of bees, ultimately, is tied to choices made at every scale, from international policy to backyard gardens.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Ong thụ phấn khoảng 1/3 thực phẩm chúng ta ăn. Giá trị kinh tế dịch vụ thụ phấn của ong toàn cầu ước tính hơn 200 tỷ đô la mỗi năm. Tuy nhiên, số lượng ong đã suy giảm đáng báo động.</p>
        <p><strong>Đoạn B:</strong> Hiện tượng Rối loạn Sụp đổ Đàn ong (CCD) thu hút sự chú ý từ năm 2006, khi người nuôi ong Mỹ báo cáo mất 30-90% tổ ong trong một mùa đông.</p>
        <p><strong>Đoạn C:</strong> Không có nguyên nhân duy nhất nào giải thích khủng hoảng này. Trong số các yếu tố là neonicotinoids - thuốc trừ sâu được hấp thụ vào mô cây, kể cả phấn hoa và mật.</p>
        <p><strong>Đoạn D:</strong> Yếu tố thứ hai là loài ve ký sinh Varroa destructor. Người nuôi ong mô tả Varroa là sâu bệnh tổn hại nhất trong ngành nuôi ong hiện đại.</p>
        <p><strong>Đoạn E:</strong> Mất môi trường sống cộng hưởng các mối đe dọa. Ở Anh, 97% đồng cỏ giàu hoa đã biến mất kể từ những năm 1930.</p>
        <p><strong>Đoạn F:</strong> Biến đổi khí hậu thêm lớp phức tạp. Sự đồng bộ giữa ong và hoa có thể bị phá vỡ.</p>
        <p><strong>Đoạn G:</strong> Giải pháp đang được theo đuổi trên nhiều mặt. EU đã cấm 3 loại neonicotinoid chính ngoài trời năm 2018.</p>`
      },
      {
        label: 'Reading Passage 2',
        title: 'The Lost Wisdom of Sand Drawings',
        content: `<p><span class="para-num">A</span> On the remote island of Malekula in the South Pacific nation of Vanuatu, an extraordinary art form survives that has fascinated anthropologists for over a century. The sand drawings of Vanuatu — geometrical designs traced rapidly in sand or ash with a single continuous finger movement — combine artistic beauty, mathematical sophistication, and cultural knowledge in a way that has few parallels anywhere else in the world. In 2003, UNESCO recognised these drawings as part of humanity\'s intangible cultural heritage, acknowledging their unique value at a time when the tradition itself faced increasing threats.</p>
        
        <p><span class="para-num">B</span> The technical achievement of the drawings becomes apparent when one watches a master practitioner at work. The artist begins by drawing a network of guidelines in the sand — perhaps a simple grid of intersecting lines. Then, without lifting the finger from the sand, they trace an intricate design that crosses and recrosses itself many times, eventually returning precisely to the starting point. The final pattern can include hundreds of intersections and yet maintain perfect mathematical regularity. Some designs require fingers tracing for nearly a minute without pause.</p>
        
        <p><span class="para-num">C</span> Each sand drawing is associated with specific cultural meanings. Designs may represent particular places, mythical stories, kinship relationships, or ceremonial occasions. The complete tradition encompasses several hundred different drawings, with experts able to perform them in specific narrative sequences. The drawings function not just as art but as a kind of writing system — a visual library of cultural knowledge passed from generation to generation. Different designs are appropriate for different audiences and contexts; some are restricted to particular initiates and not shown to outsiders.</p>
        
        <p><span class="para-num">D</span> Mathematicians have studied the sand drawings with considerable interest. The designs reveal sophisticated understanding of what mathematicians call Eulerian graphs — networks that can be traversed completely without lifting the pen or retracing any edge. While European mathematicians did not formalise the theory of such paths until the eighteenth century, the people of Vanuatu had been producing complex examples of them for centuries. The drawings also demonstrate intuitive grasp of geometric symmetries, topological properties, and visual rhythm.</p>
        
        <p><span class="para-num">E</span> The first systematic documentation of the sand drawings was conducted by the British anthropologist John Layard in the 1910s, who recorded hundreds of designs and analysed their cultural functions. Later researchers, including the French ethnographer Jean Guiart in the 1950s, added substantially to this record. Their work preserved knowledge that might otherwise have been lost as colonial influences disrupted traditional ways of life. Today, the original recordings of these researchers remain crucial sources for cultural revival efforts.</p>
        
        <p><span class="para-num">F</span> Despite UNESCO recognition, the sand drawing tradition faces serious threats. Few young people are learning the more complex designs, and the elderly masters who possess complete knowledge of the tradition are gradually disappearing. Modern educational systems and economic pressures pull young Vanuatu people toward different priorities. Television, internet, and mobile phones provide entertainment that once would have come from cultural traditions including sand drawing performances. Without active intervention, complete loss of the tradition within a generation seems plausible.</p>
        
        <p><span class="para-num">G</span> Various initiatives now aim to preserve and revive sand drawing knowledge. Workshops in schools teach children basic designs, with elders demonstrating techniques and explaining cultural meanings. Cultural festivals provide opportunities for masters to perform publicly and pass on their knowledge to wider audiences. Digital recordings document complete performances for permanent preservation, though there is debate about whether such recordings risk reducing living traditions to museum artefacts. The future of Vanuatu sand drawings, like that of many traditional knowledge systems, depends on whether modern societies can value such heritage enough to maintain it.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Trên đảo Malekula thuộc Vanuatu, một hình thức nghệ thuật phi thường vẫn tồn tại - vẽ trên cát. Các họa tiết hình học vẽ trong cát chỉ bằng một đường ngón tay liên tục. UNESCO công nhận năm 2003.</p>
        <p><strong>Đoạn B:</strong> Người nghệ sĩ bắt đầu vẽ lưới hướng dẫn, sau đó không nhấc ngón tay, vẽ thiết kế phức tạp quay trở về điểm bắt đầu. Một số thiết kế đòi hỏi vẽ gần một phút không nghỉ.</p>
        <p><strong>Đoạn C:</strong> Mỗi bản vẽ có ý nghĩa văn hóa cụ thể. Truyền thống đầy đủ bao gồm hàng trăm bản vẽ khác nhau. Bản vẽ hoạt động như hệ thống chữ viết - thư viện kiến thức văn hóa.</p>
        <p><strong>Đoạn D:</strong> Các nhà toán học đã nghiên cứu các bản vẽ cát với sự quan tâm lớn. Các thiết kế tiết lộ hiểu biết tinh vi về đồ thị Eulerian. Trong khi các nhà toán học châu Âu chưa chính thức hóa lý thuyết này đến thế kỷ 18, người Vanuatu đã sản xuất các ví dụ phức tạp trong nhiều thế kỷ.</p>
        <p><strong>Đoạn E:</strong> Tài liệu hóa hệ thống đầu tiên do nhà nhân học Anh John Layard thực hiện trong những năm 1910. Sau đó, nhà dân tộc học Pháp Jean Guiart trong những năm 1950 đã bổ sung đáng kể.</p>
        <p><strong>Đoạn F:</strong> Mặc dù được UNESCO công nhận, truyền thống vẽ cát đối mặt các mối đe dọa nghiêm trọng. Ít người trẻ học các thiết kế phức tạp. Các bậc thầy lớn tuổi dần biến mất.</p>
        <p><strong>Đoạn G:</strong> Các sáng kiến đang nhằm bảo tồn kiến thức vẽ cát. Hội thảo dạy trẻ em các thiết kế cơ bản. Lễ hội văn hóa, ghi âm kỹ thuật số tài liệu hóa các biểu diễn.</p>`
      },
      {
        label: 'Reading Passage 3',
        title: 'The Psychology of Productivity',
        content: `<p><span class="para-num">A</span> Few topics receive more attention in modern professional life than productivity. Bookstores devote entire sections to productivity self-help; software companies build products promising to optimize work output; consulting firms develop methodologies they sell to organisations seeking efficiency improvements. Beneath this enormous industry lies a fundamental question that has occupied philosophers since antiquity: what does it mean to use time well? Modern psychology has approached this question scientifically, producing findings that often contradict popular productivity advice.</p>
        
        <p><span class="para-num">B</span> The most persistent myth about productivity concerns multitasking — the practice of doing several things simultaneously. Many productivity systems promise to help workers handle more tasks at once, and most modern workers spend significant portions of their day juggling multiple responsibilities. Yet psychological research has consistently demonstrated that what people call multitasking is actually rapid task-switching, with significant cognitive costs each time attention moves from one activity to another. Studies measuring brain activity show that the brain cannot truly process multiple complex tasks simultaneously; it can only alternate between them with reduced quality on each.</p>
        
        <p><span class="para-num">C</span> Researchers have found that the costs of task-switching are far higher than most workers realize. Each switch typically requires about twenty minutes for the mind to refocus completely on the new task. When workers frequently switch between activities, they may spend most of their day in a state of partial attention to everything and full attention to nothing. Studies of workers with high email loads have found that those who check email constantly may produce roughly 40 percent less work than those who limit email checks to a few times per day. The myth of multitasking productivity, in other words, may be actively undermining productivity.</p>
        
        <p><span class="para-num">D</span> Another well-established finding concerns the relationship between hours worked and productive output. The intuitive assumption — that more hours produce more work — proves incorrect beyond a certain threshold. Research consistently shows that productivity per hour declines significantly after about 50 hours of work per week, and total weekly output may actually decrease as hours increase beyond 55. The exhausted worker not only produces less but also produces work of lower quality and creates errors that require correction. Counterintuitively, organisations that have experimented with shorter work weeks — particularly the four-day week — have often found that productivity remained stable or even increased.</p>
        
        <p><span class="para-num">E</span> The psychologist Mihaly Csikszentmihalyi\'s research on the experience of "flow" has profoundly influenced productivity thinking. Flow describes the state of complete absorption in a challenging but achievable task — the feeling that athletes call being "in the zone" and that creative workers often report when fully engaged in their projects. Productive workers tend to experience flow states regularly. These states are characterised by intense focus, loss of time awareness, and high-quality output. Workplaces that enable flow states tend to produce better results than those that constantly interrupt workers with meetings and communications.</p>
        
        <p><span class="para-num">F</span> Sleep, often viewed as an unproductive activity that takes time from work, turns out to be one of the most important contributors to productive work. Studies of sleep-deprived workers consistently show declining performance on cognitive tasks, decision-making, and creative work. The Harvard Business Review estimated that sleep deprivation costs the American economy roughly 411 billion dollars annually through reduced productivity and increased errors. Workers who consistently sleep less than six hours per night perform similarly to those legally too drunk to drive on tests of cognitive function — yet many workplaces continue to treat extensive sleep deprivation as a sign of dedication.</p>
        
        <p><span class="para-num">G</span> The implications of productivity research for individuals and organisations are clear, even if rarely fully implemented. Workers and managers should focus on quality of attention rather than quantity of hours, protect time for deep focused work, build genuine rest into the workday, and prioritise sleep over additional work hours. Yet these recommendations contradict workplace cultures that celebrate long hours and constant availability. The gap between what research shows and how most workplaces operate may represent the largest single opportunity for improving productivity in modern economies — but closing this gap requires changes in workplace norms that have proven remarkably resistant.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Ít chủ đề nhận được nhiều sự chú ý trong đời sống nghề nghiệp hiện đại hơn năng suất. Tâm lý học hiện đại đã tiếp cận câu hỏi này một cách khoa học, tạo ra các phát hiện thường mâu thuẫn với lời khuyên năng suất phổ biến.</p>
        <p><strong>Đoạn B:</strong> Huyền thoại bền vững nhất về năng suất liên quan đến đa nhiệm. Nghiên cứu tâm lý đã liên tục chứng minh rằng những gì mọi người gọi là đa nhiệm thực ra là chuyển nhiệm nhanh, với chi phí nhận thức đáng kể.</p>
        <p><strong>Đoạn C:</strong> Mỗi lần chuyển đổi thường yêu cầu khoảng 20 phút để tâm trí tập trung hoàn toàn. Nghiên cứu cho thấy người kiểm tra email liên tục có thể sản xuất ít hơn khoảng 40% so với người giới hạn kiểm tra vài lần mỗi ngày.</p>
        <p><strong>Đoạn D:</strong> Phát hiện đã thiết lập tốt khác liên quan đến mối quan hệ giữa giờ làm việc và năng suất. Năng suất mỗi giờ giảm đáng kể sau khoảng 50 giờ làm việc mỗi tuần. Các tổ chức thử nghiệm tuần làm việc 4 ngày thường thấy năng suất ổn định hoặc tăng.</p>
        <p><strong>Đoạn E:</strong> Nghiên cứu của Mihaly Csikszentmihalyi về trải nghiệm "flow" đã ảnh hưởng sâu sắc đến tư duy năng suất. Flow mô tả trạng thái hấp thụ hoàn toàn vào nhiệm vụ thách thức nhưng khả thi.</p>
        <p><strong>Đoạn F:</strong> Giấc ngủ, thường được xem như hoạt động không năng suất, hóa ra là một trong những yếu tố đóng góp quan trọng nhất cho công việc năng suất. Harvard Business Review ước tính thiếu ngủ tốn 411 tỷ đô la hàng năm cho nền kinh tế Mỹ.</p>
        <p><strong>Đoạn G:</strong> Hàm ý của nghiên cứu năng suất là rõ ràng. Tập trung vào chất lượng chú ý hơn số lượng giờ, bảo vệ thời gian cho công việc tập trung sâu, xây dựng nghỉ ngơi thực sự, ưu tiên giấc ngủ. Tuy nhiên các khuyến nghị này mâu thuẫn với văn hóa nơi làm việc.</p>`
      }
    ],
    
    questions: [
      // ========== PASSAGE 1 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 1–5',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'Bees are responsible for pollinating about a third of human food.', answer: 'TRUE', explain: 'Đoạn A: "Bees pollinate approximately one-third of the food we eat".' },
            { q: 'Colony Collapse Disorder usually leaves many dead bees near the hive.', answer: 'FALSE', explain: 'Đoạn B: "dead bodies are rarely found near the colony".' },
            { q: 'Neonicotinoids are only harmful to bees at high doses.', answer: 'FALSE', explain: 'Đoạn C: "even at sub-lethal doses, neonicotinoids impair bees\' ability".' },
            { q: 'Asian honeybees have natural defenses against the Varroa mite.', answer: 'TRUE', explain: 'Đoạn D: "Asian honeybees, which have evolved defenses against it".' },
            { q: 'Bumblebee populations in the Rocky Mountains have remained stable.', answer: 'FALSE', explain: 'Đoạn F: "declining bumblebee numbers correlating with rising summer temperatures".' }
          ]
        },
        {
          group: 'Questions 6–9',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, the cause of bee decline is:', options: ['A. Primarily due to neonicotinoid pesticides', 'B. A combination of multiple interacting factors', 'C. Mostly attributable to climate change', 'D. Still completely unknown to scientists'], answer: 'B', explain: 'Đoạn C: "no single cause explains the crisis; instead, multiple stressors interact".' },
            { q: 'The Varroa mite originally affected:', options: ['A. European honeybees', 'B. American bumblebees', 'C. Asian honeybees', 'D. All bee species equally'], answer: 'C', explain: 'Đoạn D: "Originally a parasite of Asian honeybees".' },
            { q: 'Modern monoculture farming affects bees by:', options: ['A. Killing them with pesticide residues year-round', 'B. Providing food only during specific bloom periods', 'C. Reducing the number of bee species', 'D. Spreading parasites between hives'], answer: 'B', explain: 'Đoạn E: "provide bees with food during bloom but leave them starving for the rest of the year".' },
            { q: 'The European Union\'s 2018 action against neonicotinoids:', options: ['A. Banned all uses of the chemicals', 'B. Only banned outdoor use of three specific types', 'C. Required mandatory labeling for farmers', 'D. Imposed heavy fines on manufacturers'], answer: 'B', explain: 'Đoạn G: "banned outdoor use of three major neonicotinoids in 2018".' }
          ]
        },
        {
          group: 'Questions 10–13',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'CCD first attracted widespread attention in the year __________.', answer: '2006', explain: 'Đoạn B: "first attracted widespread attention in 2006".' },
            { q: 'Neonicotinoids were introduced in the __________.', answer: '1990s', explain: 'Đoạn C: "a class of pesticides introduced in the 1990s".' },
            { q: 'In the UK, 97 percent of __________ have disappeared since the 1930s.', answer: 'flower-rich grasslands', explain: 'Đoạn E: "97 percent of flower-rich grasslands have disappeared".' },
            { q: 'Oslo has created __________ to support pollinators in the city.', answer: 'bee highways', explain: 'Đoạn G: "cities such as Oslo have created bee highways".' }
          ]
        }
      ],
      
      // ========== PASSAGE 2 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 14–20',
          type: 'matching-headings',
          instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list below.',
          headings: [
            { id: 'i', text: 'How designs are physically created' },
            { id: 'ii', text: 'Mathematical sophistication in traditional art' },
            { id: 'iii', text: 'A unique tradition receiving international recognition' },
            { id: 'iv', text: 'Modern threats to an ancient practice' },
            { id: 'v', text: 'The cultural meanings encoded in designs' },
            { id: 'vi', text: 'Recent attempts at revival and preservation' },
            { id: 'vii', text: 'Important early documentation by outsiders' },
            { id: 'viii', text: 'Geographical features of Vanuatu' },
            { id: 'ix', text: 'Comparing different Pacific art traditions' }
          ],
          items: [
            { q: 'A', answer: 'iii', explain: 'Đoạn A giới thiệu truyền thống độc đáo và được UNESCO công nhận.' },
            { q: 'B', answer: 'i', explain: 'Đoạn B mô tả cách các thiết kế được tạo ra về mặt vật lý - lưới hướng dẫn, đường liên tục.' },
            { q: 'C', answer: 'v', explain: 'Đoạn C nói về ý nghĩa văn hóa được mã hóa trong các thiết kế.' },
            { q: 'D', answer: 'ii', explain: 'Đoạn D về sự tinh vi toán học - đồ thị Eulerian, hình học.' },
            { q: 'E', answer: 'vii', explain: 'Đoạn E về tài liệu hóa ban đầu của Layard và Guiart - các nhà nghiên cứu nước ngoài.' },
            { q: 'F', answer: 'iv', explain: 'Đoạn F về các mối đe dọa hiện đại với truyền thống cổ xưa.' },
            { q: 'G', answer: 'vi', explain: 'Đoạn G về các nỗ lực phục hồi và bảo tồn gần đây.' }
          ]
        },
        {
          group: 'Questions 21–23',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'European mathematicians formalised the theory of Eulerian paths before the Vanuatu sand artists did.', answer: 'FALSE', explain: 'Đoạn D: "European mathematicians did not formalise the theory of such paths until the eighteenth century, the people of Vanuatu had been producing complex examples of them for centuries".' },
            { q: 'John Layard recorded some of the oldest sand drawings still known today.', answer: 'NOT GIVEN', explain: 'Đoạn E nói Layard tài liệu hóa hàng trăm thiết kế nhưng không nói về tuổi của các thiết kế đó.' },
            { q: 'All sand drawings are openly shared with anyone who wishes to see them.', answer: 'FALSE', explain: 'Đoạn C: "some are restricted to particular initiates and not shown to outsiders".' }
          ]
        },
        {
          group: 'Questions 24–26',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'UNESCO recognised Vanuatu sand drawings as part of intangible cultural heritage in __________.', answer: '2003', explain: 'Đoạn A: "In 2003, UNESCO recognised these drawings".' },
            { q: 'The sand drawings can be viewed as a visual __________ of cultural knowledge.', answer: 'library', explain: 'Đoạn C: "a visual library of cultural knowledge".' },
            { q: 'Mathematicians have shown that the designs represent sophisticated examples of __________ graphs.', answer: 'Eulerian', explain: 'Đoạn D: "what mathematicians call Eulerian graphs".' }
          ]
        }
      ],
      
      // ========== PASSAGE 3 QUESTIONS (14 questions) ==========
      [
        {
          group: 'Questions 27–32',
          type: 'matching-information',
          instruction: 'Reading Passage 3 has seven paragraphs, A-G. Which paragraph contains the following information?',
          paragraphs: ['A','B','C','D','E','F','G'],
          items: [
            { q: 'A reference to the economic cost of inadequate rest.', answer: 'F', explain: 'Đoạn F: "sleep deprivation costs the American economy roughly 411 billion dollars annually".' },
            { q: 'A specific percentage by which constant interruption reduces output.', answer: 'C', explain: 'Đoạn C: "may produce roughly 40 percent less work".' },
            { q: 'A description of a state of complete absorption in a task.', answer: 'E', explain: 'Đoạn E: "Flow describes the state of complete absorption in a challenging but achievable task".' },
            { q: 'Examples of organisations that experimented with reducing work hours.', answer: 'D', explain: 'Đoạn D: "organisations that have experimented with shorter work weeks — particularly the four-day week".' },
            { q: 'A discussion of why research findings rarely reach workplaces.', answer: 'G', explain: 'Đoạn G: "these recommendations contradict workplace cultures that celebrate long hours and constant availability".' },
            { q: 'An explanation that what is called "multitasking" is really task-switching.', answer: 'B', explain: 'Đoạn B: "what people call multitasking is actually rapid task-switching".' }
          ]
        },
        {
          group: 'Questions 33–36',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, brain activity studies have shown that:', options: ['A. The brain handles multiple complex tasks at once with no cost', 'B. Multitasking only has costs for certain personality types', 'C. The brain cannot truly process multiple complex tasks simultaneously', 'D. Younger workers can multitask better than older ones'], answer: 'C', explain: 'Đoạn B: "the brain cannot truly process multiple complex tasks simultaneously".' },
            { q: 'According to research cited in the passage, refocusing after a task switch:', options: ['A. Takes about twenty minutes', 'B. Happens almost instantly', 'C. Is impossible for most workers', 'D. Depends entirely on motivation'], answer: 'A', explain: 'Đoạn C: "Each switch typically requires about twenty minutes for the mind to refocus completely".' },
            { q: 'Workers sleeping less than six hours per night perform similarly to:', options: ['A. People with high blood pressure', 'B. Children with attention problems', 'C. Those legally too drunk to drive', 'D. Elderly people on memory tests'], answer: 'C', explain: 'Đoạn F: "perform similarly to those legally too drunk to drive on tests of cognitive function".' },
            { q: 'The author suggests that the gap between productivity research and workplace practice:', options: ['A. Has been completely closed in recent years', 'B. Is too complex to be addressed', 'C. Represents an opportunity that has proven hard to act on', 'D. Cannot be measured accurately'], answer: 'C', explain: 'Đoạn G: "may represent the largest single opportunity for improving productivity... but closing this gap requires changes... that have proven remarkably resistant".' }
          ]
        },
        {
          group: 'Questions 37–40',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'Productivity per hour declines significantly after about __________ hours of work per week.', answer: '50', explain: 'Đoạn D: "productivity per hour declines significantly after about 50 hours of work per week".' },
            { q: 'Flow states are characterised by intense focus, loss of time awareness, and high-quality __________.', answer: 'output', explain: 'Đoạn E: "intense focus, loss of time awareness, and high-quality output".' },
            { q: 'Sleep is often wrongly viewed as an __________ activity that takes time from work.', answer: 'unproductive', explain: 'Đoạn F: "Sleep, often viewed as an unproductive activity".' },
            { q: 'Workers should focus on quality of attention rather than quantity of __________.', answer: 'hours', explain: 'Đoạn G: "focus on quality of attention rather than quantity of hours".' }
          ]
        }
      ]
    ]
  },

  // ==================== CAMBRIDGE 17 - TEST 1 ====================
  'cam17-t1': {
    title: 'The Future of Work',
    topic: 'Technology · Economics',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Future of Work: Automation and the Human Workforce',
      content: `<p><span class="para-num">A</span> The relationship between technology and employment has long fascinated economists. From the steam engines that displaced agricultural laborers in the eighteenth century to the assembly lines that transformed manufacturing, each wave of innovation has brought both anxiety about job loss and, eventually, new types of employment. Today, advances in artificial intelligence and robotics are sparking similar debates with renewed intensity. The question is no longer whether technology will reshape work, but how quickly and how profoundly.</p>
      
      <p><span class="para-num">B</span> A landmark 2013 study by economists at Oxford University estimated that 47 percent of American jobs were at high risk of automation within twenty years. The findings sent shockwaves through policy circles and ignited public debate. However, more recent analyses have challenged these estimates as overly pessimistic. The OECD, for instance, has suggested that only about 14 percent of jobs are at high risk of full automation, though many more will see significant changes in their tasks. The discrepancy reflects how difficult it is to predict which human capabilities machines will <span class="vocab" data-word="master" data-def="thành thạo, làm chủ">master</span> next.</p>
      
      <p><span class="para-num">C</span> What is clear is that automation does not affect all jobs equally. Routine, predictable tasks — whether physical or cognitive — are most vulnerable. Manufacturing roles involving repetitive assembly have been declining for decades. More recently, white-collar work involving data processing, simple legal research, and customer service has begun to feel the impact of AI. Conversely, jobs requiring complex problem-solving, creativity, social intelligence, or physical dexterity in unpredictable environments remain difficult to automate. A nurse comforting a frightened patient, a plumber working in a cramped basement, or a marketing strategist crafting a campaign all draw on capabilities that machines struggle to <span class="vocab" data-word="replicate" data-def="sao chép, tái tạo">replicate</span>.</p>
      
      <p><span class="para-num">D</span> History offers some grounds for cautious optimism. Despite repeated predictions of mass unemployment, total employment in industrialized nations has generally continued to grow over the long term. New technologies create new industries — the automobile gave rise to mechanics, road builders, and tourism; the internet enabled web designers, social media managers, and online retailers. Yet the transition period can be painful. Workers displaced by technology often lack the skills required for emerging roles, and the new jobs may appear in different regions or industries than the old ones.</p>
      
      <p><span class="para-num">E</span> The geographic dimension of this shift deserves particular attention. Manufacturing decline has hit specific communities — towns built around single factories, regions specialized in particular industries — with devastating force. The economic recovery that follows technological change tends to be concentrated in cities with strong education systems and diverse economies, leaving formerly prosperous industrial areas behind. This <span class="vocab" data-word="uneven" data-def="không đồng đều">uneven</span> distribution of gains and losses helps explain the political tensions surrounding globalization and automation in many democracies.</p>
      
      <p><span class="para-num">F</span> Education systems face significant pressure to adapt. The traditional model — learn a trade or profession in youth and practice it for decades — sits uneasily with a labor market where skills become obsolete more rapidly. Lifelong learning, once a fashionable phrase, is becoming a practical necessity. Some countries are experimenting with publicly funded retraining programs, while others rely more heavily on private initiatives. Singapore\'s SkillsFuture program, which provides every citizen over 25 with credits to spend on approved courses, has attracted international attention as a possible model.</p>
      
      <p><span class="para-num">G</span> Perhaps the most contested question concerns income distribution. Even if total employment remains healthy, automation may shift bargaining power decisively toward those who own technology and away from those who provide labor. Without policy intervention, this could lead to greater inequality and political instability. Proposals being seriously debated include universal basic income, expanded earned income tax credits, and policies giving workers ownership stakes in automated workplaces. The choices societies make in the coming decades will determine whether technological progress benefits the many or merely the few.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Mối quan hệ giữa công nghệ và việc làm đã làm các nhà kinh tế học say mê từ lâu. Mỗi làn sóng đổi mới đều mang đến lo lắng về mất việc và sau đó là các loại việc làm mới. Ngày nay, AI và robot đang thổi bùng lại các cuộc tranh luận tương tự.</p>
      
      <p><strong>Đoạn B:</strong> Nghiên cứu năm 2013 của Đại học Oxford ước tính 47% việc làm Mỹ có nguy cơ tự động hóa trong 20 năm. OECD ước tính chỉ 14% có nguy cơ tự động hóa hoàn toàn. Sự khác biệt phản ánh khó khăn trong dự đoán khả năng nào của con người sẽ bị máy móc thay thế tiếp theo.</p>
      
      <p><strong>Đoạn C:</strong> Tự động hóa không ảnh hưởng đều đến tất cả công việc. Nhiệm vụ thường ngày, lặp đi lặp lại dễ bị thay thế nhất. Công việc đòi hỏi giải quyết vấn đề phức tạp, sáng tạo, trí thông minh xã hội, hoặc khéo léo trong môi trường không đoán trước được vẫn khó tự động hóa.</p>
      
      <p><strong>Đoạn D:</strong> Lịch sử cho thấy lý do lạc quan thận trọng. Công nghệ mới tạo ngành nghề mới. Tuy nhiên, giai đoạn chuyển tiếp có thể đau đớn - người lao động thường thiếu kỹ năng cần thiết cho công việc mới nổi.</p>
      
      <p><strong>Đoạn E:</strong> Khía cạnh địa lý của sự dịch chuyển đáng chú ý. Sự suy thoái sản xuất tấn công các cộng đồng cụ thể. Hồi phục kinh tế tập trung ở thành phố có hệ thống giáo dục mạnh, bỏ lại các vùng công nghiệp trước đây thịnh vượng.</p>
      
      <p><strong>Đoạn F:</strong> Hệ thống giáo dục đối mặt với áp lực thích nghi. Học suốt đời đang trở thành nhu cầu thực tế. Chương trình SkillsFuture của Singapore cung cấp tín dụng cho mọi công dân trên 25 tuổi để học khóa học được duyệt.</p>
      
      <p><strong>Đoạn G:</strong> Câu hỏi gây tranh cãi nhất liên quan đến phân phối thu nhập. Đề xuất bao gồm thu nhập cơ bản phổ quát. Lựa chọn xã hội đưa ra sẽ quyết định liệu tiến bộ công nghệ phục vụ số đông hay chỉ thiểu số.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'The 2013 Oxford study and the OECD analysis reached identical conclusions.', answer: 'FALSE', explain: 'Đoạn B: Oxford ước tính 47%, OECD 14% - khác biệt rõ rệt.' },
          { q: 'Jobs requiring physical work in unpredictable settings are easily automated.', answer: 'FALSE', explain: 'Đoạn C: "physical dexterity in unpredictable environments remain difficult to automate".' },
          { q: 'New technologies have historically created entirely new industries.', answer: 'TRUE', explain: 'Đoạn D: "New technologies create new industries — the automobile gave rise to mechanics...".' },
          { q: 'The Oxford study has been widely accepted by all economists.', answer: 'FALSE', explain: 'Đoạn B: "more recent analyses have challenged these estimates".' },
          { q: 'Singapore\'s SkillsFuture program is being copied by several other countries.', answer: 'NOT GIVEN', explain: 'Đoạn F nói chương trình "thu hút sự chú ý quốc tế như mô hình khả thi" nhưng không nói có nước nào sao chép.' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, which type of job is MOST at risk from automation?', options: ['A. Complex creative work', 'B. Routine, predictable tasks', 'C. Jobs requiring social skills', 'D. Manual work in changing environments'], answer: 'B', explain: 'Đoạn C: "Routine, predictable tasks... are most vulnerable".' },
          { q: 'The geographic impact of automation is described as:', options: ['A. Evenly spread across all regions', 'B. Concentrated mainly in rural areas', 'C. Uneven, with industrial towns most affected', 'D. Limited to developing countries'], answer: 'C', explain: 'Đoạn E: "Manufacturing decline has hit specific communities... industrial areas behind".' },
          { q: 'The "traditional model" of education refers to:', options: ['A. Learning a profession in youth and practicing it for decades', 'B. Receiving education only in public schools', 'C. Studying multiple subjects throughout life', 'D. Combining academic and vocational training'], answer: 'A', explain: 'Đoạn F: "learn a trade or profession in youth and practice it for decades".' },
          { q: 'The author suggests that without policy action, automation could lead to:', options: ['A. A return to manufacturing jobs', 'B. Reduced demand for higher education', 'C. Greater inequality and political instability', 'D. Increased global cooperation'], answer: 'C', explain: 'Đoạn G: "could lead to greater inequality and political instability".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'The Oxford study estimated that __________ percent of American jobs could be automated.', answer: '47', explain: 'Đoạn B: "47 percent of American jobs were at high risk".' },
          { q: 'Singapore\'s program provides citizens with __________ to spend on approved courses.', answer: 'credits', explain: 'Đoạn F: "provides every citizen over 25 with credits".' },
          { q: 'One proposal to address inequality from automation is universal __________ income.', answer: 'basic', explain: 'Đoạn G: "Proposals being seriously debated include universal basic income".' },
          { q: 'The shift from old to new jobs is described as a difficult __________ period.', answer: 'transition', explain: 'Đoạn D: "the transition period can be painful".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 16 - TEST 1 ====================
  'cam16-t1': {
    title: 'The Art of Sleep',
    topic: 'Health · Psychology',
    difficulty: 'Easy',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Science and Art of Sleep',
      content: `<p><span class="para-num">A</span> Humans spend roughly one-third of their lives asleep, yet the purpose of this <span class="vocab" data-word="seemingly" data-def="có vẻ như, dường như">seemingly</span> wasteful state has long puzzled scientists. Why would evolution favor creatures that lie helpless for hours each day, vulnerable to predators and unable to feed or reproduce? The answer, emerging from decades of research, is that sleep is not wasted time at all but a period of intense biological activity essential for survival.</p>
      
      <p><span class="para-num">B</span> During sleep, the human brain cycles through several distinct stages, each characterized by different patterns of electrical activity. The cycle begins with light sleep, progresses through deeper stages of slow-wave sleep, and culminates in rapid eye movement (REM) sleep, when most vivid dreaming occurs. A complete cycle lasts roughly 90 minutes, and a typical night includes four to six cycles. Crucially, the proportions of different sleep stages shift across the night, with slow-wave sleep dominating early and REM sleep increasing toward morning.</p>
      
      <p><span class="para-num">C</span> Memory consolidation appears to be one of sleep\'s primary functions. Studies have shown that information learned during the day is reactivated and strengthened during sleep, particularly during slow-wave stages. Participants who sleep after learning a new task perform significantly better the next day than those who remain awake for the same period. This finding has practical implications for students and professionals: pulling an all-nighter before an exam may actually impair the very memory the studying was meant to build.</p>
      
      <p><span class="para-num">D</span> Sleep also plays a critical role in physical health. During deep sleep, the body releases growth hormone, repairs tissues, and strengthens the immune system. Chronic sleep deprivation has been linked to a wide range of health problems, including <span class="vocab" data-word="obesity" data-def="bệnh béo phì">obesity</span>, diabetes, cardiovascular disease, and weakened immunity. A landmark study found that people who consistently slept fewer than six hours per night were significantly more likely to catch colds than those who slept seven hours or more.</p>
      
      <p><span class="para-num">E</span> Recently, researchers have identified another remarkable function of sleep: brain "cleaning." During wakeful hours, the brain accumulates metabolic waste products, including proteins associated with Alzheimer\'s disease. In 2013, scientists at the University of Rochester discovered that during sleep, the space between brain cells expands, allowing cerebrospinal fluid to flush out these waste products much more efficiently than during waking hours. This finding suggests that adequate sleep may be crucial for preventing neurodegenerative diseases later in life.</p>
      
      <p><span class="para-num">F</span> Despite mounting evidence of sleep\'s importance, modern societies appear to be in the grip of a sleep deprivation epidemic. The average adult in industrialized countries now sleeps about an hour less per night than was typical fifty years ago. Artificial lighting, screen time before bed, demanding work schedules, and the cultural <span class="vocab" data-word="glorification" data-def="sự tôn vinh, ca tụng">glorification</span> of busyness all contribute to this trend. Many people wear chronic sleep loss as a badge of honor, unaware that they are accumulating what researchers call "sleep debt" — a deficit that cannot simply be paid off by sleeping in on weekends.</p>
      
      <p><span class="para-num">G</span> Improving sleep, fortunately, is largely within our control. Sleep scientists recommend maintaining consistent sleep and wake times, including on weekends; keeping bedrooms cool, dark, and quiet; avoiding caffeine after midday; and limiting exposure to bright screens in the evening. While individual sleep needs vary, most adults function best with seven to nine hours per night. Treating sleep as a luxury rather than a necessity, current research suggests, is a mistake we cannot afford to continue making.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Con người dành khoảng 1/3 cuộc đời để ngủ. Tại sao tiến hóa lại ưu ái những sinh vật nằm bất lực hàng giờ? Câu trả lời: ngủ không phải lãng phí thời gian mà là giai đoạn hoạt động sinh học cường độ cao cần thiết cho sự sống còn.</p>
      
      <p><strong>Đoạn B:</strong> Trong giấc ngủ, não trải qua các giai đoạn khác nhau. Chu kỳ bắt đầu từ ngủ nông, tiến tới giấc ngủ sóng chậm sâu, và đỉnh cao là giấc ngủ REM (chuyển động mắt nhanh) - khi có nhiều giấc mơ sống động nhất. Một chu kỳ kéo dài 90 phút.</p>
      
      <p><strong>Đoạn C:</strong> Củng cố trí nhớ là một trong những chức năng chính của giấc ngủ. Người ngủ sau khi học hành kém hơn đáng kể so với người thức trong cùng thời gian. Điều này có ý nghĩa thực tiễn: thức suốt đêm trước kỳ thi có thể làm suy giảm trí nhớ.</p>
      
      <p><strong>Đoạn D:</strong> Giấc ngủ cũng đóng vai trò quan trọng đối với sức khỏe thể chất. Trong giấc ngủ sâu, cơ thể tiết hormone tăng trưởng, sửa chữa mô, tăng cường miễn dịch. Người ngủ dưới 6 giờ/đêm dễ bị cảm cúm hơn người ngủ 7 giờ trở lên.</p>
      
      <p><strong>Đoạn E:</strong> Gần đây, các nhà nghiên cứu xác định chức năng "dọn dẹp não". Trong giấc ngủ, không gian giữa tế bào não mở rộng, cho phép dịch não tủy rửa sạch chất thải - bao gồm protein liên quan đến Alzheimer.</p>
      
      <p><strong>Đoạn F:</strong> Bất chấp bằng chứng, xã hội hiện đại đang trong khủng hoảng thiếu ngủ. Người lớn ở các nước công nghiệp hiện ngủ ít hơn khoảng 1 giờ so với 50 năm trước. Nhiều người tự hào về việc thiếu ngủ mạn tính.</p>
      
      <p><strong>Đoạn G:</strong> Cải thiện giấc ngủ phần lớn nằm trong tầm kiểm soát của chúng ta. Các nhà khoa học khuyến nghị duy trì giờ ngủ và thức nhất quán, phòng ngủ mát mẻ, tránh caffeine sau trưa, hạn chế màn hình buổi tối. Hầu hết người lớn cần 7-9 giờ/đêm.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–4',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Sleep is an inactive period when little happens in the body.', answer: 'FALSE', explain: 'Đoạn A: sleep là "period of intense biological activity" - hoạt động sinh học cường độ cao.' },
          { q: 'Vivid dreams mostly occur during REM sleep.', answer: 'TRUE', explain: 'Đoạn B: "REM sleep, when most vivid dreaming occurs".' },
          { q: 'Students who stay awake all night before exams generally do better.', answer: 'FALSE', explain: 'Đoạn C: "pulling an all-nighter before an exam may actually impair the very memory".' },
          { q: 'The University of Rochester study was conducted on human subjects.', answer: 'NOT GIVEN', explain: 'Đoạn E nói có phát hiện năm 2013 nhưng không nêu đối tượng là người hay động vật.' }
        ]
      },
      {
        group: 'Questions 5–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'A complete sleep cycle lasts approximately:', options: ['A. 30 minutes', 'B. 60 minutes', 'C. 90 minutes', 'D. 120 minutes'], answer: 'C', explain: 'Đoạn B: "A complete cycle lasts roughly 90 minutes".' },
          { q: 'According to the passage, REM sleep:', options: ['A. Dominates the early part of the night', 'B. Increases in proportion toward morning', 'C. Occurs only in young children', 'D. Is the deepest stage of sleep'], answer: 'B', explain: 'Đoạn B: "REM sleep increasing toward morning".' },
          { q: 'The University of Rochester study found that during sleep:', options: ['A. The brain produces more waste products', 'B. Memory deteriorates rapidly', 'C. Spaces between brain cells expand', 'D. Cerebrospinal fluid stops flowing'], answer: 'C', explain: 'Đoạn E: "the space between brain cells expands".' },
          { q: 'The author describes "sleep debt" as:', options: ['A. A problem that can be solved by weekend rest', 'B. A deficit that cannot be easily repaid', 'C. A condition limited to shift workers', 'D. A myth not supported by science'], answer: 'B', explain: 'Đoạn F: "sleep debt — a deficit that cannot simply be paid off".' },
          { q: 'The passage suggests that sleep should be regarded as:', options: ['A. A luxury for those who can afford it', 'B. A biological necessity', 'C. An optional activity for adults', 'D. A sign of laziness'], answer: 'B', explain: 'Đoạn G: "Treating sleep as a luxury rather than a necessity... is a mistake".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'During deep sleep, the body releases __________ hormone.', answer: 'growth', explain: 'Đoạn D: "the body releases growth hormone".' },
          { q: 'Waste products linked to __________ disease accumulate during waking hours.', answer: 'Alzheimer\'s', explain: 'Đoạn E: "proteins associated with Alzheimer\'s disease".' },
          { q: 'Adults in industrialized countries now sleep about __________ less per night than 50 years ago.', answer: 'an hour', explain: 'Đoạn F: "about an hour less per night".' },
          { q: 'Most adults function best with __________ hours of sleep per night.', answer: 'seven to nine', explain: 'Đoạn G: "most adults function best with seven to nine hours".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 15 - TEST 1 ====================
  'cam15-t1': {
    title: 'Nubian Wall Paintings',
    topic: 'Art History · Archaeology',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'Nubian Wall Paintings: Rediscovering a Lost Art',
      content: `<p><span class="para-num">A</span> Beneath the sands of modern Sudan lies one of the most remarkable yet underappreciated artistic traditions of the medieval world. The wall paintings of Nubia, created between the seventh and fourteenth centuries CE, represent a unique fusion of African, Byzantine, and Coptic Christian influences. For centuries, these masterpieces remained hidden in ruined churches and royal residences, known only to local communities. It was not until the twentieth century that systematic archaeological investigation began to reveal their true significance.</p>
      
      <p><span class="para-num">B</span> The kingdom of Nubia, stretching along the Nile south of Egypt, converted to Christianity in the sixth century. Unlike their northern neighbors, the Nubians developed a distinctive artistic style that combined sophisticated theological imagery with strikingly local features. Saints and biblical figures were depicted with dark skin and African physical characteristics, set against backgrounds rich in geometric patterns. This visual language affirmed both Christian identity and African heritage simultaneously.</p>
      
      <p><span class="para-num">C</span> The most dramatic discoveries came in the 1960s during what became known as the Nubian Salvage Campaign. The construction of the Aswan High Dam in Egypt threatened to flood vast areas of historic Nubia, prompting an unprecedented international rescue effort coordinated by UNESCO. Archaeological teams from over twenty countries raced against rising waters to document, excavate, and in some cases physically relocate ancient monuments. At the site of Faras, a Polish team led by Kazimierz Michałowski uncovered the remains of an entire cathedral whose walls were covered with magnificent paintings spanning seven centuries.</p>
      
      <p><span class="para-num">D</span> The Faras paintings revealed an artistic tradition of extraordinary sophistication. Bishops, kings, and protective angels stood in formal poses, their robes decorated with intricate jewel-like patterns. Many figures held inscriptions identifying not only their subjects but also the donors who commissioned the works. These inscriptions, written in Greek, Coptic, and Old Nubian, have provided historians with invaluable information about the political, religious, and social structures of medieval Nubia. Some paintings depict identifiable historical figures whose existence had previously been known only through scattered written sources.</p>
      
      <p><span class="para-num">E</span> Conservation of the rescued paintings presented enormous challenges. The frescoes had been painted on layers of mud plaster applied to sandstone walls — a fragile combination ill-suited to relocation. Polish conservators developed innovative techniques, including the careful application of fabric supports and the use of specialized adhesives to stabilize the painted surfaces before detachment. The most important paintings were eventually transferred to museums in Khartoum and Warsaw, where they continue to be studied today. The remainder were lost beneath the waters of Lake Nasser when the dam was completed in 1971.</p>
      
      <p><span class="para-num">F</span> Recent scholarship has fundamentally reshaped understanding of Nubian art. Earlier scholars tended to view it as a provincial offshoot of Byzantine tradition, but modern researchers emphasize its remarkable independence and creativity. Nubian artists drew on multiple sources but synthesized them into something genuinely new. The use of bold, flat color planes, the rejection of perspective in favor of symbolic spatial arrangements, and the integration of geometric ornament all reflect a distinctive aesthetic that influenced art across northeast Africa.</p>
      
      <p><span class="para-num">G</span> Today, Nubian wall paintings face new threats. Climate change, political instability, and looting have endangered remaining sites in Sudan. International efforts are underway to document surviving paintings using advanced imaging techniques before further deterioration occurs. Digital archives are being created that will allow scholars and the public to study these works regardless of their physical condition. As researchers continue to uncover and interpret this art, they restore not only individual paintings but also a vital chapter of African and Christian history that was almost erased from memory.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Bên dưới cát của Sudan hiện đại là một trong những truyền thống nghệ thuật đáng chú ý nhưng ít được trân trọng nhất của thế giới trung cổ. Tranh tường Nubia, được tạo ra từ thế kỷ 7 đến 14 SCN, đại diện cho sự kết hợp độc đáo giữa ảnh hưởng châu Phi, Byzantine và Cơ đốc giáo Coptic.</p>
      
      <p><strong>Đoạn B:</strong> Vương quốc Nubia chuyển sang Cơ đốc giáo vào thế kỷ 6. Khác với láng giềng phía bắc, người Nubia phát triển phong cách nghệ thuật riêng biệt kết hợp hình ảnh thần học tinh vi với đặc điểm địa phương nổi bật. Các vị thánh và nhân vật Kinh Thánh được khắc họa với da đen và đặc điểm thể chất châu Phi.</p>
      
      <p><strong>Đoạn C:</strong> Những khám phá lớn nhất đến vào thập niên 1960 trong Chiến dịch Cứu hộ Nubia. Việc xây dựng đập Aswan High đe dọa nhấn chìm các khu vực lịch sử. UNESCO điều phối nỗ lực cứu hộ quốc tế chưa từng có. Tại Faras, đội Ba Lan dẫn đầu bởi Kazimierz Michałowski phát hiện một nhà thờ với những bức tranh kéo dài 7 thế kỷ.</p>
      
      <p><strong>Đoạn D:</strong> Tranh Faras tiết lộ truyền thống nghệ thuật cực kỳ tinh tế. Các giám mục, vua, thiên thần bảo vệ đứng trong tư thế trang trọng. Nhiều hình có chữ khắc xác định cả chủ thể và người tài trợ. Chữ khắc viết bằng Hy Lạp, Coptic và Nubia Cổ - cung cấp thông tin vô giá về cấu trúc chính trị, tôn giáo, xã hội Nubia trung cổ.</p>
      
      <p><strong>Đoạn E:</strong> Bảo tồn tranh đã cứu được là thách thức lớn. Các bức fresco được vẽ trên các lớp vữa bùn trên đá sa thạch - sự kết hợp mong manh không phù hợp di chuyển. Các nhà bảo tồn Ba Lan phát triển kỹ thuật mới. Những bức quan trọng nhất được chuyển đến bảo tàng Khartoum và Warsaw.</p>
      
      <p><strong>Đoạn F:</strong> Nghiên cứu gần đây đã định hình lại sự hiểu biết về nghệ thuật Nubia. Học giả trước đây xem nó như nhánh phụ của truyền thống Byzantine, nhưng các nhà nghiên cứu hiện đại nhấn mạnh tính độc lập và sáng tạo đáng kể của nó.</p>
      
      <p><strong>Đoạn G:</strong> Ngày nay, tranh tường Nubia đối mặt với mối đe dọa mới. Biến đổi khí hậu, bất ổn chính trị, cướp bóc đã đe dọa các di tích còn lại ở Sudan. Các nỗ lực quốc tế đang được tiến hành để tài liệu hóa các bức tranh còn sót lại bằng kỹ thuật hình ảnh tiên tiến.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Nubian wall paintings were known to scholars before the twentieth century.', answer: 'FALSE', explain: 'Đoạn A: "remained hidden... known only to local communities. It was not until the twentieth century that systematic archaeological investigation began".' },
          { q: 'Nubian Christian art used local African features in its depictions.', answer: 'TRUE', explain: 'Đoạn B: "Saints and biblical figures were depicted with dark skin and African physical characteristics".' },
          { q: 'The Nubian Salvage Campaign was organized by a single country.', answer: 'FALSE', explain: 'Đoạn C: "international rescue effort coordinated by UNESCO... over twenty countries".' },
          { q: 'Kazimierz Michałowski received international awards for his work at Faras.', answer: 'NOT GIVEN', explain: 'Đoạn C chỉ nói ông dẫn đầu đội Ba Lan, không đề cập đến giải thưởng.' },
          { q: 'Some of the Faras paintings could not be saved before the area was flooded.', answer: 'TRUE', explain: 'Đoạn E: "The remainder were lost beneath the waters of Lake Nasser".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, the inscriptions on Faras paintings:', options: ['A. Were written only in Old Nubian', 'B. Were added centuries after the paintings', 'C. Provide valuable historical information', 'D. Have proven impossible to translate'], answer: 'C', explain: 'Đoạn D: "have provided historians with invaluable information about the political, religious, and social structures".' },
          { q: 'Conservation of the paintings was difficult because:', options: ['A. The original artists used poor materials', 'B. The mud plaster was fragile and hard to move', 'C. Workers lacked sufficient training', 'D. The dam project provided too little time'], answer: 'B', explain: 'Đoạn E: "layers of mud plaster... a fragile combination ill-suited to relocation".' },
          { q: 'Modern scholars view Nubian art as:', options: ['A. An imitation of Byzantine tradition', 'B. Inferior to other medieval art', 'C. A creative synthesis of multiple influences', 'D. Primarily decorative in purpose'], answer: 'C', explain: 'Đoạn F: "modern researchers emphasize its remarkable independence and creativity. Nubian artists drew on multiple sources but synthesized them into something genuinely new".' },
          { q: 'The current threats to Nubian art mentioned in the passage include:', options: ['A. Earthquake damage and humidity', 'B. Tourism and excessive handling', 'C. Climate change, instability, and looting', 'D. Acid rain and air pollution'], answer: 'C', explain: 'Đoạn G: "Climate change, political instability, and looting have endangered remaining sites".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'Nubia converted to Christianity in the __________ century.', answer: 'sixth', explain: 'Đoạn B: "converted to Christianity in the sixth century".' },
          { q: 'The Aswan High Dam was completed in __________.', answer: '1971', explain: 'Đoạn E: "when the dam was completed in 1971".' },
          { q: 'Some Faras paintings were moved to museums in Khartoum and __________.', answer: 'Warsaw', explain: 'Đoạn E: "transferred to museums in Khartoum and Warsaw".' },
          { q: 'Researchers now use advanced __________ techniques to document surviving paintings.', answer: 'imaging', explain: 'Đoạn G: "document surviving paintings using advanced imaging techniques".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 14 - TEST 1 ====================
  'cam14-t1': {
    title: 'The Power of Music',
    topic: 'Psychology · Neuroscience',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Power of Music: How Sound Shapes the Brain',
      content: `<p><span class="para-num">A</span> Music is found in every known human culture, from the elaborate orchestras of European concert halls to the rhythmic chants of Amazonian tribes. This near-universal presence has long puzzled researchers. Why would a behavior with no obvious survival value have evolved so consistently across human societies? In recent decades, neuroscience has begun to illuminate the powerful effects music exerts on the human brain, suggesting that far from being a mere entertainment, music plays fundamental roles in cognition, emotion, and social bonding.</p>
      
      <p><span class="para-num">B</span> Modern brain imaging techniques have revealed that listening to music activates a remarkable range of brain regions. Unlike most activities, which engage primarily one hemisphere, music processing involves both sides of the brain simultaneously. Areas associated with hearing, motor control, emotion, memory, and language all become active. Even passive listening triggers regions involved in movement, which may explain why people instinctively tap their feet or nod their heads when hearing rhythm. This widespread neural engagement helps explain why music has been used so effectively in therapeutic settings.</p>
      
      <p><span class="para-num">C</span> One of the most striking discoveries concerns music\'s relationship with memory. Researchers at the Boston University School of Medicine found that elderly patients with Alzheimer\'s disease who could no longer recognize their own children could still sing songs from their youth with remarkable accuracy. Brain scans suggest that musical memories are stored differently from other types of memory, in regions that remain relatively unaffected even in advanced dementia. This finding has inspired innovative therapeutic programs in which familiar songs are used to reconnect patients with lost memories and emotions.</p>
      
      <p><span class="para-num">D</span> Music also has powerful effects on physical health. Studies have shown that listening to calming music before surgery can reduce anxiety more effectively than standard medication, with none of the side effects. Stroke patients who incorporate music into their rehabilitation often regain motor function faster than those who do not. Even premature babies who are exposed to gentle music in neonatal intensive care units have been shown to gain weight more quickly and experience more stable heart rates. The mechanisms behind these effects are still being investigated, but they likely involve music\'s ability to influence levels of stress hormones and neurotransmitters.</p>
      
      <p><span class="para-num">E</span> The social dimensions of music may be equally important. Anthropologists have long observed that group singing, dancing, and drumming play central roles in religious ceremonies, military training, and community celebrations across cultures. Recent research suggests that synchronized musical activity actually promotes cooperation between participants, increasing trust and willingness to help one another. This effect appears to operate even when participants are strangers, suggesting that music may have evolved partly as a mechanism for building social bonds in groups larger than those held together by direct personal relationships.</p>
      
      <p><span class="para-num">F</span> The educational implications of music research are also significant. Children who receive musical training show enhanced performance not only in obviously related skills like auditory processing but also in mathematics, spatial reasoning, and language development. Brain scans reveal that long-term musical training produces measurable changes in brain structure, with musicians showing greater development in areas controlling fine motor skills, hearing, and integration of information from multiple senses. These findings have led some educators to argue that music education should be considered essential rather than optional in school curricula.</p>
      
      <p><span class="para-num">G</span> Despite these remarkable findings, much about music\'s effect on the brain remains mysterious. Why do certain melodies move us to tears while others leave us indifferent? How can a sequence of sounds evoke memories of long-forgotten events with such vividness? Why does music feel so universal yet so personal? As neuroscience continues to explore these questions, what emerges is a picture of music not as a frivolous addition to human life but as a fundamental aspect of what makes us human. The melodies that fill our homes, places of worship, and concert halls may be doing far more than entertaining us — they may be helping to make us who we are.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Âm nhạc được tìm thấy ở mọi nền văn hóa con người. Sự hiện diện gần như phổ quát này từ lâu đã làm các nhà nghiên cứu bối rối. Tại sao một hành vi không có giá trị sinh tồn rõ ràng lại tiến hóa nhất quán như vậy? Khoa học thần kinh hiện đại đã bắt đầu làm sáng tỏ những tác động mạnh mẽ của âm nhạc.</p>
      
      <p><strong>Đoạn B:</strong> Các kỹ thuật chụp ảnh não hiện đại cho thấy âm nhạc kích hoạt nhiều vùng não. Không như hầu hết hoạt động chỉ liên quan đến một bán cầu, xử lý âm nhạc đồng thời cả hai bên não. Các vùng nghe, vận động, cảm xúc, trí nhớ, ngôn ngữ đều hoạt động.</p>
      
      <p><strong>Đoạn C:</strong> Một khám phá nổi bật về mối quan hệ giữa âm nhạc và trí nhớ. Các nhà nghiên cứu tại Boston University phát hiện bệnh nhân Alzheimer không nhận ra con mình vẫn có thể hát các bài hát thời trẻ. Trí nhớ âm nhạc được lưu trữ khác với các loại trí nhớ khác.</p>
      
      <p><strong>Đoạn D:</strong> Âm nhạc có tác động mạnh mẽ đến sức khỏe thể chất. Nghe nhạc êm dịu trước phẫu thuật giảm lo lắng hiệu quả hơn thuốc. Bệnh nhân đột quỵ tích hợp âm nhạc vào phục hồi thường khôi phục chức năng vận động nhanh hơn. Trẻ sinh non tiếp xúc với nhạc nhẹ tăng cân nhanh hơn.</p>
      
      <p><strong>Đoạn E:</strong> Khía cạnh xã hội của âm nhạc cũng quan trọng. Hát, nhảy, đánh trống nhóm đóng vai trò trung tâm trong nghi lễ tôn giáo, huấn luyện quân sự, lễ hội cộng đồng. Hoạt động âm nhạc đồng bộ thúc đẩy hợp tác, tăng niềm tin.</p>
      
      <p><strong>Đoạn F:</strong> Hàm ý giáo dục cũng quan trọng. Trẻ em được đào tạo âm nhạc thể hiện tốt hơn không chỉ trong kỹ năng liên quan mà cả toán học, lý luận không gian, phát triển ngôn ngữ. Đào tạo âm nhạc dài hạn tạo ra thay đổi đo lường được trong cấu trúc não.</p>
      
      <p><strong>Đoạn G:</strong> Bất chấp những phát hiện, nhiều điều về tác động của âm nhạc lên não vẫn bí ẩn. Tại sao một số giai điệu khiến chúng ta rơi nước mắt? Âm nhạc không chỉ giải trí - nó giúp định hình con người chúng ta.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Music is present in nearly all human cultures.', answer: 'TRUE', explain: 'Đoạn A: "Music is found in every known human culture".' },
          { q: 'Music processing engages only one side of the brain.', answer: 'FALSE', explain: 'Đoạn B: "music processing involves both sides of the brain simultaneously".' },
          { q: 'Alzheimer\'s patients lose their musical memories along with other memories.', answer: 'FALSE', explain: 'Đoạn C: bệnh nhân Alzheimer "could still sing songs from their youth with remarkable accuracy".' },
          { q: 'Music is more effective than medication for treating all types of anxiety.', answer: 'NOT GIVEN', explain: 'Đoạn D chỉ nói nhạc êm dịu trước phẫu thuật, không tổng quát hóa cho mọi loại lo lắng.' },
          { q: 'Synchronized musical activity can increase cooperation between strangers.', answer: 'TRUE', explain: 'Đoạn E: "promotes cooperation between participants... even when participants are strangers".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, why do people tap their feet to music?', options: ['A. They have been trained to do so', 'B. Passive listening activates movement regions in the brain', 'C. It improves their understanding of the rhythm', 'D. It is a sign of musical talent'], answer: 'B', explain: 'Đoạn B: "Even passive listening triggers regions involved in movement, which may explain why people instinctively tap their feet".' },
          { q: 'The benefits of music for premature babies include:', options: ['A. Improved language development', 'B. Better immune system function', 'C. Weight gain and stable heart rates', 'D. Earlier release from hospital'], answer: 'C', explain: 'Đoạn D: "gain weight more quickly and experience more stable heart rates".' },
          { q: 'Long-term musical training is associated with:', options: ['A. Reduced ability in mathematics', 'B. Structural changes in the brain', 'C. Decreased attention span', 'D. Better hearing in adulthood only'], answer: 'B', explain: 'Đoạn F: "long-term musical training produces measurable changes in brain structure".' },
          { q: 'The author\'s overall view of music is that it:', options: ['A. Is primarily a form of entertainment', 'B. Has been overestimated by recent research', 'C. Is a fundamental aspect of being human', 'D. Should be reserved for talented individuals'], answer: 'C', explain: 'Đoạn G: "music not as a frivolous addition to human life but as a fundamental aspect of what makes us human".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'Researchers from __________ University discovered that Alzheimer\'s patients retain musical memory.', answer: 'Boston', explain: 'Đoạn C: "researchers at the Boston University School of Medicine".' },
          { q: 'Music affects health by influencing stress hormones and __________.', answer: 'neurotransmitters', explain: 'Đoạn D: "levels of stress hormones and neurotransmitters".' },
          { q: 'Group musical activities are common in religious ceremonies and military __________.', answer: 'training', explain: 'Đoạn E: "religious ceremonies, military training, and community celebrations".' },
          { q: 'Children with musical training show improvements in mathematics, spatial reasoning and __________ development.', answer: 'language', explain: 'Đoạn F: "mathematics, spatial reasoning, and language development".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 13 - TEST 1 ====================
  'cam13-t1': {
    title: 'Antarctic Exploration',
    topic: 'History · Exploration',
    difficulty: 'Hard',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Age of Antarctic Exploration',
      content: `<p><span class="para-num">A</span> The period between 1897 and 1922, known as the Heroic Age of Antarctic Exploration, saw seventeen major expeditions to the last unexplored continent on Earth. These journeys, undertaken in wooden ships and pulled by sled dogs across some of the harshest terrain known to humanity, captured the public imagination as no scientific endeavor had done before. The stories of explorers like Robert Falcon Scott, Roald Amundsen, and Ernest Shackleton became legendary, shaping the public understanding of polar exploration that persists to this day.</p>
      
      <p><span class="para-num">B</span> The race to reach the South Pole became the most celebrated episode of the era. In 1911, two expeditions set out with this goal: a Norwegian team led by Amundsen and a British team led by Scott. Amundsen had originally planned to attempt the North Pole, but news that the American explorer Robert Peary had reached it caused him to redirect his ambitions southward. He kept his change of plans secret from most of his crew until they were well underway, fearing that public commitment to a polar race would damage international relations.</p>
      
      <p><span class="para-num">C</span> The two teams adopted strikingly different strategies. Amundsen had spent years studying Arctic peoples and adopted their methods wholesale. He used Greenland huskies pulling small sleds, dressed his men in fur clothing modeled on Inuit designs, and emphasized speed and efficiency over scientific work. Scott, by contrast, relied on a combination of motorized sledges, ponies, and human-hauled sleds. He also planned an extensive scientific program, with his men collecting geological samples and meteorological data throughout the journey. These differences would prove decisive.</p>
      
      <p><span class="para-num">D</span> Amundsen reached the South Pole on 14 December 1911. His team returned safely to their base, having traveled the entire route in less than three months. Scott reached the same point on 17 January 1912, only to find Amundsen\'s tent and a letter informing him of the Norwegian success. On the return journey, Scott\'s team encountered exceptionally harsh weather and faced steadily declining food and fuel supplies. All five members of the polar party perished, including Scott himself, who died in his tent in March 1912, just eleven miles from a major supply depot.</p>
      
      <p><span class="para-num">E</span> The most extraordinary story of the era, however, may be that of Ernest Shackleton\'s Imperial Trans-Antarctic Expedition of 1914-1917. Shackleton hoped to make the first crossing of the Antarctic continent, but his ship, the Endurance, became trapped in pack ice in the Weddell Sea and was eventually crushed. The crew of twenty-eight men spent months on drifting ice floes before reaching the desolate Elephant Island in lifeboats. From there, Shackleton and five companions sailed eight hundred miles across the world\'s stormiest ocean in a small lifeboat to reach the island of South Georgia. After crossing its uncharted mountains on foot, they reached a whaling station and organized the rescue of the men left behind. Remarkably, every member of the expedition survived.</p>
      
      <p><span class="para-num">F</span> The scientific contributions of these expeditions were substantial despite their reputation as primarily heroic adventures. Scott\'s scientific team collected over 2,000 pounds of geological specimens, including fossils that demonstrated Antarctica had once supported forests and a temperate climate. These findings provided crucial evidence for the theory of continental drift, which would not be widely accepted for another fifty years. Meteorological observations from this period remain valuable to modern climate scientists studying long-term changes in Antarctic weather.</p>
      
      <p><span class="para-num">G</span> The Heroic Age ended with Shackleton\'s death from a heart attack in 1922, on the eve of his next Antarctic voyage. Subsequent exploration would rely increasingly on aircraft, motorized vehicles, and radio communications, fundamentally changing the nature of polar work. Yet the achievements of the early explorers continue to fascinate. They serve as reminders of human capacity for endurance, planning, and at times tragic miscalculation in confronting the world\'s most unforgiving environments. Their journals and photographs remain among the most compelling documents in the history of exploration.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Giai đoạn 1897-1922, được gọi là Kỷ nguyên Anh hùng của Thám hiểm Nam Cực, có 17 chuyến thám hiểm lớn. Những hành trình này, thực hiện trên tàu gỗ và chó kéo xe, đã thu hút trí tưởng tượng công chúng. Những câu chuyện về Robert Falcon Scott, Roald Amundsen, Ernest Shackleton trở thành huyền thoại.</p>
      
      <p><strong>Đoạn B:</strong> Cuộc đua đến Nam Cực là tập nổi tiếng nhất. Năm 1911, hai chuyến thám hiểm đặt mục tiêu: đội Na Uy dẫn đầu bởi Amundsen và đội Anh bởi Scott. Amundsen ban đầu định đến Bắc Cực nhưng tin Peary đã đến đó khiến ông chuyển hướng nam. Ông giữ bí mật kế hoạch.</p>
      
      <p><strong>Đoạn C:</strong> Hai đội áp dụng chiến lược khác nhau rõ rệt. Amundsen học từ người Bắc Cực: dùng chó husky Greenland, áo lông kiểu Inuit, ưu tiên tốc độ. Scott dùng xe trượt máy, ngựa, người kéo. Ông cũng lên kế hoạch chương trình khoa học rộng. Khác biệt này quyết định kết quả.</p>
      
      <p><strong>Đoạn D:</strong> Amundsen đến Nam Cực ngày 14/12/1911. Đội trở về an toàn dưới 3 tháng. Scott đến cùng địa điểm ngày 17/1/1912, chỉ thấy lều Amundsen và lá thư. Trên đường về, đội Scott gặp thời tiết khắc nghiệt, thiếu thức ăn và nhiên liệu. Cả 5 thành viên đoàn cực tử vong, trong đó có Scott - chết cách kho tiếp tế lớn chỉ 11 dặm.</p>
      
      <p><strong>Đoạn E:</strong> Câu chuyện phi thường nhất là của Shackleton 1914-1917. Tàu Endurance bị kẹt trong băng và bị nghiền nát. 28 thành viên trải qua nhiều tháng trên băng trôi trước khi đến đảo Elephant. Shackleton và 5 bạn đi 800 dặm trên biển bão tố nhất thế giới đến South Georgia. Đáng kinh ngạc, mọi thành viên đều sống sót.</p>
      
      <p><strong>Đoạn F:</strong> Đóng góp khoa học của các chuyến thám hiểm này đáng kể. Đội Scott thu thập hơn 2,000 pound mẫu địa chất, bao gồm hóa thạch chứng minh Nam Cực từng có rừng và khí hậu ôn hòa. Bằng chứng quan trọng cho thuyết trôi lục địa.</p>
      
      <p><strong>Đoạn G:</strong> Kỷ nguyên Anh hùng kết thúc với cái chết của Shackleton vì đau tim năm 1922. Thám hiểm tiếp theo dựa nhiều hơn vào máy bay, xe có động cơ, vô tuyến. Những thành tựu của thám hiểm sớm tiếp tục mê hoặc - nhắc nhở về khả năng chịu đựng của con người.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–6',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Amundsen originally intended to travel to the North Pole.', answer: 'TRUE', explain: 'Đoạn B: "Amundsen had originally planned to attempt the North Pole".' },
          { q: 'Amundsen informed his entire crew of his change in plans before departure.', answer: 'FALSE', explain: 'Đoạn B: "He kept his change of plans secret from most of his crew until they were well underway".' },
          { q: 'Scott\'s expedition did not conduct any scientific research.', answer: 'FALSE', explain: 'Đoạn C: "He also planned an extensive scientific program".' },
          { q: 'Scott died within walking distance of a supply depot.', answer: 'TRUE', explain: 'Đoạn D: "just eleven miles from a major supply depot".' },
          { q: 'All members of Shackleton\'s expedition survived their ordeal.', answer: 'TRUE', explain: 'Đoạn E: "every member of the expedition survived".' },
          { q: 'Shackleton died during his next Antarctic expedition.', answer: 'FALSE', explain: 'Đoạn G: "on the eve of his next Antarctic voyage" - chết trước khi bắt đầu chuyến đi.' }
        ]
      },
      {
        group: 'Questions 7–10',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'Amundsen\'s strategy for reaching the South Pole was based on:', options: ['A. Modern European technology', 'B. Methods learned from Arctic peoples', 'C. Conducting detailed scientific research', 'D. Using multiple types of transportation'], answer: 'B', explain: 'Đoạn C: "Amundsen had spent years studying Arctic peoples and adopted their methods wholesale".' },
          { q: 'After his ship was destroyed, Shackleton:', options: ['A. Walked across the Antarctic continent', 'B. Was rescued by another expedition', 'C. Sailed in a small boat to seek help', 'D. Waited at Elephant Island for rescue'], answer: 'C', explain: 'Đoạn E: "Shackleton and five companions sailed eight hundred miles... to reach the island of South Georgia".' },
          { q: 'The fossils collected by Scott\'s team:', options: ['A. Were soon lost in the journey', 'B. Provided evidence for continental drift theory', 'C. Were the first ever found in Antarctica', 'D. Showed Antarctica had always been frozen'], answer: 'B', explain: 'Đoạn F: "provided crucial evidence for the theory of continental drift".' },
          { q: 'After the Heroic Age, Antarctic exploration:', options: ['A. Largely came to an end', 'B. Became dominated by aircraft and motors', 'C. Was forbidden by international treaty', 'D. Continued with similar methods to before'], answer: 'B', explain: 'Đoạn G: "Subsequent exploration would rely increasingly on aircraft, motorized vehicles, and radio communications".' }
        ]
      },
      {
        group: 'Questions 11–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'There were __________ major expeditions during the Heroic Age of Antarctic Exploration.', answer: 'seventeen', explain: 'Đoạn A: "seventeen major expeditions".' },
          { q: 'Shackleton\'s ship was called the __________.', answer: 'Endurance', explain: 'Đoạn E: "his ship, the Endurance".' },
          { q: 'Scott\'s team collected over 2,000 pounds of __________ specimens.', answer: 'geological', explain: 'Đoạn F: "over 2,000 pounds of geological specimens".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 12 - TEST 1 ====================
  'cam12-t1': {
    title: 'The Story of Coffee',
    topic: 'History · Economics',
    difficulty: 'Easy',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Story of Coffee: From Wild Plant to Global Commodity',
      content: `<p><span class="para-num">A</span> Coffee is among the most widely consumed beverages on Earth, with over two billion cups drunk each day. Yet despite its global presence, coffee has surprisingly modest origins. The plant is native to the highlands of Ethiopia, where wild coffee trees still grow in the cloud forests of the Kaffa region — the area from which the drink derives its name. According to popular legend, coffee was first discovered by a goat herder named Kaldi, who noticed his goats becoming unusually energetic after eating berries from a particular shrub. Although this story is almost certainly invented, it captures the way coffee was discovered through gradual observation of the plant\'s effects on those who consumed its fruits.</p>
      
      <p><span class="para-num">B</span> The first reliable accounts of coffee as a beverage date from the fifteenth century in Yemen. Sufi mystics drank it to stay awake during their nighttime religious practices, and from these communities the practice spread to ordinary Yemenis. The world\'s first coffee houses opened in the Yemeni city of Mocha — a name that would become so associated with the drink that it is still used for certain coffee varieties today. From Yemen, coffee spread through the Islamic world. The first coffee houses in Mecca opened in the late fifteenth century, followed soon after by establishments in Cairo, Damascus, and Istanbul.</p>
      
      <p><span class="para-num">C</span> European travelers and merchants encountered coffee in these eastern coffee houses and began bringing the drink home. The first European coffee house opened in Venice in 1645, and others soon followed in London, Paris, and Vienna. These establishments quickly became important centers of social and intellectual life. London coffee houses, in particular, attracted writers, scientists, merchants, and politicians who debated current affairs over their cups. Some specialized coffee houses evolved into important institutions: Lloyd\'s Coffee House became the famous insurance market Lloyd\'s of London, while another transformed into the London Stock Exchange.</p>
      
      <p><span class="para-num">D</span> The growing European demand for coffee led to dramatic changes in global agriculture. Until the late seventeenth century, virtually all coffee came from Yemen, which jealously guarded its monopoly. Yemeni authorities forbade the export of fertile coffee beans, sterilizing them by boiling before allowing them to leave the country. Despite these precautions, Dutch traders managed to smuggle live coffee plants to their colonies in Java in 1696. Within decades, coffee cultivation had spread to French colonies in the Caribbean, Portuguese territories in Brazil, and Spanish possessions throughout Central and South America. By the nineteenth century, Brazil had become the world\'s largest producer — a position it still holds today.</p>
      
      <p><span class="para-num">E</span> The expansion of coffee cultivation came at enormous human cost. The plantations of the New World relied heavily on enslaved labor, primarily Africans transported across the Atlantic in conditions of unimaginable brutality. Millions of people lost their lives or freedom in the production of coffee for European consumers. This grim history is rarely discussed in connection with the modern coffee industry, but it shaped both the geography of coffee production and the social structures of producing countries. Even after the abolition of slavery, plantation labor often remained poorly paid and dangerous.</p>
      
      <p><span class="para-num">F</span> The twentieth century brought further transformations. Instant coffee, invented in 1901, made the drink convenient for mass consumption. Coffee became a vital part of military rations during both world wars, helping to establish lifelong habits among returning soldiers. The rise of specialty coffee chains in the late twentieth century, beginning with Seattle-based Starbucks in 1971, transformed coffee from a commodity into a lifestyle product. Today, the global coffee industry is worth over 100 billion dollars annually and supports the livelihoods of approximately 25 million farming families worldwide.</p>
      
      <p><span class="para-num">G</span> Contemporary coffee culture faces significant challenges. Climate change threatens traditional growing regions, with some research suggesting that suitable land for coffee cultivation could decrease by half by 2050. The price paid to producers has remained stubbornly low, with most growers earning a tiny fraction of the retail price. In response, fair trade and direct trade movements have emerged to ensure that more value reaches the farmers who actually grow the beans. The future of coffee will depend on how effectively the industry addresses these economic and environmental pressures.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Cà phê là một trong những đồ uống được tiêu thụ rộng rãi nhất, hơn 2 tỷ cốc mỗi ngày. Cây cà phê có nguồn gốc từ vùng cao Ethiopia, nơi cà phê dại vẫn mọc ở rừng mây vùng Kaffa - tên gốc của loại đồ uống. Truyền thuyết kể về người chăn dê Kaldi nhận thấy dê trở nên năng động sau khi ăn quả mọng.</p>
      
      <p><strong>Đoạn B:</strong> Những ghi chép đáng tin cậy đầu tiên về cà phê có từ thế kỷ 15 ở Yemen. Các nhà thần bí Sufi uống để tỉnh táo. Quán cà phê đầu tiên trên thế giới mở ở thành phố Mocha của Yemen. Từ Yemen, cà phê lan rộng khắp thế giới Hồi giáo - Mecca, Cairo, Damascus, Istanbul.</p>
      
      <p><strong>Đoạn C:</strong> Du khách và thương nhân châu Âu mang cà phê về. Quán cà phê châu Âu đầu tiên mở tại Venice năm 1645. Quán cà phê London thu hút nhà văn, nhà khoa học, thương nhân, chính trị gia. Lloyd\'s Coffee House trở thành thị trường bảo hiểm Lloyd\'s of London, một quán khác trở thành Sàn Chứng khoán London.</p>
      
      <p><strong>Đoạn D:</strong> Nhu cầu châu Âu dẫn đến thay đổi nông nghiệp toàn cầu. Cho đến cuối thế kỷ 17, gần như tất cả cà phê đến từ Yemen - nước này độc quyền nghiêm ngặt. Thương nhân Hà Lan buôn lậu thành công cây cà phê đến Java năm 1696. Trong vài thập kỷ, cà phê lan đến Caribbean, Brazil, Trung và Nam Mỹ. Brazil hiện vẫn là nước sản xuất lớn nhất.</p>
      
      <p><strong>Đoạn E:</strong> Mở rộng trồng cà phê có cái giá nhân đạo khổng lồ. Đồn điền dựa nặng vào lao động nô lệ, chủ yếu là người châu Phi. Hàng triệu người mất mạng hoặc tự do. Lịch sử u ám này hiếm khi được nhắc đến.</p>
      
      <p><strong>Đoạn F:</strong> Thế kỷ 20 mang đến thêm chuyển đổi. Cà phê tan, phát minh năm 1901, làm đồ uống tiện lợi. Cà phê là khẩu phần quân đội trong hai cuộc chiến tranh thế giới. Chuỗi cà phê đặc sản như Starbucks (1971) biến cà phê thành sản phẩm phong cách sống. Ngành công nghiệp cà phê toàn cầu trị giá hơn 100 tỷ đô la mỗi năm.</p>
      
      <p><strong>Đoạn G:</strong> Văn hóa cà phê đương đại đối mặt thách thức lớn. Biến đổi khí hậu đe dọa các vùng trồng truyền thống - đất phù hợp có thể giảm một nửa đến 2050. Giá trả cho người sản xuất rất thấp. Phong trào thương mại công bằng giúp giá trị đến nông dân.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'The story of Kaldi the goat herder is widely accepted as historical fact.', answer: 'FALSE', explain: 'Đoạn A: "this story is almost certainly invented".' },
          { q: 'Coffee was first drunk by Sufi mystics for religious purposes.', answer: 'TRUE', explain: 'Đoạn B: "Sufi mystics drank it to stay awake during their nighttime religious practices".' },
          { q: 'London\'s first coffee house opened before Venice\'s.', answer: 'FALSE', explain: 'Đoạn C: "The first European coffee house opened in Venice in 1645, and others soon followed in London".' },
          { q: 'Yemen tried to prevent other countries from growing coffee.', answer: 'TRUE', explain: 'Đoạn D: "Yemeni authorities forbade the export of fertile coffee beans, sterilizing them".' },
          { q: 'Instant coffee was first developed for military use.', answer: 'NOT GIVEN', explain: 'Đoạn F nói cà phê tan phát minh 1901 và trở thành khẩu phần quân đội, nhưng không nói nó được phát triển cho mục đích quân sự.' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'The name "coffee" comes from:', options: ['A. The Yemeni city of Mocha', 'B. The Ethiopian region of Kaffa', 'C. The goat herder Kaldi', 'D. An Arabic word for energy'], answer: 'B', explain: 'Đoạn A: "the cloud forests of the Kaffa region — the area from which the drink derives its name".' },
          { q: 'Lloyd\'s of London began as:', options: ['A. A stock exchange', 'B. A government office', 'C. A coffee house', 'D. A shipping company'], answer: 'C', explain: 'Đoạn C: "Lloyd\'s Coffee House became the famous insurance market Lloyd\'s of London".' },
          { q: 'How did coffee cultivation spread beyond Yemen?', options: ['A. Yemeni farmers emigrated to other countries', 'B. The Dutch smuggled coffee plants to their colonies', 'C. Coffee seeds were carried by birds', 'D. Religious pilgrims took plants on their journeys'], answer: 'B', explain: 'Đoạn D: "Dutch traders managed to smuggle live coffee plants to their colonies in Java in 1696".' },
          { q: 'According to the passage, climate change may cause:', options: ['A. The complete extinction of coffee plants', 'B. Coffee prices to fall dramatically', 'C. Suitable coffee land to decrease by half', 'D. New coffee varieties to develop'], answer: 'C', explain: 'Đoạn G: "suitable land for coffee cultivation could decrease by half by 2050".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'Coffee is native to the highlands of __________.', answer: 'Ethiopia', explain: 'Đoạn A: "The plant is native to the highlands of Ethiopia".' },
          { q: 'The world\'s first coffee houses opened in the city of __________.', answer: 'Mocha', explain: 'Đoạn B: "The world\'s first coffee houses opened in the Yemeni city of Mocha".' },
          { q: 'Coffee plantations in the Americas relied heavily on __________ labor.', answer: 'enslaved', explain: 'Đoạn E: "The plantations of the New World relied heavily on enslaved labor".' },
          { q: 'Today, the global coffee industry supports about 25 million __________ families.', answer: 'farming', explain: 'Đoạn F: "supports the livelihoods of approximately 25 million farming families".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 11 - TEST 1 ====================
  'cam11-t1': {
    title: 'The Skyscraper',
    topic: 'Architecture · Engineering',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'Reaching for the Sky: The Birth of the Skyscraper',
      content: `<p><span class="para-num">A</span> The skyscraper is among the most recognizable symbols of modern urban life, yet its development depended on a precise combination of technological innovations that came together only in the late nineteenth century. Before this period, the height of buildings was limited by two fundamental constraints: the load-bearing capacity of masonry walls and the practical difficulty of climbing stairs to upper floors. Resolving these limitations would require entirely new approaches to both construction and vertical transportation.</p>
      
      <p><span class="para-num">B</span> The breakthrough in vertical transportation came in 1853, when American inventor Elisha Otis demonstrated a safety elevator at the New York Crystal Palace exhibition. Earlier elevators had existed for transporting goods, but had been considered too dangerous for passengers because of the risk of falls if the cable broke. Otis\'s ingenious invention used a safety brake that would automatically engage if the elevator cable failed. To prove its effectiveness, he had himself raised on the platform and then dramatically ordered the cable cut. The platform held firm, and the safety elevator was born. Without this innovation, tall buildings would have remained impractical regardless of structural improvements.</p>
      
      <p><span class="para-num">C</span> The structural revolution came two decades later in Chicago, where the catastrophic fire of 1871 had destroyed much of the city and created enormous demand for new construction. Architects working in the rebuilt city pioneered the use of iron and then steel skeleton frames. Unlike traditional masonry construction, where the walls themselves supported the weight of the building, the new approach used a frame of vertical and horizontal metal beams to bear all structural loads. The walls became simply a thin skin attached to this frame, no longer needing to be thick at the base to support upper floors. This radical change meant that the height of buildings was no longer limited by the practical impossibility of constructing massive stone walls.</p>
      
      <p><span class="para-num">D</span> The Home Insurance Building, completed in Chicago in 1885, is generally considered the first true skyscraper. Designed by William Le Baron Jenney, it stood ten stories tall — modest by modern standards but revolutionary for its time. More importantly, it was the first major building to use a complete metal skeleton frame to support its weight. Other Chicago architects, including Louis Sullivan and Daniel Burnham, refined and popularized the approach during the following decade. Their work gave rise to what became known as the Chicago School of architecture, characterized by tall buildings with restrained ornamentation and emphasis on the underlying steel frame.</p>
      
      <p><span class="para-num">E</span> Although Chicago invented the skyscraper, New York City quickly claimed leadership in pushing the form to ever greater heights. The geographical constraints of Manhattan, where land prices were extraordinarily high but the bedrock was particularly suitable for supporting tall buildings, encouraged maximum vertical development. The Flatiron Building of 1902 and the Singer Building of 1908 set successive records, but they were soon dwarfed by the Woolworth Building of 1913, which reached 792 feet. The race continued through the 1920s and culminated in 1931 with the completion of the Empire State Building, whose 1,250-foot height would remain unsurpassed for forty years.</p>
      
      <p><span class="para-num">F</span> The early skyscrapers transformed not only the appearance of cities but also their social organization. By dramatically increasing the floor space available on any given parcel of land, they allowed enormous concentrations of office workers and commercial activity in central business districts. This had complex consequences: it created the modern downtown but also led to the daily exodus to suburban housing that defines so many North American cities today. Skyscrapers became symbols of corporate power and national prestige, with companies and cities competing to construct the tallest examples.</p>
      
      <p><span class="para-num">G</span> Today, skyscraper construction continues at a remarkable pace, but its center has shifted decisively away from North America. Of the hundred tallest buildings completed since 2000, the vast majority are in Asia, particularly China and the United Arab Emirates. The Burj Khalifa in Dubai, completed in 2010 at over 2,700 feet, demonstrates how far the form has come since the modest ten-story Home Insurance Building. Yet despite changes in scale, location, and technology, modern skyscrapers continue to rely on the same fundamental innovations — the safety elevator and the skeleton frame — that made the original tall buildings possible.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Tòa nhà chọc trời là biểu tượng dễ nhận biết nhất của đời sống đô thị hiện đại. Trước cuối thế kỷ 19, chiều cao tòa nhà bị giới hạn bởi: sức chịu tải của tường gạch và khó khăn leo cầu thang. Giải quyết hạn chế này cần phương pháp mới cho cả xây dựng và vận chuyển dọc.</p>
      
      <p><strong>Đoạn B:</strong> Đột phá trong vận chuyển dọc đến năm 1853, khi Elisha Otis trình diễn thang máy an toàn ở Crystal Palace New York. Thang máy trước đó được coi là quá nguy hiểm. Otis phát minh phanh an toàn tự động kích hoạt khi cáp đứt. Ông tự đứng lên thang rồi cho cắt cáp - thang giữ vững.</p>
      
      <p><strong>Đoạn C:</strong> Cách mạng cấu trúc đến 2 thập kỷ sau tại Chicago. Vụ cháy thảm khốc 1871 tạo nhu cầu xây dựng lớn. Các kiến trúc sư tiên phong sử dụng khung sắt rồi thép. Tường trở thành lớp da mỏng gắn vào khung, không cần dày ở chân. Chiều cao không còn bị giới hạn.</p>
      
      <p><strong>Đoạn D:</strong> Tòa nhà Home Insurance, hoàn thành tại Chicago năm 1885, được coi là tòa nhà chọc trời đầu tiên. Thiết kế bởi William Le Baron Jenney, cao 10 tầng. Đây là tòa nhà lớn đầu tiên sử dụng khung kim loại hoàn chỉnh. Louis Sullivan và Daniel Burnham phát triển phong cách Chicago.</p>
      
      <p><strong>Đoạn E:</strong> Mặc dù Chicago phát minh tòa nhà chọc trời, New York nhanh chóng giành quyền lãnh đạo. Hạn chế địa lý Manhattan khuyến khích phát triển tối đa theo chiều dọc. Flatiron Building 1902, Singer Building 1908, Woolworth Building 1913 (792 ft). Empire State Building 1931 (1,250 ft) - không bị vượt qua trong 40 năm.</p>
      
      <p><strong>Đoạn F:</strong> Tòa nhà chọc trời ban đầu biến đổi không chỉ diện mạo thành phố mà cả tổ chức xã hội. Cho phép tập trung khổng lồ nhân viên văn phòng. Tạo trung tâm thành phố hiện đại nhưng cũng dẫn đến chuyển nhà ra ngoại ô hàng ngày.</p>
      
      <p><strong>Đoạn G:</strong> Hiện nay, xây dựng tòa nhà chọc trời tiếp tục với tốc độ đáng kể, nhưng trung tâm đã chuyển ra khỏi Bắc Mỹ. Trong 100 tòa nhà cao nhất hoàn thành từ 2000, phần lớn ở châu Á - Trung Quốc và UAE. Burj Khalifa ở Dubai (2010, hơn 2,700 ft).</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Before 1850, the height of buildings was limited only by the difficulty of climbing stairs.', answer: 'FALSE', explain: 'Đoạn A: bị hạn chế bởi 2 yếu tố - khả năng chịu tải của tường gạch VÀ khó khăn leo cầu thang.' },
          { q: 'Elisha Otis demonstrated his safety elevator by cutting the cable himself.', answer: 'FALSE', explain: 'Đoạn B: "he had himself raised on the platform and then dramatically ordered the cable cut" - ông ra lệnh cho người khác cắt.' },
          { q: 'The Chicago fire of 1871 contributed to the development of new building methods.', answer: 'TRUE', explain: 'Đoạn C: vụ cháy "had destroyed much of the city and created enormous demand for new construction" → kiến trúc sư phát triển khung sắt/thép.' },
          { q: 'Louis Sullivan was the primary designer of the Home Insurance Building.', answer: 'FALSE', explain: 'Đoạn D: tòa nhà được "Designed by William Le Baron Jenney", Sullivan chỉ phát triển phong cách sau đó.' },
          { q: 'New York surpassed Chicago in skyscraper height because of cheaper land prices.', answer: 'FALSE', explain: 'Đoạn E: "land prices were extraordinarily high" - giá đất rất cao chứ không rẻ.' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'The key innovation that made tall buildings practical for people was:', options: ['A. The use of steel instead of iron', 'B. The development of fireproof materials', 'C. The safety elevator with automatic brake', 'D. The Chicago School architectural style'], answer: 'C', explain: 'Đoạn B: "Without this innovation, tall buildings would have remained impractical".' },
          { q: 'In the new skeleton frame construction, the walls of buildings:', options: ['A. Were thicker than in traditional buildings', 'B. Became a thin covering not supporting weight', 'C. Were made entirely of glass', 'D. Were no longer needed'], answer: 'B', explain: 'Đoạn C: "The walls became simply a thin skin attached to this frame".' },
          { q: 'The Empire State Building held the record for tallest building for:', options: ['A. Twenty years', 'B. Thirty years', 'C. Forty years', 'D. Fifty years'], answer: 'C', explain: 'Đoạn E: "would remain unsurpassed for forty years".' },
          { q: 'According to the passage, most of the tallest buildings built since 2000 are in:', options: ['A. North America', 'B. Europe', 'C. Asia', 'D. South America'], answer: 'C', explain: 'Đoạn G: "the vast majority are in Asia, particularly China and the United Arab Emirates".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'Elisha Otis demonstrated his safety elevator at the New York __________.', answer: 'Crystal Palace', explain: 'Đoạn B: "at the New York Crystal Palace exhibition".' },
          { q: 'The Home Insurance Building stood __________ stories tall.', answer: 'ten', explain: 'Đoạn D: "it stood ten stories tall".' },
          { q: 'The Woolworth Building, completed in 1913, reached __________ feet.', answer: '792', explain: 'Đoạn E: "the Woolworth Building of 1913, which reached 792 feet".' },
          { q: 'The Burj Khalifa in Dubai was completed in __________.', answer: '2010', explain: 'Đoạn G: "The Burj Khalifa in Dubai, completed in 2010".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 18 - TEST 2 ====================
  'cam18-t2': {
    title: 'The Origins of Language',
    topic: 'Linguistics · Anthropology',
    difficulty: 'Hard',
    passages: [
      {
        label: 'Reading Passage 1',
        title: 'The Mystery of Language Origins',
        content: `<p><span class="para-num">A</span> No question in linguistics is more controversial than how human language first emerged. Unlike fossils of ancient bones or stone tools, speech leaves no physical trace. The earliest written records date from only about 5,000 years ago, but spoken language is certainly far older. Scholars have proposed dates ranging from 50,000 to over a million years for the emergence of fully modern language, with no consensus in sight. So intractable was this problem that in 1866, the Linguistic Society of Paris famously banned all papers on the topic, declaring it unsolvable.</p>
        
        <p><span class="para-num">B</span> Modern researchers have approached the question from multiple angles. Comparative anatomy provides some clues. The human vocal tract differs from those of other primates in ways that suggest adaptation for speech: a lower larynx position allows for the production of a wider range of sounds. However, this anatomical change may have evolved before language itself, perhaps for other reasons such as swallowing efficiency. Brain imaging has identified regions essential for language processing, but related structures exist in other primates, complicating attempts to pinpoint when human-like language capacity emerged.</p>
        
        <p><span class="para-num">C</span> Genetic evidence has added new dimensions to the debate. The FOXP2 gene, dubbed "the language gene" in popular media, came to attention through studies of a British family with severe speech disorders. Members affected by a mutation in this gene struggle with both producing and understanding language. The human version of FOXP2 differs from that of chimpanzees by just two amino acids, and these differences are thought to have spread through human populations within the last 200,000 years. However, calling FOXP2 a language gene is misleading; it appears to play roles in many aspects of motor control, not just speech. Language depends on hundreds of genes working together, not on any single one.</p>
        
        <p><span class="para-num">D</span> Some researchers have looked to existing primate communication for clues. Vervet monkeys produce distinct alarm calls for different predators — one for eagles, another for snakes, a third for leopards. This suggests a rudimentary form of symbolic communication. However, primate calls are largely fixed and instinctive, while human language is open-ended and learned. The gap between these systems is enormous and may indicate that human language did not evolve gradually from primate calls but emerged through some more dramatic transformation.</p>
        
        <p><span class="para-num">E</span> The American linguist Noam Chomsky has long argued that the human capacity for language is uniquely complex and probably arose suddenly rather than through gradual evolution. He points to the fact that any normal child can acquire any human language with remarkable speed and accuracy, suggesting that the basic structures of language are somehow innate. Critics, including the cognitive scientist Steven Pinker, accept that language is partly innate but argue that this capacity must have evolved through normal evolutionary processes over hundreds of thousands of years.</p>
        
        <p><span class="para-num">F</span> Recent archaeological evidence has shifted the conversation. The emergence of complex tool-making, symbolic art, and trade networks among Homo sapiens around 70,000 years ago — often called the "cognitive revolution" — coincides with what many scholars believe was the development of fully modern language. Cave paintings, beadwork, and other early symbolic objects from this period suggest that the underlying cognitive abilities supporting language were in place. Some researchers argue that this represents not the origin of language but a fundamental change in how it was used, perhaps the emergence of grammar capable of expressing abstract thoughts.</p>
        
        <p><span class="para-num">G</span> What seems increasingly clear is that no single answer will satisfy the question of language origins. Language is not a single trait but a complex of abilities — pronunciation, vocabulary, grammar, conversation, narrative — each of which may have its own evolutionary history. The cognitive, anatomical, and social changes that produced modern language likely unfolded over a very long period and involved many small steps rather than one revolutionary leap. The 1866 ban on language origin papers was eventually rescinded, but the underlying mystery remains as intriguing as ever.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Không câu hỏi nào trong ngôn ngữ học gây tranh cãi hơn việc ngôn ngữ con người xuất hiện như thế nào. Năm 1866, Hội Ngôn ngữ Paris đã cấm tất cả bài về chủ đề này.</p>
        <p><strong>Đoạn B:</strong> Giải phẫu so sánh cho thấy đường hô hấp con người khác với linh trưởng khác. Tuy nhiên, thay đổi giải phẫu này có thể đã tiến hóa trước khi có ngôn ngữ.</p>
        <p><strong>Đoạn C:</strong> Gen FOXP2 được mệnh danh "gen ngôn ngữ" qua nghiên cứu gia đình Anh bị rối loạn nói. Phiên bản FOXP2 ở người khác với tinh tinh chỉ 2 axit amin.</p>
        <p><strong>Đoạn D:</strong> Khỉ vervet phát ra các tiếng kêu báo động khác nhau cho các động vật săn mồi khác nhau. Tuy nhiên, khoảng cách giữa các hệ thống này lớn.</p>
        <p><strong>Đoạn E:</strong> Noam Chomsky lập luận năng lực ngôn ngữ của con người là độc đáo phức tạp. Steven Pinker chấp nhận ngôn ngữ phần nào bẩm sinh nhưng cho rằng nó tiến hóa qua quá trình tự nhiên.</p>
        <p><strong>Đoạn F:</strong> Bằng chứng khảo cổ học gần đây đã thay đổi cuộc trò chuyện. "Cách mạng nhận thức" khoảng 70,000 năm trước trùng với điều nhiều học giả tin là sự phát triển ngôn ngữ hiện đại đầy đủ.</p>
        <p><strong>Đoạn G:</strong> Không có câu trả lời duy nhất. Ngôn ngữ không phải đặc điểm đơn lẻ mà là tập hợp phức tạp các khả năng. Các thay đổi có lẽ diễn ra trong thời gian rất dài.</p>`
      },
      {
        label: 'Reading Passage 2',
        title: 'The Search for Lost Empires',
        content: `<p><span class="para-num">A</span> Throughout history, civilisations have risen, flourished, and then disappeared, leaving behind ruins that capture the imagination of subsequent generations. The discovery of lost cities and forgotten kingdoms has been one of the most romantic pursuits of archaeology, often combining serious scientific investigation with elements of treasure hunting and adventure. Yet behind these dramatic discoveries lies a more sober reality: most lost civilisations were not discovered but rediscovered, having always been known to the people whose ancestors built them or who lived near their remains.</p>
        
        <p><span class="para-num">B</span> The case of Petra, the ancient Nabataean city carved from rose-coloured cliffs in modern Jordan, illustrates this pattern. The Swiss explorer Johann Ludwig Burckhardt is widely credited with "discovering" Petra in 1812 — but Bedouin people had been living among and around the ruins for centuries before he arrived. They knew exactly where the city was; they had simply never told European outsiders. Burckhardt\'s achievement was not so much finding Petra as bringing it to European attention by disguising himself as a Muslim pilgrim and persuading local guides to lead him to the site. The story of his "discovery" reveals as much about European attitudes as about archaeology.</p>
        
        <p><span class="para-num">C</span> Similar patterns appear in many other famous archaeological discoveries. The American adventurer Hiram Bingham III did not so much find Machu Picchu in 1911 as become the first outsider to publicise its existence. Local Quechua people had known about the Inca site throughout the centuries since its abandonment, and at least one previous European visitor had reached it without recognising its significance. The temples of Angkor in Cambodia, sometimes described as "rediscovered" by the French naturalist Henri Mouhot in 1860, had been known to local people and visited by various foreign travellers for centuries before Mouhot arrived.</p>
        
        <p><span class="para-num">D</span> The story of the ancient city of Troy demonstrates how the dramatic narrative of archaeological discovery can sometimes overshadow the actual evidence. Heinrich Schliemann, a wealthy German businessman with no formal archaeological training, claimed to have discovered the historical Troy in the 1870s. His excavations at Hisarlik in modern Turkey were carried out with little of the careful methodology that would become standard in archaeology. Schliemann\'s enthusiastic but destructive digging probably eliminated evidence that more patient excavation would have preserved, and many of his most famous claims have been questioned by later researchers. Yet his romantic story continues to dominate popular understanding of how Troy was found.</p>
        
        <p><span class="para-num">E</span> Some lost civilisations have been discovered through more recent and sometimes accidental means. The Terracotta Army of China, one of the most spectacular archaeological finds of the twentieth century, was discovered in 1974 by Chinese farmers digging a well. The thousands of life-sized clay warriors guarding the tomb of the first Chinese emperor had remained completely unknown for over two thousand years. Sometimes, modern technology reveals what traditional methods missed. Satellite imagery, ground-penetrating radar, and other remote sensing technologies have identified hundreds of previously unknown archaeological sites in recent decades, including substantial settlements lost beneath Cambodian jungles and in the Amazon basin.</p>
        
        <p><span class="para-num">F</span> The reasons civilisations are lost are as varied as the civilisations themselves. Environmental degradation has been blamed for the collapse of many ancient societies, including the Maya civilisation in Central America, which appears to have suffered drought conditions that overwhelmed its agricultural systems. Political conflicts and military defeats have erased others. The cumulative effects of disease, especially when new pathogens encountered populations with no immunity, devastated many indigenous American civilisations following European contact. Climate change, both natural and human-caused, has played roles ranging from minor to decisive.</p>
        
        <p><span class="para-num">G</span> The ongoing search for lost civilisations continues to teach us about how complex societies arise, develop, and disappear. As archaeological methods have improved and become more sensitive to local knowledge and indigenous perspectives, our understanding of these ancient cultures has deepened considerably. Future discoveries will probably emerge from places that were never quite lost — locations where descendants of ancient peoples have preserved memories and traditions that archaeologists have not yet thought to learn from. The romantic story of intrepid explorers finding hidden cities is giving way to a more honest narrative of collaboration between scientists and the people whose heritage they study.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Trong suốt lịch sử, các nền văn minh đã trỗi dậy, phát triển, rồi biến mất. Hầu hết các nền văn minh "mất tích" không được phát hiện mà được tái phát hiện - người dân địa phương luôn biết về chúng.</p>
        <p><strong>Đoạn B:</strong> Trường hợp Petra minh họa mô hình này. Burckhardt được ghi nhận "phát hiện" Petra năm 1812 - nhưng người Bedouin đã sống quanh đó nhiều thế kỷ trước khi ông đến.</p>
        <p><strong>Đoạn C:</strong> Các mô hình tương tự xuất hiện trong nhiều khám phá khảo cổ nổi tiếng. Hiram Bingham III không tìm thấy Machu Picchu năm 1911 mà chỉ là người ngoài đầu tiên công bố sự tồn tại của nó.</p>
        <p><strong>Đoạn D:</strong> Heinrich Schliemann tuyên bố phát hiện Troy lịch sử trong những năm 1870. Phương pháp khai quật của ông không cẩn thận, có thể đã loại bỏ bằng chứng quan trọng.</p>
        <p><strong>Đoạn E:</strong> Quân đội Đất nung của Trung Quốc được phát hiện năm 1974 bởi nông dân đào giếng. Công nghệ vệ tinh, radar xuyên đất hiện đại đã xác định hàng trăm địa điểm khảo cổ chưa biết.</p>
        <p><strong>Đoạn F:</strong> Lý do các nền văn minh bị mất tích đa dạng. Suy thoái môi trường, xung đột chính trị, dịch bệnh, biến đổi khí hậu đều đóng vai trò.</p>
        <p><strong>Đoạn G:</strong> Cuộc tìm kiếm liên tục các nền văn minh mất tích tiếp tục dạy chúng ta về cách các xã hội phức tạp phát sinh, phát triển, và biến mất. Câu chuyện lãng mạn đang nhường chỗ cho một câu chuyện trung thực hơn về sự hợp tác.</p>`
      },
      {
        label: 'Reading Passage 3',
        title: 'The Science of Emotional Intelligence',
        content: `<p><span class="para-num">A</span> The concept of emotional intelligence, often shortened to EI or EQ, has become one of the most influential ideas in modern psychology and business. First popularised by the science journalist Daniel Goleman in his 1995 bestseller, the idea suggested that traditional measures of intelligence — IQ tests and academic achievement — captured only part of what makes people successful in life. Equally important, according to Goleman, are abilities to understand and manage emotions in oneself and others. Although the concept has faced significant criticism, it has profoundly influenced how we think about education, leadership, and personal development.</p>
        
        <p><span class="para-num">B</span> Emotional intelligence as a formal psychological concept was developed by the researchers Peter Salovey and John Mayer in academic papers published in the late 1980s and early 1990s. They defined it as comprising four related abilities: perceiving emotions in oneself and others, using emotions to facilitate thinking, understanding the meanings and causes of emotions, and managing emotions effectively. This original formulation was relatively narrow and testable. Goleman\'s subsequent popularisation expanded the concept considerably, adding components such as motivation, social skills, and empathy that were less precisely defined.</p>
        
        <p><span class="para-num">C</span> Research has linked higher levels of emotional intelligence to numerous positive outcomes. Studies of students have found that emotional intelligence correlates with academic performance, even after controlling for traditional measures of intelligence. Workers with higher emotional intelligence tend to receive better performance evaluations and to advance further in their careers. Marriages and friendships involving people with higher emotional intelligence tend to be more stable and satisfying. Health outcomes also appear better for emotionally intelligent individuals, possibly because they manage stress more effectively.</p>
        
        <p><span class="para-num">D</span> Despite its popularity, emotional intelligence has faced substantial scientific criticism. Critics point out that the concept overlaps heavily with established personality traits, particularly conscientiousness and agreeableness, which can be measured more precisely. The methodologies used to test emotional intelligence have also been questioned. Some tests rely on people\'s judgements about their own abilities, which may reflect self-perception more than actual skill. Other tests use scenarios where there is no clearly correct answer, raising questions about what they really measure. Whether emotional intelligence represents a coherent ability distinct from personality and intelligence remains debated among researchers.</p>
        
        <p><span class="para-num">E</span> The application of emotional intelligence in workplace settings has been particularly enthusiastic. Many companies now use emotional intelligence assessments in hiring and promotion decisions, and provide training programmes intended to develop these skills. Research evidence supporting the effectiveness of such programmes is mixed at best. Some studies have found significant improvements in employee behaviour and team functioning following emotional intelligence training, while others have found minimal effects. The commercial market for emotional intelligence services may have grown faster than the scientific evidence supporting their value.</p>
        
        <p><span class="para-num">F</span> Cultural differences in emotional expression and recognition present another challenge for emotional intelligence research. Most studies have been conducted in Western contexts and may not generalise to other cultures. Standards for appropriate emotional expression vary considerably across societies; behaviours considered emotionally intelligent in one cultural setting may be inappropriate in another. East Asian cultures often value emotional restraint that Western emotional intelligence frameworks might interpret as low emotional awareness. Research on emotional intelligence in non-Western contexts has lagged behind, leaving questions about how universal the concept actually is.</p>
        
        <p><span class="para-num">G</span> Whatever the ultimate scientific status of emotional intelligence as a coherent psychological concept, its influence on practical thinking about human relationships and success has been substantial. The basic insight — that managing emotions effectively contributes to wellbeing and achievement — seems sound even if measurement remains imprecise. Schools have introduced curricula focused on developing emotional skills in children. Therapy approaches increasingly emphasise emotional regulation. Whether or not emotional intelligence represents a single ability that can be measured precisely, its popularisation has contributed to taking emotions seriously as legitimate subjects of study and skill development.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Khái niệm trí tuệ cảm xúc (EI/EQ) đã trở thành một trong những ý tưởng có ảnh hưởng nhất trong tâm lý học hiện đại. Lần đầu được phổ biến bởi nhà báo khoa học Daniel Goleman năm 1995.</p>
        <p><strong>Đoạn B:</strong> Trí tuệ cảm xúc được Peter Salovey và John Mayer phát triển trong các bài báo học thuật cuối những năm 1980. Họ định nghĩa nó bao gồm 4 khả năng liên quan.</p>
        <p><strong>Đoạn C:</strong> Nghiên cứu đã liên kết mức độ trí tuệ cảm xúc cao hơn với nhiều kết quả tích cực - học tập, sự nghiệp, hôn nhân, sức khỏe.</p>
        <p><strong>Đoạn D:</strong> Mặc dù phổ biến, trí tuệ cảm xúc đã đối mặt với chỉ trích khoa học đáng kể. Các nhà phê bình chỉ ra rằng khái niệm này trùng lặp nhiều với các đặc điểm tính cách đã thiết lập.</p>
        <p><strong>Đoạn E:</strong> Việc ứng dụng EI trong môi trường nơi làm việc đặc biệt nhiệt tình. Tuy nhiên, bằng chứng nghiên cứu hỗ trợ hiệu quả của các chương trình như vậy là hỗn hợp.</p>
        <p><strong>Đoạn F:</strong> Khác biệt văn hóa trong biểu hiện cảm xúc là một thách thức khác cho nghiên cứu EI. Hầu hết các nghiên cứu được thực hiện trong bối cảnh phương Tây.</p>
        <p><strong>Đoạn G:</strong> Bất kể tình trạng khoa học cuối cùng, ảnh hưởng của EI đối với tư duy thực tế đã đáng kể. Trường học đã giới thiệu chương trình phát triển kỹ năng cảm xúc cho trẻ em.</p>`
      }
    ],
    
    questions: [
      // ========== PASSAGE 1 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 1–6',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'There is general agreement among scholars about when language first appeared.', answer: 'FALSE', explain: 'Đoạn A: "no consensus in sight".' },
            { q: 'The Linguistic Society of Paris banned papers on language origins in 1866.', answer: 'TRUE', explain: 'Đoạn A: "in 1866, the Linguistic Society of Paris famously banned all papers".' },
            { q: 'The human larynx position evolved specifically for producing speech sounds.', answer: 'NOT GIVEN', explain: 'Đoạn B nói thanh quản thấp cho phép tạo âm thanh, nhưng cũng nói có thể tiến hóa vì lý do khác.' },
            { q: 'The FOXP2 gene is the only gene responsible for language ability.', answer: 'FALSE', explain: 'Đoạn C: "Language depends on hundreds of genes working together".' },
            { q: 'Vervet monkeys can learn to produce new alarm calls when needed.', answer: 'NOT GIVEN', explain: 'Đoạn D nói tiếng kêu phần lớn cố định/bản năng nhưng không khẳng định có thể/không thể học calls mới.' },
            { q: 'Cave paintings appeared at roughly the same time as the cognitive revolution.', answer: 'TRUE', explain: 'Đoạn F: "Cave paintings, beadwork, and other early symbolic objects from this period" liên hệ với "cognitive revolution".' }
          ]
        },
        {
          group: 'Questions 7–10',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, the FOXP2 gene was studied through:', options: ['A. Research on chimpanzees', 'B. Computer simulations', 'C. A British family with speech disorders', 'D. Comparing different languages'], answer: 'C', explain: 'Đoạn C: "studies of a British family with severe speech disorders".' },
            { q: 'The "cognitive revolution" mentioned in the passage refers to:', options: ['A. The first development of written language', 'B. The emergence of complex behaviors around 70,000 years ago', 'C. A scientific theory developed by Chomsky', 'D. A modern teaching method for languages'], answer: 'B', explain: 'Đoạn F: "around 70,000 years ago — often called the cognitive revolution".' },
            { q: 'Noam Chomsky believes that language:', options: ['A. Evolved very slowly over millions of years', 'B. Cannot be acquired by children naturally', 'C. Is uniquely complex and probably emerged suddenly', 'D. Developed from primate communication systems'], answer: 'C', explain: 'Đoạn E: "uniquely complex and probably arose suddenly".' },
            { q: 'The author\'s overall conclusion about language origins is that:', options: ['A. The mystery has been mostly solved', 'B. A single dramatic event must explain everything', 'C. Many small changes likely contributed over a long period', 'D. The question will never be answered'], answer: 'C', explain: 'Đoạn G: "likely unfolded over a very long period and involved many small steps".' }
          ]
        },
        {
          group: 'Questions 11–13',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'The human version of FOXP2 differs from chimpanzees\' by just __________ amino acids.', answer: 'two', explain: 'Đoạn C: "differs from that of chimpanzees by just two amino acids".' },
            { q: 'Vervet monkeys use different __________ calls for different predators.', answer: 'alarm', explain: 'Đoạn D: "produce distinct alarm calls for different predators".' },
            { q: 'Some scholars believe the development of __________ allowed the expression of abstract thoughts.', answer: 'grammar', explain: 'Đoạn F: "the emergence of grammar capable of expressing abstract thoughts".' }
          ]
        }
      ],
      
      // ========== PASSAGE 2 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 14–19',
          type: 'matching-headings',
          instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list below.',
          headings: [
            { id: 'i', text: 'A romantic but problematic narrative of discovery' },
            { id: 'ii', text: 'Local knowledge that was always present' },
            { id: 'iii', text: 'A famous case of European "discovery"' },
            { id: 'iv', text: 'Patterns repeated across many sites' },
            { id: 'v', text: 'How modern methods reveal hidden sites' },
            { id: 'vi', text: 'Various causes of civilisational collapse' },
            { id: 'vii', text: 'Toward a more collaborative future' },
            { id: 'viii', text: 'Influence of religious sites on history' },
            { id: 'ix', text: 'Mapping ancient trade routes' }
          ],
          items: [
            { q: 'A', answer: 'ii', explain: 'Đoạn A giới thiệu thực tế rằng các nền văn minh "mất tích" thực ra luôn được người dân địa phương biết đến.' },
            { q: 'B', answer: 'iii', explain: 'Đoạn B là một trường hợp nổi tiếng - Petra được Burckhardt "phát hiện".' },
            { q: 'C', answer: 'iv', explain: 'Đoạn C nói các mô hình tương tự lặp lại ở nhiều di tích - Machu Picchu, Angkor.' },
            { q: 'D', answer: 'i', explain: 'Đoạn D về câu chuyện Schliemann tìm Troy - romantic nhưng có vấn đề về phương pháp.' },
            { q: 'E', answer: 'v', explain: 'Đoạn E về phương pháp hiện đại - vệ tinh, radar - tiết lộ địa điểm ẩn.' },
            { q: 'F', answer: 'vi', explain: 'Đoạn F về các nguyên nhân khác nhau của sự sụp đổ văn minh.' }
          ]
        },
        {
          group: 'Questions 20–23',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'Burckhardt was the first European to visit Petra.', answer: 'NOT GIVEN', explain: 'Đoạn B nói ông được ghi nhận "phát hiện" Petra cho người châu Âu nhưng không khẳng định ông là người châu Âu đầu tiên.' },
            { q: 'Hiram Bingham was the first European to reach Machu Picchu.', answer: 'FALSE', explain: 'Đoạn C: "at least one previous European visitor had reached it without recognising its significance".' },
            { q: 'Schliemann had received formal training as an archaeologist.', answer: 'FALSE', explain: 'Đoạn D: "Heinrich Schliemann, a wealthy German businessman with no formal archaeological training".' },
            { q: 'The Terracotta Army was discovered by professional archaeologists in 1974.', answer: 'FALSE', explain: 'Đoạn E: "discovered in 1974 by Chinese farmers digging a well".' }
          ]
        },
        {
          group: 'Questions 24–26',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Burckhardt entered Petra disguised as a Muslim __________.', answer: 'pilgrim', explain: 'Đoạn B: "disguising himself as a Muslim pilgrim".' },
            { q: 'The Maya civilisation appears to have suffered __________ conditions that overwhelmed agriculture.', answer: 'drought', explain: 'Đoạn F: "suffered drought conditions that overwhelmed its agricultural systems".' },
            { q: 'Future discoveries will likely emerge through __________ between scientists and local people.', answer: 'collaboration', explain: 'Đoạn G: "collaboration between scientists and the people whose heritage they study".' }
          ]
        }
      ],
      
      // ========== PASSAGE 3 QUESTIONS (14 questions) ==========
      [
        {
          group: 'Questions 27–32',
          type: 'matching-information',
          instruction: 'Reading Passage 3 has seven paragraphs, A-G. Which paragraph contains the following information?',
          paragraphs: ['A','B','C','D','E','F','G'],
          items: [
            { q: 'A reference to a journalist who popularised the concept of emotional intelligence.', answer: 'A', explain: 'Đoạn A: "the science journalist Daniel Goleman in his 1995 bestseller".' },
            { q: 'The names of the academic researchers who originally formulated emotional intelligence.', answer: 'B', explain: 'Đoạn B: "the researchers Peter Salovey and John Mayer".' },
            { q: 'A discussion of why testing methods for emotional intelligence are problematic.', answer: 'D', explain: 'Đoạn D: "The methodologies used to test emotional intelligence have also been questioned".' },
            { q: 'Mention of an East Asian cultural value that conflicts with Western EI frameworks.', answer: 'F', explain: 'Đoạn F: "East Asian cultures often value emotional restraint that Western emotional intelligence frameworks might interpret as low emotional awareness".' },
            { q: 'A list of life outcomes linked to higher emotional intelligence.', answer: 'C', explain: 'Đoạn C: liệt kê - học tập, sự nghiệp, hôn nhân, sức khỏe.' },
            { q: 'A summary of EI\'s influence on education and therapy.', answer: 'G', explain: 'Đoạn G: "Schools have introduced curricula... Therapy approaches increasingly emphasise emotional regulation".' }
          ]
        },
        {
          group: 'Questions 33–36',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to Salovey and Mayer\'s original formulation, emotional intelligence comprises:', options: ['A. Two main abilities', 'B. Four related abilities', 'C. Seven distinct components', 'D. An unlimited number of skills'], answer: 'B', explain: 'Đoạn B: "comprising four related abilities".' },
            { q: 'A major criticism of emotional intelligence is that it:', options: ['A. Cannot be measured at all', 'B. Overlaps with established personality traits', 'C. Was only invented in the 21st century', 'D. Has no practical applications'], answer: 'B', explain: 'Đoạn D: "the concept overlaps heavily with established personality traits".' },
            { q: 'Research evidence on emotional intelligence training programmes is:', options: ['A. Uniformly positive', 'B. Uniformly negative', 'C. Mixed at best', 'D. Not available'], answer: 'C', explain: 'Đoạn E: "Research evidence supporting the effectiveness of such programmes is mixed at best".' },
            { q: 'The author\'s overall view is that emotional intelligence:', options: ['A. Is a precisely measurable scientific concept', 'B. Has been completely discredited by research', 'C. Has practical influence even if measurement remains imprecise', 'D. Will be replaced by better concepts soon'], answer: 'C', explain: 'Đoạn G: "its influence on practical thinking about human relationships... has been substantial. The basic insight... seems sound even if measurement remains imprecise".' }
          ]
        },
        {
          group: 'Questions 37–40',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'Goleman\'s influential book on emotional intelligence was published in __________.', answer: '1995', explain: 'Đoạn A: "1995 bestseller".' },
            { q: 'Some EI tests rely on people\'s judgements about their own __________.', answer: 'abilities', explain: 'Đoạn D: "Some tests rely on people\'s judgements about their own abilities".' },
            { q: 'Most research on emotional intelligence has been conducted in __________ contexts.', answer: 'Western', explain: 'Đoạn F: "Most studies have been conducted in Western contexts".' },
            { q: 'Therapy approaches increasingly emphasise emotional __________.', answer: 'regulation', explain: 'Đoạn G: "Therapy approaches increasingly emphasise emotional regulation".' }
          ]
        }
      ]
    ]
  },

  // ==================== CAMBRIDGE 17 - TEST 2 ====================
  'cam17-t2': {
    title: 'Bird Migration',
    topic: 'Biology · Ornithology',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Wonder of Bird Migration',
      content: `<p><span class="para-num">A</span> Every year, billions of birds undertake journeys of extraordinary length and difficulty. The Arctic tern travels from the Arctic to Antarctica and back, covering roughly 40,000 miles annually — the longest migration of any animal. Bar-tailed godwits fly non-stop for over a week from Alaska to New Zealand, a distance of more than 7,000 miles. These remarkable feats of endurance and navigation have fascinated scientists and naturalists for centuries, yet many fundamental questions about bird migration remain unanswered.</p>
      
      <p><span class="para-num">B</span> Migration is driven primarily by the seasonal availability of food and suitable breeding conditions. In the temperate and polar regions, summer brings an abundance of insects and plant growth that can support large populations of breeding birds. As autumn approaches and these resources disappear, birds that cannot survive the cold winter must move to warmer climates or starve. Species that have evolved to take advantage of these seasonal patterns now make regular journeys between breeding grounds and wintering areas, sometimes spanning entire hemispheres.</p>
      
      <p><span class="para-num">C</span> How birds navigate over such vast distances has long been one of the most puzzling questions in biology. Research has revealed that birds use multiple cues simultaneously: the position of the sun during the day, the patterns of stars at night, and even the Earth\'s magnetic field. Experiments in special planetariums have shown that some species learn to recognize star patterns as young birds and use this knowledge throughout their lives. Other studies have demonstrated that pigeons and several migratory species contain tiny grains of magnetite in their beaks, which may function as biological compasses.</p>
      
      <p><span class="para-num">D</span> The physiological demands of migration are immense. Before departure, migrating birds dramatically increase their body weight by eating intensively, sometimes doubling their mass with stored fat that will fuel the journey. Some species also reduce the size of internal organs they will not need during flight, including portions of their digestive system, in order to reduce weight. Their muscles, particularly those powering the wings, undergo significant changes that increase efficiency. These transformations occur on a precise schedule controlled by changing day length and internal biological clocks.</p>
      
      <p><span class="para-num">E</span> Climate change is now profoundly affecting bird migration. Many species are arriving at their breeding grounds earlier in the spring than they did decades ago, apparently responding to warmer temperatures. This sounds like a positive adaptation, but it can create serious problems. The insects and plants on which migrating birds depend may not be available at the new arrival times, leaving birds without food when they most need it. Research in Europe has shown declines in species that have failed to adjust their timing rapidly enough.</p>
      
      <p><span class="para-num">F</span> Human activities pose other significant threats to migrating birds. The destruction of stopover sites — wetlands, forests, and other habitats where birds rest and refuel during their journeys — can be particularly devastating. A single critical stopover may be used by millions of birds each year, and its loss can affect populations across continents. Light pollution from cities disorients migrating birds, leading to collisions with buildings; window strikes alone kill hundreds of millions of birds annually in North America. Hunting along migration routes continues in some regions despite international protections.</p>
      
      <p><span class="para-num">G</span> Conservation efforts have produced some encouraging results. The protection of key wetlands along the East Asian-Australasian flyway has helped stabilize populations of several waterbird species that had been in steep decline. Citizen science projects have engaged millions of people in monitoring bird populations, providing data of unprecedented scale and resolution. Yet the challenges remain enormous. Effective protection requires international cooperation across the entire migration route — a single nation protecting its own territory cannot save birds that depend on habitats in many countries.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Hàng năm, hàng tỷ con chim thực hiện những hành trình dài và khó khăn phi thường. Chim nhạn Bắc Cực đi từ Bắc Cực đến Nam Cực và quay lại, khoảng 40,000 dặm/năm — cuộc di cư dài nhất của bất kỳ loài động vật nào. Chim godwit đuôi vạch bay không nghỉ hơn một tuần từ Alaska đến New Zealand.</p>
      
      <p><strong>Đoạn B:</strong> Di cư chủ yếu do tính sẵn có của thức ăn theo mùa và điều kiện sinh sản phù hợp. Ở vùng ôn đới và vùng cực, mùa hè mang lại nhiều côn trùng và thực vật. Khi mùa thu đến và nguồn lực biến mất, chim không thể sống sót qua mùa đông phải di chuyển đến vùng ấm hơn.</p>
      
      <p><strong>Đoạn C:</strong> Cách chim điều hướng qua khoảng cách lớn từ lâu là câu hỏi bí ẩn nhất. Nghiên cứu cho thấy chim sử dụng nhiều dấu hiệu đồng thời: vị trí mặt trời ban ngày, các mẫu sao ban đêm, và cả từ trường Trái đất. Chim bồ câu chứa các hạt nhỏ magnetite ở mỏ, có thể đóng vai trò la bàn sinh học.</p>
      
      <p><strong>Đoạn D:</strong> Nhu cầu sinh lý của di cư rất lớn. Trước khi khởi hành, chim tăng cân đáng kể bằng cách ăn nhiều, đôi khi nhân đôi khối lượng. Một số loài còn giảm kích thước cơ quan nội tạng không cần khi bay để giảm trọng lượng. Cơ bắp trải qua thay đổi đáng kể tăng hiệu quả.</p>
      
      <p><strong>Đoạn E:</strong> Biến đổi khí hậu đang ảnh hưởng sâu sắc đến di cư. Nhiều loài đến nơi sinh sản sớm hơn vào mùa xuân, có lẽ phản ứng với nhiệt độ ấm hơn. Côn trùng và thực vật chim phụ thuộc có thể không có sẵn vào thời gian đến mới. Nghiên cứu ở châu Âu cho thấy suy giảm các loài không thể điều chỉnh.</p>
      
      <p><strong>Đoạn F:</strong> Hoạt động con người gây mối đe dọa khác. Phá hủy các điểm dừng — đầm lầy, rừng — có thể đặc biệt tàn khốc. Ô nhiễm ánh sáng từ thành phố làm chim mất phương hướng, dẫn đến va chạm với tòa nhà. Va chạm cửa sổ giết hàng trăm triệu con chim mỗi năm ở Bắc Mỹ.</p>
      
      <p><strong>Đoạn G:</strong> Nỗ lực bảo tồn đã tạo ra một số kết quả khích lệ. Bảo vệ các đầm lầy then chốt dọc theo đường bay Đông Á-Australasia đã giúp ổn định quần thể. Các dự án khoa học công dân đã thu hút hàng triệu người theo dõi quần thể chim. Cần hợp tác quốc tế.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'The bar-tailed godwit completes its 7,000-mile journey without stopping.', answer: 'TRUE', explain: 'Đoạn A: "Bar-tailed godwits fly non-stop for over a week from Alaska to New Zealand".' },
          { q: 'Birds primarily migrate to escape predators in their breeding grounds.', answer: 'FALSE', explain: 'Đoạn B: di cư "driven primarily by the seasonal availability of food and suitable breeding conditions".' },
          { q: 'All migratory birds use the same navigation method.', answer: 'FALSE', explain: 'Đoạn C: "birds use multiple cues simultaneously" và mỗi loài dùng khác nhau.' },
          { q: 'Some birds shrink their digestive organs before migration.', answer: 'TRUE', explain: 'Đoạn D: "reduce the size of internal organs... including portions of their digestive system".' },
          { q: 'Birds arriving earlier at breeding grounds always benefit from climate change.', answer: 'FALSE', explain: 'Đoạn E: "This sounds like a positive adaptation, but it can create serious problems".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, magnetite in birds\' beaks:', options: ['A. Allows them to taste their food', 'B. May help them detect direction', 'C. Develops during long migrations', 'D. Is found only in pigeons'], answer: 'B', explain: 'Đoạn C: "may function as biological compasses".' },
          { q: 'Window strikes in North America kill approximately:', options: ['A. Thousands of birds annually', 'B. Tens of thousands of birds annually', 'C. Millions of birds annually', 'D. Hundreds of millions of birds annually'], answer: 'D', explain: 'Đoạn F: "window strikes alone kill hundreds of millions of birds annually in North America".' },
          { q: 'The protection of wetlands along the East Asian-Australasian flyway has:', options: ['A. Completely solved the problem of bird decline', 'B. Helped stabilize some waterbird populations', 'C. Been opposed by local communities', 'D. Failed despite considerable effort'], answer: 'B', explain: 'Đoạn G: "has helped stabilize populations of several waterbird species".' },
          { q: 'According to the final paragraph, effective bird protection requires:', options: ['A. Stricter laws within individual countries', 'B. Greater scientific research funding', 'C. International cooperation across entire migration routes', 'D. The relocation of vulnerable species'], answer: 'C', explain: 'Đoạn G: "Effective protection requires international cooperation across the entire migration route".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'The Arctic tern travels approximately __________ miles annually.', answer: '40,000', explain: 'Đoạn A: "roughly 40,000 miles annually".' },
          { q: 'Birds may __________ their body weight by storing fat before migration.', answer: 'double', explain: 'Đoạn D: "sometimes doubling their mass with stored fat".' },
          { q: 'Birds rest and refuel at __________ during their long journeys.', answer: 'stopover sites', explain: 'Đoạn F: "stopover sites — wetlands, forests, and other habitats where birds rest and refuel".' },
          { q: '__________ science projects have helped monitor bird populations.', answer: 'Citizen', explain: 'Đoạn G: "Citizen science projects have engaged millions of people".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 16 - TEST 2 ====================
  'cam16-t2': {
    title: 'The Science of Happiness',
    topic: 'Psychology · Wellbeing',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Science of Happiness',
      content: `<p><span class="para-num">A</span> For most of its history, psychology focused almost exclusively on what goes wrong in human minds. The field developed elaborate categories of mental illness and refined methods for treating depression, anxiety, and other disorders. Yet relatively little attention was given to what makes some people thrive — to what constitutes the psychology of happiness rather than the psychology of misery. This imbalance began to change around the turn of the millennium with the emergence of positive psychology, a movement championed by the American psychologist Martin Seligman among others.</p>
      
      <p><span class="para-num">B</span> Positive psychology asks fundamentally different questions from traditional clinical work. Rather than focusing on how to reduce suffering, it investigates what makes life worth living. What are the components of a happy and meaningful existence? Can these qualities be measured scientifically? Can they be deliberately cultivated? The answers emerging from this research have sometimes surprised both scientists and the public.</p>
      
      <p><span class="para-num">C</span> One of the most striking findings concerns the role of material wealth in happiness. Surveys conducted across many countries reveal a counterintuitive pattern. Within any given society, wealthier people do tend to be somewhat happier than poorer people, but this relationship is much weaker than most people assume. Once basic needs are met, additional income produces only modest gains in life satisfaction. Even more remarkably, the dramatic increase in wealth that the developed world has experienced since the 1950s has not produced any corresponding increase in average happiness. Researchers refer to this phenomenon as the "Easterlin paradox", after the economist who first identified it.</p>
      
      <p><span class="para-num">D</span> If money does not buy happiness beyond a certain point, what does? Research consistently identifies social relationships as among the most important factors. People with strong friendships, supportive family ties, and active community involvement report higher life satisfaction than those who lack these connections. The Harvard Study of Adult Development, which has followed hundreds of men for over eight decades, found that the quality of personal relationships at age fifty was a better predictor of physical and mental health at age eighty than cholesterol levels.</p>
      
      <p><span class="para-num">E</span> Engagement in meaningful activities also contributes substantially to happiness. The psychologist Mihaly Csikszentmihalyi coined the term "flow" to describe the state of complete absorption in a challenging but achievable task — the feeling that athletes call being "in the zone" and that scientists, artists, and craftspeople often report when fully engaged in their work. People who regularly experience flow report greater happiness than those whose lives consist primarily of passive entertainment, even when the passive activities seem more obviously pleasurable.</p>
      
      <p><span class="para-num">F</span> Perhaps the most actionable finding of positive psychology research concerns specific practices that can increase wellbeing. Regular expressions of gratitude — through writing letters of thanks, keeping a gratitude journal, or simply noting positive experiences — have been shown in controlled studies to produce measurable improvements in mood and life satisfaction. Acts of kindness toward others produce similar benefits, suggesting that generosity benefits the giver as much as the recipient. Mindfulness meditation, which involves training attention on present-moment experience without judgment, has accumulated substantial evidence for reducing anxiety and depression while increasing positive emotions.</p>
      
      <p><span class="para-num">G</span> Despite these promising findings, positive psychology has faced significant criticism. Some scholars argue that the field has overstated the malleability of happiness, ignoring the substantial role of genetic and circumstantial factors. Others worry that emphasis on individual happiness practices distracts attention from the social and economic conditions that affect wellbeing at a population level. Still, the basic insight of positive psychology — that the study of what goes right in human lives is as important as the study of what goes wrong — has fundamentally changed both research priorities and clinical practice. The science of happiness remains a young field, but it is producing knowledge with practical relevance for how we live.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Trong phần lớn lịch sử, tâm lý học tập trung gần như hoàn toàn vào những gì sai trong tâm trí con người. Sự mất cân bằng này bắt đầu thay đổi vào đầu thiên niên kỷ với sự xuất hiện của tâm lý học tích cực, do Martin Seligman dẫn đầu.</p>
      
      <p><strong>Đoạn B:</strong> Tâm lý học tích cực đặt câu hỏi khác cơ bản. Thay vì tập trung giảm đau khổ, nó nghiên cứu điều gì làm cuộc sống đáng sống. Các thành phần của cuộc sống hạnh phúc và ý nghĩa? Có thể đo lường khoa học? Có thể chủ động vun đắp?</p>
      
      <p><strong>Đoạn C:</strong> Một phát hiện nổi bật về vai trò của của cải vật chất với hạnh phúc. Trong xã hội, người giàu hạnh phúc hơn người nghèo, nhưng mối quan hệ này yếu hơn người ta nghĩ. Khi nhu cầu cơ bản đáp ứng, thu nhập thêm chỉ tạo ra lợi ích khiêm tốn. "Nghịch lý Easterlin" - sự gia tăng giàu có không tăng hạnh phúc trung bình.</p>
      
      <p><strong>Đoạn D:</strong> Nếu tiền không mua được hạnh phúc, vậy cái gì? Nghiên cứu xác định mối quan hệ xã hội là một trong những yếu tố quan trọng nhất. Nghiên cứu Harvard về Phát triển Người lớn theo dõi hàng trăm người đàn ông trong 80 năm cho thấy chất lượng mối quan hệ cá nhân ở tuổi 50 dự đoán sức khỏe ở tuổi 80 tốt hơn mức cholesterol.</p>
      
      <p><strong>Đoạn E:</strong> Tham gia hoạt động ý nghĩa cũng đóng góp đáng kể. Mihaly Csikszentmihalyi đặt thuật ngữ "flow" để mô tả trạng thái hấp thụ hoàn toàn vào nhiệm vụ thách thức nhưng khả thi. Người trải nghiệm flow thường xuyên báo cáo hạnh phúc lớn hơn.</p>
      
      <p><strong>Đoạn F:</strong> Phát hiện hành động được nhất là các thực hành cụ thể có thể tăng phúc lợi. Biểu hiện lòng biết ơn thường xuyên — viết thư cảm ơn, nhật ký biết ơn — đã được chứng minh cải thiện tâm trạng. Hành động tử tế mang lại lợi ích tương tự. Thiền chánh niệm có bằng chứng đáng kể.</p>
      
      <p><strong>Đoạn G:</strong> Bất chấp các phát hiện hứa hẹn, tâm lý học tích cực gặp chỉ trích. Một số học giả cho rằng lĩnh vực đã phóng đại tính dễ uốn nắn của hạnh phúc. Người khác lo lắng việc nhấn mạnh thực hành cá nhân làm phân tâm khỏi điều kiện xã hội kinh tế.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'For most of its history, psychology mainly studied mental disorders rather than wellbeing.', answer: 'TRUE', explain: 'Đoạn A: "psychology focused almost exclusively on what goes wrong in human minds".' },
          { q: 'Martin Seligman invented the term "positive psychology".', answer: 'NOT GIVEN', explain: 'Đoạn A nói ông là người ủng hộ phong trào nhưng không nói ai phát minh thuật ngữ.' },
          { q: 'Wealthier individuals in a society are generally happier than poorer ones.', answer: 'TRUE', explain: 'Đoạn C: "wealthier people do tend to be somewhat happier than poorer people".' },
          { q: 'Average happiness in developed countries has increased significantly since 1950.', answer: 'FALSE', explain: 'Đoạn C: "the dramatic increase in wealth... has not produced any corresponding increase in average happiness".' },
          { q: 'The Harvard Study of Adult Development began in the 1990s.', answer: 'NOT GIVEN', explain: 'Đoạn D nói nghiên cứu theo dõi trong 80 năm nhưng không cho biết bắt đầu khi nào.' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the Harvard Study, the quality of relationships at age 50 was:', options: ['A. Less important than cholesterol levels for later health', 'B. A better predictor of health at 80 than cholesterol', 'C. Unrelated to physical health outcomes', 'D. Only important for mental health, not physical health'], answer: 'B', explain: 'Đoạn D: "a better predictor of physical and mental health at age eighty than cholesterol levels".' },
          { q: 'The state of "flow" described by Csikszentmihalyi:', options: ['A. Occurs mainly during passive entertainment', 'B. Has been observed only in professional athletes', 'C. Involves complete absorption in challenging tasks', 'D. Cannot be cultivated through practice'], answer: 'C', explain: 'Đoạn E: "the state of complete absorption in a challenging but achievable task".' },
          { q: 'Research has shown that acts of kindness:', options: ['A. Benefit only the recipient', 'B. Mainly help those who are already happy', 'C. Benefit the giver as well as the recipient', 'D. Are less effective than gratitude practices'], answer: 'C', explain: 'Đoạn F: "generosity benefits the giver as much as the recipient".' },
          { q: 'A criticism of positive psychology mentioned in the passage is that it:', options: ['A. Uses unreliable measurement methods', 'B. May ignore social and economic factors affecting wellbeing', 'C. Has not produced any practical applications', 'D. Was developed too quickly without proper research'], answer: 'B', explain: 'Đoạn G: "emphasis on individual happiness practices distracts attention from the social and economic conditions".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'The relationship between wealth and happiness across nations is called the __________ paradox.', answer: 'Easterlin', explain: 'Đoạn C: "Researchers refer to this phenomenon as the Easterlin paradox".' },
          { q: 'Research shows that social __________ are among the most important factors for happiness.', answer: 'relationships', explain: 'Đoạn D: "Research consistently identifies social relationships as among the most important factors".' },
          { q: 'Writing in a __________ journal has been shown to improve mood.', answer: 'gratitude', explain: 'Đoạn F: "keeping a gratitude journal... measurable improvements in mood".' },
          { q: 'Mindfulness __________ has been shown to reduce anxiety and depression.', answer: 'meditation', explain: 'Đoạn F: "Mindfulness meditation... reducing anxiety and depression".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 15 - TEST 2 ====================
  'cam15-t2': {
    title: 'The Vikings',
    topic: 'History · Civilization',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'Beyond the Stereotypes: A New View of the Vikings',
      content: `<p><span class="para-num">A</span> Few historical peoples have been more misrepresented than the Vikings. Popular culture has long depicted them as horn-helmeted barbarians whose only interests were raiding, looting, and burning. Recent scholarship has produced a dramatically different picture. The Norse peoples who emerged from Scandinavia between the eighth and eleventh centuries were certainly capable of devastating violence, but they were also accomplished traders, skilled farmers, sophisticated craftspeople, and remarkable navigators whose journeys took them across most of the known world.</p>
      
      <p><span class="para-num">B</span> The persistent image of horn-helmeted warriors illustrates how popular misconceptions arise. No archaeological evidence has ever been found for Viking horned helmets. The myth appears to have originated in nineteenth-century opera costume design, particularly Wagner\'s operas about Norse legends. Actual Viking helmets, when they have survived, are simple iron caps with nose guards. The horned helmet has nonetheless become so firmly associated with the Vikings in the popular imagination that even some history textbooks continue to depict it.</p>
      
      <p><span class="para-num">C</span> Viking expansion was driven by complex factors. Population pressure in Scandinavia, combined with the limited agricultural potential of the rocky terrain, encouraged emigration. Political instability in the homeland made foreign adventures appealing for younger sons unable to inherit family lands. Most importantly, technological innovations in shipbuilding gave the Vikings unmatched mobility. Their longships, with their distinctive shallow draft and clinker-built construction, could travel both across open ocean and up rivers far into continental interiors. No European power could effectively counter this naval advantage for centuries.</p>
      
      <p><span class="para-num">D</span> While the Vikings did conduct famous raids on monasteries and coastal settlements, raiding was only one aspect of their activity. Extensive evidence shows that they also established trade networks of remarkable scale. Viking traders connected the Mediterranean with the Baltic, exchanging Scandinavian furs, amber, and walrus ivory for silver, silks, and spices from as far away as Central Asia. Archaeological finds in Sweden include thousands of Arab silver coins, evidence of extensive contact with the Islamic world. Some Viking traders served as bodyguards for the Byzantine emperors in Constantinople, where they became known as the Varangian Guard.</p>
      
      <p><span class="para-num">E</span> The Vikings also established remarkable permanent settlements far from their Scandinavian homeland. Iceland was settled around 870 CE and developed a distinctive culture that produced some of medieval Europe\'s greatest literature, the Icelandic sagas. From Iceland, Viking settlers reached Greenland in the late tenth century, establishing colonies that survived for nearly five hundred years before mysteriously dying out. Most remarkably, archaeological discoveries at L\'Anse aux Meadows in Newfoundland have confirmed that Vikings reached North America around 1000 CE, almost five centuries before Columbus.</p>
      
      <p><span class="para-num">F</span> Viking society itself was more sophisticated than stereotypes suggest. Their political institutions included a representative assembly called the Thing, where free men gathered to settle disputes, make laws, and elect leaders. The Icelandic Althing, founded in 930 CE, is among the oldest continuing parliamentary institutions in the world. Women in Viking society enjoyed legal rights unusual for the medieval period, including the right to own property, request divorce, and inherit wealth. Recent archaeological work has even identified female warriors in some Viking burials, though their prevalence remains debated.</p>
      
      <p><span class="para-num">G</span> The end of the Viking Age came gradually rather than dramatically. Conversion to Christianity, which spread through Scandinavia between the tenth and twelfth centuries, transformed Viking culture by integrating it more fully with broader European civilization. Settled life replaced raiding as the dominant economic pattern. The political consolidation of European states made successful raids increasingly difficult, and the territories that Vikings had conquered gradually merged with their host societies. Yet the cultural legacy of the Vikings remained immense, influencing the development of countries from Britain to Russia and contributing significantly to the diversity of medieval European civilization.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Ít dân tộc lịch sử nào bị xuyên tạc nhiều hơn người Viking. Văn hóa đại chúng từ lâu mô tả họ như những kẻ man rợ đội mũ có sừng. Nghiên cứu gần đây đã tạo ra hình ảnh khác biệt đáng kể. Người Bắc Âu cũng là thương nhân, nông dân, thợ thủ công khéo léo, nhà hàng hải.</p>
      
      <p><strong>Đoạn B:</strong> Hình ảnh chiến binh đội mũ có sừng minh họa quan niệm sai phổ biến hình thành thế nào. Không có bằng chứng khảo cổ nào về mũ Viking có sừng. Huyền thoại xuất phát từ thiết kế trang phục opera thế kỷ 19, đặc biệt là opera Wagner.</p>
      
      <p><strong>Đoạn C:</strong> Mở rộng Viking được thúc đẩy bởi các yếu tố phức tạp. Áp lực dân số, đất đai khô cằn, bất ổn chính trị. Quan trọng nhất, đổi mới công nghệ đóng thuyền cho Viking khả năng cơ động không sánh được. Tàu dài có mớn nước nông có thể đi biển và ngược dòng sông.</p>
      
      <p><strong>Đoạn D:</strong> Người Viking cũng thiết lập mạng lưới thương mại có quy mô đáng kể. Họ kết nối Địa Trung Hải với Baltic, đổi lông thú, hổ phách, ngà voi Bắc Cực lấy bạc, lụa, gia vị từ Trung Á. Khám phá ở Thụy Điển có hàng ngàn đồng bạc Ả Rập. Vệ binh Varangian phục vụ hoàng đế Byzantine.</p>
      
      <p><strong>Đoạn E:</strong> Người Viking cũng thành lập các khu định cư vĩnh viễn xa quê. Iceland được định cư khoảng 870 SCN. Từ Iceland, Viking đến Greenland cuối thế kỷ 10. Đặc biệt, khám phá ở L\'Anse aux Meadows ở Newfoundland xác nhận Viking đến Bắc Mỹ khoảng năm 1000 SCN — gần 5 thế kỷ trước Columbus.</p>
      
      <p><strong>Đoạn F:</strong> Xã hội Viking phức tạp hơn các định kiến. Hội đồng đại diện Thing - nơi đàn ông tự do tụ tập giải quyết tranh chấp, làm luật, bầu lãnh đạo. Althing Iceland thành lập năm 930 SCN. Phụ nữ Viking có quyền pháp lý bất thường vào thời trung cổ.</p>
      
      <p><strong>Đoạn G:</strong> Sự kết thúc của thời đại Viking đến từ từ. Cải đạo sang Cơ đốc giáo đã biến đổi văn hóa Viking. Đời sống định cư thay thế cướp bóc. Củng cố chính trị của các quốc gia châu Âu khiến cướp bóc thành công ngày càng khó.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–6',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Archaeological evidence supports the popular image of horned Viking helmets.', answer: 'FALSE', explain: 'Đoạn B: "No archaeological evidence has ever been found for Viking horned helmets".' },
          { q: 'The myth of horned Viking helmets came from nineteenth-century opera.', answer: 'TRUE', explain: 'Đoạn B: "The myth appears to have originated in nineteenth-century opera costume design".' },
          { q: 'Viking longships could only travel on open ocean, not on rivers.', answer: 'FALSE', explain: 'Đoạn C: "could travel both across open ocean and up rivers far into continental interiors".' },
          { q: 'Viking traders had no contact with the Islamic world.', answer: 'FALSE', explain: 'Đoạn D: "Archaeological finds in Sweden include thousands of Arab silver coins, evidence of extensive contact with the Islamic world".' },
          { q: 'The Viking colony in Greenland lasted for almost five hundred years.', answer: 'TRUE', explain: 'Đoạn E: "establishing colonies that survived for nearly five hundred years".' },
          { q: 'The first Viking settlements in North America were as large as those in Iceland.', answer: 'NOT GIVEN', explain: 'Đoạn E xác nhận Viking đến Bắc Mỹ nhưng không so sánh quy mô khu định cư.' }
        ]
      },
      {
        group: 'Questions 7–10',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, Viking expansion was driven by:', options: ['A. A single overwhelming factor', 'B. Religious crusades against Christianity', 'C. Multiple factors including population pressure', 'D. The need to escape Roman invasion'], answer: 'C', explain: 'Đoạn C: "Viking expansion was driven by complex factors. Population pressure... limited agricultural potential... Political instability... technological innovations".' },
          { q: 'The Varangian Guard consisted of:', options: ['A. Christian missionaries from Constantinople', 'B. Viking traders serving as Byzantine bodyguards', 'C. Norwegian noblemen exiled from their homeland', 'D. Soldiers who guarded Viking trade routes'], answer: 'B', explain: 'Đoạn D: "Some Viking traders served as bodyguards for the Byzantine emperors in Constantinople, where they became known as the Varangian Guard".' },
          { q: 'The Icelandic Althing is significant because it:', options: ['A. Was the first Christian institution in Iceland', 'B. Allowed only nobles to attend', 'C. Is among the oldest continuing parliamentary institutions', 'D. Was abolished during the Viking conversion to Christianity'], answer: 'C', explain: 'Đoạn F: "is among the oldest continuing parliamentary institutions in the world".' },
          { q: 'The Viking Age ended primarily because of:', options: ['A. A massive military defeat in Britain', 'B. Climate change making Scandinavia uninhabitable', 'C. Multiple gradual changes including Christianization', 'D. The Black Death devastating Scandinavian populations'], answer: 'C', explain: 'Đoạn G: "The end of the Viking Age came gradually... Conversion to Christianity... Settled life replaced raiding... political consolidation".' }
        ]
      },
      {
        group: 'Questions 11–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'Vikings traded goods such as furs, amber and __________ ivory.', answer: 'walrus', explain: 'Đoạn D: "Scandinavian furs, amber, and walrus ivory".' },
          { q: 'Viking settlement of Iceland began around the year __________.', answer: '870', explain: 'Đoạn E: "Iceland was settled around 870 CE".' },
          { q: 'Vikings reached North America almost five centuries before __________.', answer: 'Columbus', explain: 'Đoạn E: "almost five centuries before Columbus".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 14 - TEST 2 ====================
  'cam14-t2': {
    title: 'Renewable Energy',
    topic: 'Environment · Energy',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Renewable Energy Revolution',
      content: `<p><span class="para-num">A</span> A transformation is underway in how the world generates electricity. For over a century, the burning of fossil fuels — coal, oil, and natural gas — provided the overwhelming majority of the world\'s power. Renewable sources such as wind and solar were considered niche technologies, useful in remote locations but too expensive and unreliable for widespread adoption. Within the past two decades, this situation has been transformed. Renewable electricity now provides over a quarter of the world\'s power, with this share growing rapidly each year.</p>
      
      <p><span class="para-num">B</span> The economics underlying this shift are striking. The cost of solar panels has fallen by approximately ninety percent since 2010, while the cost of wind turbines has dropped by about sixty percent in the same period. Renewables are now the cheapest form of new electricity generation in most countries, a complete reversal of the situation prevailing only a decade ago. This price decline has been driven by manufacturing scale, technological improvements, and accumulated learning across the industry. There is no indication that prices have yet reached their floor; further reductions seem likely.</p>
      
      <p><span class="para-num">C</span> Solar and wind power do face significant technical challenges, however. Unlike conventional power plants that can be turned on and off as needed, solar and wind generation depends on weather conditions beyond human control. The sun does not shine at night, and winds can be still for days at a time. This variability — what engineers call intermittency — creates difficulties for electrical grids designed to balance supply and demand continuously. Without solutions, the share of renewables that grids can accept is limited.</p>
      
      <p><span class="para-num">D</span> Energy storage offers one potential solution. Batteries that store electricity for use when generation is low have advanced dramatically, with costs falling and capacity expanding rapidly. Lithium-ion batteries, originally developed for portable electronics, are now being deployed at grid scale in many countries. Other storage technologies under development include pumped hydroelectric facilities, where excess power is used to pump water uphill for later use, and various chemical storage systems. None of these solutions is yet inexpensive enough to fully solve the intermittency problem, but progress is accelerating.</p>
      
      <p><span class="para-num">E</span> Grid modernization also plays a critical role. Traditional electrical grids were designed to transmit power from large centralized plants to consumers, with limited intelligence about real-time conditions. The renewable transition requires "smart grids" capable of handling many small generators feeding power into the system from diverse locations, while also responding dynamically to changing demand. These upgrades require massive investment, but they can also produce significant efficiency improvements that justify the cost.</p>
      
      <p><span class="para-num">F</span> Different countries have taken markedly different approaches to the renewable transition. Germany\'s ambitious Energiewende ("energy transition") policy has driven renewable adoption while phasing out nuclear power, though this has produced mixed results — including some increase in coal use as a backup. China leads the world in absolute renewable deployment, having become both the largest producer and the largest installer of solar panels and wind turbines. The United States has pursued a more market-driven approach, with state-level policies producing dramatically different outcomes across the country.</p>
      
      <p><span class="para-num">G</span> The implications of the renewable transition extend far beyond electricity. Transportation is now undergoing similar disruption with the rise of electric vehicles, which threaten to make oil consumption obsolete within decades if current trends continue. Industrial heating, currently dominated by natural gas, is being challenged by various electrification technologies. Even agriculture is exploring renewable approaches through innovations like vertical farming powered by clean electricity. The full economic and political consequences of these changes will unfold over decades, transforming not just energy systems but the broader structure of the global economy.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Một sự chuyển đổi đang diễn ra trong cách thế giới tạo ra điện. Trong hơn một thế kỷ, đốt nhiên liệu hóa thạch cung cấp đa số áp đảo điện năng. Các nguồn tái tạo như gió và mặt trời được coi là công nghệ ngách. Trong hai thập kỷ qua, điều này đã thay đổi. Điện tái tạo hiện cung cấp hơn 1/4 năng lượng thế giới.</p>
      
      <p><strong>Đoạn B:</strong> Kinh tế đằng sau sự thay đổi này rất đáng chú ý. Chi phí tấm pin mặt trời giảm khoảng 90% từ 2010, chi phí tua-bin gió giảm khoảng 60% cùng kỳ. Năng lượng tái tạo hiện là hình thức tạo điện mới rẻ nhất ở hầu hết các nước.</p>
      
      <p><strong>Đoạn C:</strong> Năng lượng mặt trời và gió đối mặt với thách thức kỹ thuật đáng kể. Không như nhà máy điện thông thường, sản xuất mặt trời và gió phụ thuộc vào điều kiện thời tiết. Mặt trời không chiếu vào ban đêm, gió có thể đứng yên trong nhiều ngày. Tính biến đổi (intermittency) này tạo ra khó khăn cho lưới điện.</p>
      
      <p><strong>Đoạn D:</strong> Lưu trữ năng lượng là một giải pháp tiềm năng. Pin lithium-ion ban đầu phát triển cho điện tử cầm tay, hiện được triển khai ở quy mô lưới ở nhiều nước. Công nghệ lưu trữ khác đang phát triển: thủy điện bơm, hệ thống lưu trữ hóa học.</p>
      
      <p><strong>Đoạn E:</strong> Hiện đại hóa lưới điện cũng đóng vai trò quan trọng. Lưới điện truyền thống được thiết kế truyền tải điện từ nhà máy lớn tập trung đến người tiêu dùng. Chuyển đổi tái tạo yêu cầu "lưới điện thông minh".</p>
      
      <p><strong>Đoạn F:</strong> Các quốc gia khác nhau có cách tiếp cận rõ ràng khác nhau. Chính sách Energiewende của Đức thúc đẩy tái tạo trong khi loại bỏ điện hạt nhân. Trung Quốc dẫn đầu thế giới về triển khai tái tạo tuyệt đối. Hoa Kỳ theo cách tiếp cận thị trường hơn.</p>
      
      <p><strong>Đoạn G:</strong> Hàm ý của quá trình chuyển đổi tái tạo vượt xa điện năng. Giao thông vận tải đang bị đột phá tương tự với sự gia tăng xe điện. Sưởi ấm công nghiệp đang bị thách thức bởi các công nghệ điện hóa khác nhau.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Renewable energy now provides more than half of global electricity.', answer: 'FALSE', explain: 'Đoạn A: "over a quarter of the world\'s power" - hơn 1/4, không phải hơn nửa.' },
          { q: 'Solar panels have become cheaper than wind turbines in price reduction.', answer: 'TRUE', explain: 'Đoạn B: pin mặt trời giảm 90% còn tua-bin gió giảm 60% - mặt trời giảm nhiều hơn.' },
          { q: 'The variability of solar and wind power is unlikely to create grid problems.', answer: 'FALSE', explain: 'Đoạn C: "This variability... creates difficulties for electrical grids".' },
          { q: 'Lithium-ion batteries were originally developed specifically for grid storage.', answer: 'FALSE', explain: 'Đoạn D: "originally developed for portable electronics".' },
          { q: 'China leads the world in renewable energy deployment.', answer: 'TRUE', explain: 'Đoạn F: "China leads the world in absolute renewable deployment".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, the cost reduction in renewable energy is due to:', options: ['A. Government subsidies in developing countries', 'B. Manufacturing scale and technological improvements', 'C. Decreased raw material prices globally', 'D. New regulations limiting fossil fuels'], answer: 'B', explain: 'Đoạn B: "driven by manufacturing scale, technological improvements, and accumulated learning".' },
          { q: '"Smart grids" are designed to:', options: ['A. Reduce electricity demand from consumers', 'B. Generate electricity from solar power directly', 'C. Handle many small generators and dynamic demand', 'D. Replace traditional power plants entirely'], answer: 'C', explain: 'Đoạn E: "capable of handling many small generators feeding power... while also responding dynamically to changing demand".' },
          { q: 'Germany\'s energy transition policy has:', options: ['A. Been an unqualified success', 'B. Produced mixed results including some increase in coal use', 'C. Completely eliminated nuclear power without issues', 'D. Been copied exactly by China and the US'], answer: 'B', explain: 'Đoạn F: "produced mixed results — including some increase in coal use as a backup".' },
          { q: 'The renewable energy transition is expected to affect:', options: ['A. Only the electricity sector', 'B. Mainly developed countries', 'C. Multiple sectors including transportation and industry', 'D. Only urban populations significantly'], answer: 'C', explain: 'Đoạn G: "Transportation is now undergoing similar disruption... Industrial heating... Even agriculture".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'The cost of solar panels has fallen by approximately __________ percent since 2010.', answer: 'ninety', explain: 'Đoạn B: "The cost of solar panels has fallen by approximately ninety percent since 2010".' },
          { q: 'Engineers call the variability of renewable energy __________.', answer: 'intermittency', explain: 'Đoạn C: "This variability — what engineers call intermittency".' },
          { q: 'Germany\'s energy transition policy is called __________.', answer: 'Energiewende', explain: 'Đoạn F: "Germany\'s ambitious Energiewende".' },
          { q: 'The transportation sector is being disrupted by the rise of __________ vehicles.', answer: 'electric', explain: 'Đoạn G: "Transportation is now undergoing similar disruption with the rise of electric vehicles".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 13 - TEST 2 ====================
  'cam13-t2': {
    title: 'The Mystery of Memory',
    topic: 'Neuroscience · Psychology',
    difficulty: 'Hard',
    passages: [{
      label: 'Reading Passage 1',
      title: 'How Memory Shapes Our Lives',
      content: `<p><span class="para-num">A</span> Memory is so fundamental to human experience that we rarely pause to consider how strange and complex it actually is. Without memory, every moment would be an isolated experience, disconnected from anything that came before. We would have no sense of personal identity, no ability to learn from past mistakes, no way to plan for the future. Yet for all its centrality to our lives, memory remains one of the most mysterious capacities of the human mind. Even the most sophisticated modern research has only begun to unravel its workings.</p>
      
      <p><span class="para-num">B</span> For much of the twentieth century, memory was thought to function like a video recorder — faithfully capturing experiences for later playback. Research has thoroughly demolished this metaphor. Memory turns out to be reconstructive rather than reproductive. Each time we remember an event, we do not simply replay a recording; instead, our brain assembles fragments of information into a coherent narrative. This process is influenced by our current mood, expectations, and beliefs. The "memory" we experience is more a creation of the present moment than an accurate record of the past.</p>
      
      <p><span class="para-num">C</span> The reconstructive nature of memory has profound implications. Elizabeth Loftus, a pioneering researcher in this field, has demonstrated through extensive experiments that memories can be deliberately altered by suggestive questioning. In one famous study, participants who watched a film of a car accident were later asked about it using different verbs — "smashed", "collided", or "contacted". Those who heard "smashed" not only reported higher speeds but also remembered seeing broken glass that had not been present in the original film. Such findings have raised serious questions about the reliability of eyewitness testimony in legal proceedings.</p>
      
      <p><span class="para-num">D</span> Different types of memory operate through distinct brain systems. Short-term memory holds information for seconds or minutes — the phone number you remember just long enough to dial. Working memory allows us to manipulate this information mentally, such as when we add two numbers without writing them down. Long-term memory stores information that may persist for a lifetime, though even long-term memories continue to be modified each time they are accessed. Yet another system, procedural memory, retains skills like riding a bicycle, which can persist even when other forms of memory have been damaged.</p>
      
      <p><span class="para-num">E</span> The hippocampus, a small seahorse-shaped structure deep in the brain, plays a critical role in forming new memories. Patients who have suffered damage to this region can recall events from before their injury but cannot form new long-term memories. The most famous such patient, known as H.M., underwent experimental surgery in 1953 to treat epilepsy. He lived for another fifty-five years, but his subjective experience reset every few minutes. He remained unable to remember his caregivers despite seeing them daily, yet he became, paradoxically, one of the most thoroughly studied individuals in the history of psychology.</p>
      
      <p><span class="para-num">F</span> Sleep plays an essential role in memory consolidation. Information acquired during the day is processed and integrated into long-term storage during the night, particularly during deep sleep stages. Studies have shown that students who sleep after learning material remember it significantly better than those who stay awake for the same period. The brain appears to actively select which experiences to consolidate, prioritizing those tagged as emotionally significant or otherwise important. This selective consolidation may explain why we remember our wedding day better than the equally long day that preceded or followed it.</p>
      
      <p><span class="para-num">G</span> Memory research has practical applications in many fields. Educational techniques like spaced repetition, where material is reviewed at gradually increasing intervals, exploit known properties of memory consolidation to dramatically improve learning efficiency. Medical research aims to develop treatments for Alzheimer\'s disease and other forms of dementia that erode memory in old age. Perhaps most remarkably, neuroscientists have begun to identify specific neural circuits that encode particular memories, raising the future possibility of selectively modifying traumatic memories to treat conditions like post-traumatic stress disorder. The implications of this research extend far beyond the laboratory into questions about identity, ethics, and what it means to be human.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Trí nhớ rất cơ bản với trải nghiệm con người đến mức chúng ta hiếm khi dừng lại để xem xét nó kỳ lạ và phức tạp ra sao. Không có trí nhớ, mọi khoảnh khắc sẽ là trải nghiệm cô lập. Chúng ta không có ý thức về bản sắc cá nhân, không có khả năng học từ sai lầm.</p>
      
      <p><strong>Đoạn B:</strong> Trong phần lớn thế kỷ 20, trí nhớ được nghĩ hoạt động như máy ghi hình - trung thực ghi lại trải nghiệm để phát lại. Nghiên cứu đã phá bỏ ẩn dụ này. Trí nhớ là tái tạo, không phải tái sản xuất. Mỗi lần chúng ta nhớ, não lắp ráp các mảnh thông tin thành câu chuyện mạch lạc.</p>
      
      <p><strong>Đoạn C:</strong> Bản chất tái tạo của trí nhớ có ý nghĩa sâu sắc. Elizabeth Loftus đã chứng minh trí nhớ có thể bị thay đổi bằng câu hỏi gợi ý. Trong nghiên cứu, người xem phim tai nạn xe được hỏi bằng các động từ khác nhau - "smashed", "collided" - những người nghe "smashed" báo cáo tốc độ cao hơn và nhớ thấy kính vỡ không có trong phim gốc.</p>
      
      <p><strong>Đoạn D:</strong> Các loại trí nhớ khác nhau hoạt động qua các hệ thống não riêng biệt. Trí nhớ ngắn hạn giữ thông tin trong vài giây/phút. Trí nhớ làm việc cho phép thao tác thông tin trong đầu. Trí nhớ dài hạn lưu trữ thông tin trong cả đời. Trí nhớ thủ tục giữ các kỹ năng như đi xe đạp.</p>
      
      <p><strong>Đoạn E:</strong> Hồi hải mã, cấu trúc nhỏ hình ngựa biển sâu trong não, đóng vai trò then chốt trong hình thành trí nhớ mới. Bệnh nhân tổn thương vùng này có thể nhớ sự kiện trước chấn thương nhưng không thể tạo trí nhớ dài hạn mới. Bệnh nhân H.M. nổi tiếng đã phẫu thuật năm 1953 và sống thêm 55 năm với trí nhớ chủ quan reset vài phút.</p>
      
      <p><strong>Đoạn F:</strong> Giấc ngủ đóng vai trò thiết yếu trong củng cố trí nhớ. Thông tin tiếp thu trong ngày được xử lý và tích hợp vào lưu trữ dài hạn vào ban đêm, đặc biệt trong giấc ngủ sâu. Sinh viên ngủ sau khi học nhớ tốt hơn đáng kể so với người thức cùng thời gian.</p>
      
      <p><strong>Đoạn G:</strong> Nghiên cứu trí nhớ có ứng dụng thực tế trong nhiều lĩnh vực. Kỹ thuật giáo dục như ôn tập giãn cách cải thiện hiệu quả học tập đáng kể. Nghiên cứu y học nhằm phát triển điều trị cho Alzheimer. Các nhà khoa học thần kinh đã bắt đầu xác định các mạch thần kinh mã hóa trí nhớ cụ thể.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–6',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Modern research has confirmed that memory works like a video recorder.', answer: 'FALSE', explain: 'Đoạn B: "Research has thoroughly demolished this metaphor".' },
          { q: 'Our current emotional state can affect how we remember past events.', answer: 'TRUE', explain: 'Đoạn B: "This process is influenced by our current mood, expectations, and beliefs".' },
          { q: 'Elizabeth Loftus\'s studies have changed legal practices regarding eyewitnesses.', answer: 'NOT GIVEN', explain: 'Đoạn C nói nghiên cứu của bà đặt câu hỏi về độ tin cậy của nhân chứng, nhưng không nói luật pháp đã thay đổi.' },
          { q: 'Skills like riding a bicycle are stored in a different memory system from facts.', answer: 'TRUE', explain: 'Đoạn D: "procedural memory, retains skills like riding a bicycle, which can persist even when other forms of memory have been damaged".' },
          { q: 'Patient H.M. could remember his caregivers if he saw them frequently.', answer: 'FALSE', explain: 'Đoạn E: "He remained unable to remember his caregivers despite seeing them daily".' },
          { q: 'Students who sleep after learning perform better on memory tests.', answer: 'TRUE', explain: 'Đoạn F: "students who sleep after learning material remember it significantly better".' }
        ]
      },
      {
        group: 'Questions 7–10',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'In Loftus\'s experiment, participants who heard the word "smashed":', options: ['A. Refused to answer further questions', 'B. Reported higher speeds and remembered glass that was not in the film', 'C. Could not remember the accident at all', 'D. Provided more accurate accounts than other groups'], answer: 'B', explain: 'Đoạn C: "Those who heard \'smashed\' not only reported higher speeds but also remembered seeing broken glass that had not been present".' },
          { q: 'Damage to the hippocampus typically results in:', options: ['A. Loss of all memories', 'B. Inability to recall childhood events', 'C. Inability to form new long-term memories', 'D. Loss of motor skills'], answer: 'C', explain: 'Đoạn E: "can recall events from before their injury but cannot form new long-term memories".' },
          { q: 'According to the passage, the brain consolidates memories that are:', options: ['A. Most recent', 'B. Selected as emotionally important', 'C. Repeated many times', 'D. Easy to recall'], answer: 'B', explain: 'Đoạn F: "prioritizing those tagged as emotionally significant or otherwise important".' },
          { q: 'Spaced repetition is mentioned as:', options: ['A. A potential treatment for amnesia', 'B. An educational technique based on memory research', 'C. A way to detect false memories', 'D. A controversial new therapy'], answer: 'B', explain: 'Đoạn G: "Educational techniques like spaced repetition, where material is reviewed at gradually increasing intervals".' }
        ]
      },
      {
        group: 'Questions 11–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'Memory is described as __________ rather than reproductive.', answer: 'reconstructive', explain: 'Đoạn B: "Memory turns out to be reconstructive rather than reproductive".' },
          { q: 'The __________ is a brain structure essential for forming new memories.', answer: 'hippocampus', explain: 'Đoạn E: "The hippocampus... plays a critical role in forming new memories".' },
          { q: 'Memory consolidation happens particularly during __________ sleep stages.', answer: 'deep', explain: 'Đoạn F: "during the night, particularly during deep sleep stages".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 12 - TEST 2 ====================
  'cam12-t2': {
    title: 'Forensic Science',
    topic: 'Science · Crime Investigation',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Evolution of Forensic Science',
      content: `<p><span class="para-num">A</span> Forensic science — the application of scientific methods to legal questions, particularly criminal investigations — has been transformed beyond recognition over the past century. In the late nineteenth century, criminal investigations relied heavily on witness testimony and confessions, often obtained through dubious means. Today, microscopic traces of evidence at a crime scene can identify a single individual among billions, while sophisticated chemical analysis can reveal what someone ate, where they traveled, and even how they died, sometimes years after the event.</p>
      
      <p><span class="para-num">B</span> The first major advance in forensic science was fingerprint identification, pioneered in the late nineteenth century by figures including the British scientist Francis Galton. The recognition that each individual\'s fingerprints are unique and remain unchanged throughout life provided the first reliable means of personal identification at crime scenes. Despite being over a hundred years old, fingerprint analysis remains widely used today. Critics have raised concerns about the reliability of fingerprint matching, particularly when working with partial or distorted prints, but for clean comparisons the technique remains remarkably effective.</p>
      
      <p><span class="para-num">C</span> The revolution that transformed forensic science arrived in 1984, when British geneticist Alec Jeffreys developed the technique of DNA fingerprinting. By analyzing specific regions of the genome that vary greatly between individuals, scientists could identify a person from the tiniest biological sample — a drop of blood, a single hair, or a few skin cells. Within months of its development, DNA evidence had been used to identify a murderer, and within decades it had helped exonerate hundreds of people wrongly convicted on the basis of older evidence. The Innocence Project in the United States has secured the release of over three hundred wrongfully imprisoned individuals through DNA testing.</p>
      
      <p><span class="para-num">D</span> Modern DNA analysis can extract useful information from samples that would have been considered useless decades ago. Touch DNA — genetic material left simply by touching an object — can sometimes be analyzed from quantities of cellular material invisible to the naked eye. Mitochondrial DNA, which is passed only from mother to child, can be extracted from samples too degraded for standard analysis. These techniques have enabled investigators to solve "cold cases" that had remained unsolved for decades, sometimes identifying suspects long after their original capture would have seemed possible.</p>
      
      <p><span class="para-num">E</span> Beyond DNA, contemporary forensic science draws on an enormous range of specialized disciplines. Forensic anthropology examines skeletal remains to determine the age, sex, height, and ancestry of unidentified individuals, sometimes helping to identify victims of mass disasters or historical crimes. Forensic entomology studies insects found on or near bodies to estimate the time and circumstances of death — different species colonize remains in predictable sequences depending on conditions. Forensic toxicology can detect drugs and poisons in samples taken long after death, sometimes from hair samples that retain traces of substances ingested years earlier.</p>
      
      <p><span class="para-num">F</span> Digital forensics has emerged as one of the fastest-growing branches of the discipline. Modern crimes increasingly leave electronic traces — emails, text messages, location data from mobile phones, financial transactions, internet search histories. Investigators with specialized training can recover information that suspects believed they had permanently deleted. The widespread use of CCTV and smart home devices has created new sources of evidence, though these technologies also raise complex questions about privacy and surveillance. Investigators must keep pace with rapidly evolving technology while courts struggle to apply legal principles developed for an analog world.</p>
      
      <p><span class="para-num">G</span> Despite its impressive capabilities, forensic science also faces serious challenges. High-profile errors have undermined public confidence in some traditional techniques, including bite mark analysis and handwriting comparison. Critics argue that some forensic disciplines have presented themselves as more scientific than they actually are, with experts testifying with greater certainty than the underlying evidence justifies. A landmark 2009 report by the United States National Academy of Sciences called for major reforms in forensic practices, including stricter scientific standards and reduced reliance on subjective interpretation. The field continues to balance the powerful new tools that science provides with the demands for rigor that scientific evidence requires.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Khoa học pháp y - ứng dụng phương pháp khoa học vào các vấn đề pháp lý - đã được biến đổi không thể nhận ra trong thế kỷ qua. Cuối thế kỷ 19, điều tra dựa nhiều vào lời khai nhân chứng và lời thú nhận. Ngày nay, dấu vết kính hiển vi có thể xác định một cá nhân trong hàng tỷ.</p>
      
      <p><strong>Đoạn B:</strong> Tiến bộ lớn đầu tiên trong khoa học pháp y là nhận dạng dấu vân tay, do Francis Galton tiên phong cuối thế kỷ 19. Vân tay mỗi người là duy nhất và không thay đổi suốt đời. Dù hơn trăm tuổi, phân tích dấu vân tay vẫn được dùng rộng rãi.</p>
      
      <p><strong>Đoạn C:</strong> Cách mạng đến năm 1984 khi nhà di truyền học Anh Alec Jeffreys phát triển kỹ thuật vân tay DNA. Bằng phân tích các vùng gen biến đổi nhiều giữa các cá nhân, có thể xác định người từ mẫu sinh học nhỏ nhất. Dự án Innocence ở Mỹ đã đảm bảo việc thả hơn 300 người bị tù oan.</p>
      
      <p><strong>Đoạn D:</strong> Phân tích DNA hiện đại có thể trích xuất thông tin hữu ích từ mẫu mà thập kỷ trước không thể. Touch DNA - vật liệu di truyền để lại khi chạm vật - có thể phân tích từ lượng tế bào vô hình. DNA ti thể có thể trích từ mẫu bị thoái hóa.</p>
      
      <p><strong>Đoạn E:</strong> Ngoài DNA, khoa học pháp y hiện đại dựa vào nhiều lĩnh vực chuyên sâu. Nhân học pháp y xem xét hài cốt xác định tuổi, giới, chiều cao. Côn trùng học pháp y nghiên cứu côn trùng để ước tính thời điểm tử vong. Độc chất học pháp y phát hiện thuốc và chất độc.</p>
      
      <p><strong>Đoạn F:</strong> Pháp y số đã nổi lên là một trong các nhánh phát triển nhanh nhất. Tội phạm hiện đại ngày càng để lại dấu vết điện tử - email, tin nhắn, dữ liệu vị trí từ điện thoại. Điều tra viên có thể khôi phục thông tin nghi phạm tưởng đã xóa.</p>
      
      <p><strong>Đoạn G:</strong> Dù có khả năng ấn tượng, khoa học pháp y cũng gặp thách thức nghiêm trọng. Sai sót nổi tiếng đã làm suy giảm niềm tin công chúng vào một số kỹ thuật truyền thống. Báo cáo 2009 của Viện Hàn lâm Khoa học Mỹ kêu gọi cải cách lớn trong thực hành pháp y.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Late nineteenth-century investigations often relied on confessions obtained through questionable methods.', answer: 'TRUE', explain: 'Đoạn A: "criminal investigations relied heavily on witness testimony and confessions, often obtained through dubious means".' },
          { q: 'Fingerprint analysis is no longer considered useful in modern investigations.', answer: 'FALSE', explain: 'Đoạn B: "fingerprint analysis remains widely used today" và "remains remarkably effective".' },
          { q: 'DNA fingerprinting was developed by an American scientist.', answer: 'FALSE', explain: 'Đoạn C: "British geneticist Alec Jeffreys".' },
          { q: 'The Innocence Project has freed more than 300 wrongfully imprisoned people.', answer: 'TRUE', explain: 'Đoạn C: "secured the release of over three hundred wrongfully imprisoned individuals".' },
          { q: 'Mitochondrial DNA is inherited from both parents equally.', answer: 'FALSE', explain: 'Đoạn D: "Mitochondrial DNA, which is passed only from mother to child".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, forensic entomology helps investigators by:', options: ['A. Identifying victims through their dental records', 'B. Estimating time of death from insect activity', 'C. Detecting poisons in body tissues', 'D. Analyzing handwriting in suicide notes'], answer: 'B', explain: 'Đoạn E: "Forensic entomology studies insects found on or near bodies to estimate the time and circumstances of death".' },
          { q: 'Digital forensics is described as:', options: ['A. The oldest branch of forensic science', 'B. One of the fastest-growing forensic disciplines', 'C. Less reliable than physical evidence', 'D. Mainly useful for financial crimes'], answer: 'B', explain: 'Đoạn F: "Digital forensics has emerged as one of the fastest-growing branches".' },
          { q: 'The 2009 National Academy of Sciences report called for:', options: ['A. The elimination of DNA evidence', 'B. Stricter scientific standards in forensic practices', 'C. The closure of forensic laboratories', 'D. Greater use of bite mark analysis'], answer: 'B', explain: 'Đoạn G: "called for major reforms in forensic practices, including stricter scientific standards".' },
          { q: 'According to the passage, a concern about traditional forensic techniques is that:', options: ['A. They are too expensive to use widely', 'B. They have been completely replaced by DNA', 'C. Some experts present them as more scientific than they really are', 'D. They cannot be used in international investigations'], answer: 'C', explain: 'Đoạn G: "some forensic disciplines have presented themselves as more scientific than they actually are".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'DNA fingerprinting was developed in __________.', answer: '1984', explain: 'Đoạn C: "in 1984, when British geneticist Alec Jeffreys developed".' },
          { q: '__________ DNA refers to genetic material left when someone touches an object.', answer: 'Touch', explain: 'Đoạn D: "Touch DNA — genetic material left simply by touching an object".' },
          { q: 'Hair samples can retain traces of substances consumed years earlier, useful in forensic __________.', answer: 'toxicology', explain: 'Đoạn E: "Forensic toxicology can detect drugs and poisons... from hair samples".' },
          { q: 'Two forensic techniques that have faced criticism are bite mark analysis and __________ comparison.', answer: 'handwriting', explain: 'Đoạn G: "including bite mark analysis and handwriting comparison".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 11 - TEST 2 ====================
  'cam11-t2': {
    title: 'The Art of Map-Making',
    topic: 'History · Geography',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Art and Science of Map-Making',
      content: `<p><span class="para-num">A</span> Maps are among humanity\'s oldest forms of representation. The earliest known maps date from around 25,000 years ago — simple sketches scratched into bone or stone showing local features and routes. Long before written language emerged, our ancestors were creating visual representations of the spaces around them. From these humble origins has grown one of the most sophisticated intersections of art, science, and human imagination — the discipline of cartography.</p>
      
      <p><span class="para-num">B</span> The first significant systematic attempts at map-making came from the ancient world. The Greek scholar Eratosthenes, working in the third century BCE, not only calculated the circumference of the Earth with remarkable accuracy but also produced one of the first maps showing the known world as a sphere. Ptolemy, writing in second-century Alexandria, developed a coordinate system based on latitude and longitude that would influence map-making for over a thousand years. His Geographia, including maps and instructions for creating them, was lost to Europe during the medieval period but preserved in the Arabic world, where Islamic scholars made significant additional advances.</p>
      
      <p><span class="para-num">C</span> Medieval European maps followed quite different conventions. The so-called mappa mundi tradition produced ornate circular maps placing Jerusalem at the center of the world and combining geographical information with religious symbolism. While these maps look strange to modern eyes, they served their intended purpose admirably — not as practical navigation aids but as visual representations of the medieval Christian worldview. The famous Hereford Mappa Mundi, created around 1300, depicts not only places but biblical events, mythical creatures, and theological concepts.</p>
      
      <p><span class="para-num">D</span> The fifteenth-century revival of classical knowledge, combined with European voyages of exploration, transformed cartography. New geographical discoveries demanded new maps; new printing technologies enabled their wide distribution. The Flemish geographer Gerardus Mercator made perhaps the most influential contribution of the era. His 1569 world map used a new projection method specifically designed for navigation, in which lines of constant compass direction appeared as straight lines. This Mercator projection, while distorting the size of regions far from the equator, remained the standard for navigational charts for centuries.</p>
      
      <p><span class="para-num">E</span> Every map projection involves trade-offs. Because the Earth is a sphere, its surface cannot be represented on a flat surface without some kind of distortion. Different projections preserve different properties: the Mercator preserves shapes and compass directions but distorts size; the Peters projection preserves area but distorts shape; the Robinson projection compromises between competing properties to produce a generally pleasing appearance. Which projection is "best" depends entirely on what the map is being used for. There is no perfect map, only maps better or worse suited to particular purposes.</p>
      
      <p><span class="para-num">F</span> The twentieth century brought several revolutionary changes to cartography. Aerial photography, beginning seriously in the First World War, allowed accurate mapping of large areas previously known only through ground surveys. Satellite imagery from the 1960s onward made it possible to map any point on Earth\'s surface with unprecedented accuracy. Most dramatically, computer technology and Geographic Information Systems (GIS) transformed maps from static images into dynamic representations that could combine, analyze, and visualize vast quantities of geographical data.</p>
      
      <p><span class="para-num">G</span> Today, digital maps dominate everyday use. Online mapping services serve billions of users, providing turn-by-turn navigation, business reviews, and street-level photography of locations worldwide. Yet despite these technological marvels, traditional skills of cartography remain valuable. Choosing what to show on a map, how to represent it, and what to leave out are decisions that shape how viewers understand the spaces being depicted. Maps are not neutral records of reality but interpretations shaped by their makers\' purposes and assumptions. Understanding this remains essential for using maps wisely, whether they are medieval mappae mundi or smartphone navigation apps.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Bản đồ là một trong những hình thức biểu đạt cổ xưa nhất của nhân loại. Bản đồ sớm nhất được biết đến cách đây khoảng 25,000 năm - các phác thảo đơn giản trên xương hoặc đá. Trước khi ngôn ngữ viết xuất hiện, tổ tiên chúng ta đã tạo ra biểu diễn trực quan về không gian xung quanh.</p>
      
      <p><strong>Đoạn B:</strong> Các nỗ lực có hệ thống đầu tiên đến từ thế giới cổ đại. Học giả Hy Lạp Eratosthenes thế kỷ 3 TCN đã tính chu vi Trái Đất với độ chính xác đáng kể. Ptolemy ở Alexandria thế kỷ 2 phát triển hệ tọa độ vĩ độ và kinh độ ảnh hưởng map-making trên 1,000 năm.</p>
      
      <p><strong>Đoạn C:</strong> Bản đồ châu Âu trung cổ theo quy ước khác. Truyền thống mappa mundi tạo ra bản đồ tròn cầu kỳ đặt Jerusalem ở trung tâm thế giới. Mặc dù trông kỳ lạ với mắt hiện đại, các bản đồ này phục vụ mục đích - không phải hỗ trợ điều hướng thực tế mà là biểu diễn quan điểm thế giới Cơ đốc giáo trung cổ.</p>
      
      <p><strong>Đoạn D:</strong> Sự hồi sinh kiến thức cổ điển thế kỷ 15, kết hợp với các chuyến thám hiểm châu Âu, biến đổi cartography. Gerardus Mercator đóng góp ảnh hưởng nhất. Bản đồ thế giới năm 1569 sử dụng phương pháp chiếu mới được thiết kế cho điều hướng. Phép chiếu Mercator vẫn là tiêu chuẩn cho bản đồ hàng hải nhiều thế kỷ.</p>
      
      <p><strong>Đoạn E:</strong> Mỗi phép chiếu bản đồ liên quan đến đánh đổi. Vì Trái Đất là hình cầu, bề mặt không thể biểu diễn trên mặt phẳng mà không có biến dạng. Phép chiếu Mercator bảo toàn hình dạng nhưng biến dạng kích thước; phép chiếu Peters bảo toàn diện tích nhưng biến dạng hình. Không có bản đồ hoàn hảo.</p>
      
      <p><strong>Đoạn F:</strong> Thế kỷ 20 mang đến nhiều thay đổi cách mạng. Chụp ảnh trên không, bắt đầu nghiêm túc trong Thế chiến I, cho phép lập bản đồ chính xác các khu vực lớn. Ảnh vệ tinh từ những năm 1960. Hệ thống Thông tin Địa lý (GIS) biến bản đồ thành biểu diễn động.</p>
      
      <p><strong>Đoạn G:</strong> Ngày nay, bản đồ số chiếm ưu thế trong sử dụng hàng ngày. Bản đồ không phải bản ghi trung lập về thực tế mà là diễn giải bị định hình bởi mục đích và giả định của người làm. Hiểu điều này vẫn cần thiết để sử dụng bản đồ một cách khôn ngoan.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Maps existed before written language was invented.', answer: 'TRUE', explain: 'Đoạn A: "Long before written language emerged, our ancestors were creating visual representations".' },
          { q: 'Eratosthenes\'s calculation of the Earth\'s circumference was inaccurate.', answer: 'FALSE', explain: 'Đoạn B: "calculated the circumference of the Earth with remarkable accuracy".' },
          { q: 'Ptolemy\'s work was preserved continuously in Europe throughout the medieval period.', answer: 'FALSE', explain: 'Đoạn B: "His Geographia... was lost to Europe during the medieval period but preserved in the Arabic world".' },
          { q: 'The Hereford Mappa Mundi was created in the fifteenth century.', answer: 'FALSE', explain: 'Đoạn C: "created around 1300" - thế kỷ 14, không phải 15.' },
          { q: 'Medieval European maps were primarily designed for navigation.', answer: 'FALSE', explain: 'Đoạn C: "not as practical navigation aids but as visual representations of the medieval Christian worldview".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'Mercator\'s 1569 projection was specifically designed for:', options: ['A. Showing accurate land sizes', 'B. Religious instruction', 'C. Navigation purposes', 'D. Teaching geography in schools'], answer: 'C', explain: 'Đoạn D: "used a new projection method specifically designed for navigation".' },
          { q: 'According to the passage, the "best" map projection:', options: ['A. Is the Mercator projection', 'B. Depends on the map\'s intended use', 'C. Has not yet been invented', 'D. Is the Peters projection'], answer: 'B', explain: 'Đoạn E: "depends entirely on what the map is being used for. There is no perfect map".' },
          { q: 'Aerial photography for mapping began significantly during:', options: ['A. The age of exploration', 'B. The First World War', 'C. The 1960s', 'D. The Industrial Revolution'], answer: 'B', explain: 'Đoạn F: "Aerial photography, beginning seriously in the First World War".' },
          { q: 'The author\'s view of digital maps is that they:', options: ['A. Have made traditional cartography skills obsolete', 'B. Are perfectly neutral representations of reality', 'C. Are interpretations shaped by their makers', 'D. Are too complicated for ordinary users'], answer: 'C', explain: 'Đoạn G: "Maps are not neutral records of reality but interpretations shaped by their makers\' purposes".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'The earliest known maps date back approximately __________ years.', answer: '25,000', explain: 'Đoạn A: "around 25,000 years ago".' },
          { q: 'Medieval circular maps placed __________ at the center of the world.', answer: 'Jerusalem', explain: 'Đoạn C: "placing Jerusalem at the center of the world".' },
          { q: 'The Peters projection preserves area but distorts __________.', answer: 'shape', explain: 'Đoạn E: "the Peters projection preserves area but distorts shape".' },
          { q: '__________ Information Systems transformed maps into dynamic representations.', answer: 'Geographic', explain: 'Đoạn F: "Geographic Information Systems (GIS) transformed maps".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 10 - TEST 1 ====================
  'cam10-t1': {
    title: 'The Origins of Writing',
    topic: 'Linguistics · History',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'How Writing Began',
      content: `<p><span class="para-num">A</span> The invention of writing was one of the most consequential achievements in human history. Spoken language must have existed for tens of thousands of years before writing emerged, but it left no permanent record. Writing changed this fundamentally. For the first time, ideas could outlive the people who originated them, accumulate across generations, and travel beyond face-to-face communication. The civilizations that we know best from ancient history are precisely those that developed systems of writing — a coincidence that is no coincidence at all.</p>
      
      <p><span class="para-num">B</span> Writing was invented independently at least three times in human history. The earliest known system emerged in Mesopotamia around 3200 BCE, where Sumerian scribes developed cuneiform script using wedge-shaped marks pressed into clay tablets. A similar system arose in Egypt at approximately the same time, though scholars debate whether the two developments were truly independent or influenced each other. The Chinese script emerged considerably later, around 1200 BCE, with no apparent connection to Middle Eastern writing. A fourth independent invention occurred in Mesoamerica before 600 BCE, where the Olmec, Maya, and other cultures developed elaborate hieroglyphic systems.</p>
      
      <p><span class="para-num">C</span> The first writing was not invented to record poetry, philosophy, or religious texts — uses we now associate with writing — but for the much more mundane purpose of economic accounting. The earliest cuneiform tablets are essentially receipts: records of grain delivered, livestock counted, or workers paid. As civilization in Mesopotamia grew more complex, the need to track these transactions reliably became urgent. Memory and oral testimony were no longer sufficient. Writing emerged as a technology for managing the increasingly complex economic and administrative needs of early cities.</p>
      
      <p><span class="para-num">D</span> All early writing systems began as pictographs — simple drawings representing the objects or actions they described. A sketch of an ox meant "ox", a stylized sun meant "sun". This approach has obvious limitations: drawings can only directly represent concrete objects, not abstract concepts. To express ideas like "love", "freedom", or even ordinary words like "for" or "with", writers had to find indirect strategies. The most common solution involved using pictures for the sounds they represented — a process scholars call the rebus principle. The picture of an ox might come to represent any word that sounded like the word for "ox", regardless of meaning.</p>
      
      <p><span class="para-num">E</span> The development of true alphabetic writing — in which each symbol represents a single sound — was a much later innovation. Most early systems were syllabaries, where each symbol represented a syllable. The Phoenicians, around 1500 BCE, developed what most scholars consider the first true alphabet, with characters representing individual consonants. This system spread through trade across the Mediterranean and was adopted by the Greeks, who added vowels to create the alphabetic system that would become the basis for Latin and ultimately for most modern Western writing systems.</p>
      
      <p><span class="para-num">F</span> Different writing systems offer different trade-offs. Alphabetic systems have a small set of symbols — generally between twenty and forty — that can be learned relatively quickly. Logographic systems like Chinese require knowledge of thousands of characters for full literacy but can be read by speakers of dialects so different they cannot understand each other\'s speech. Syllabaries fall between these extremes, with a hundred or so symbols typically sufficient. Each system suits some languages better than others; there is no single best approach.</p>
      
      <p><span class="para-num">G</span> Today, writing has transformed beyond anything its ancient inventors could have imagined. Most communication is now electronic; physical writing surfaces have largely given way to digital screens. Yet the fundamental principle remains the same: visual symbols representing meaning, allowing communication across time and space. Recent research using brain imaging has shown that reading engages specialized neural circuits that did not exist when writing was invented; our brains have adapted, in cultural rather than evolutionary timescales, to the demands of literacy. Whether scratched into clay tablets or displayed on smartphone screens, writing remains one of the most powerful inventions in human history.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Phát minh chữ viết là một trong những thành tựu có hậu quả lớn nhất trong lịch sử nhân loại. Ngôn ngữ nói chắc chắn tồn tại hàng chục nghìn năm trước chữ viết. Chữ viết đã thay đổi cơ bản điều này - lần đầu tiên ý tưởng có thể tồn tại lâu hơn người tạo ra chúng.</p>
      
      <p><strong>Đoạn B:</strong> Chữ viết được phát minh độc lập ít nhất ba lần trong lịch sử nhân loại. Hệ thống sớm nhất ở Mesopotamia khoảng 3200 TCN - chữ hình nêm của người Sumer trên bảng đất sét. Tương tự ở Ai Cập cùng thời. Chữ Trung Quốc khoảng 1200 TCN. Phát minh độc lập thứ tư ở Trung Mỹ trước 600 TCN.</p>
      
      <p><strong>Đoạn C:</strong> Chữ viết đầu tiên không được phát minh để ghi thơ ca, triết học, hay tôn giáo - mà cho mục đích bình dị hơn nhiều là kế toán kinh tế. Các tấm bảng cuneiform sớm nhất về cơ bản là biên lai: hồ sơ ngũ cốc giao, gia súc đếm, công nhân trả.</p>
      
      <p><strong>Đoạn D:</strong> Tất cả hệ thống chữ viết sớm bắt đầu là chữ tượng hình - vẽ đơn giản đại diện đối tượng hay hành động. Cách tiếp cận này có giới hạn: bản vẽ chỉ có thể đại diện vật thể cụ thể, không phải khái niệm trừu tượng. Giải pháp phổ biến nhất là sử dụng hình ảnh cho âm thanh chúng đại diện - gọi là nguyên tắc rebus.</p>
      
      <p><strong>Đoạn E:</strong> Phát triển chữ viết bảng chữ cái thực sự là đổi mới muộn hơn. Hầu hết hệ thống sớm là âm tiết. Người Phoenicia khoảng 1500 TCN phát triển bảng chữ cái thực sự đầu tiên với phụ âm riêng lẻ. Hệ thống này lan rộng qua thương mại Địa Trung Hải, được Hy Lạp thông qua và thêm nguyên âm.</p>
      
      <p><strong>Đoạn F:</strong> Các hệ thống chữ viết khác nhau có ưu nhược khác nhau. Hệ thống bảng chữ cái có ít ký hiệu - thường 20-40 - học tương đối nhanh. Hệ thống logographic như tiếng Trung yêu cầu kiến thức hàng ngàn ký tự nhưng đọc được bởi người nói các phương ngữ khác nhau.</p>
      
      <p><strong>Đoạn G:</strong> Ngày nay, chữ viết đã biến đổi vượt xa những gì người phát minh cổ xưa có thể tưởng tượng. Hầu hết giao tiếp giờ là điện tử. Tuy nhiên, nguyên tắc cơ bản vẫn như cũ. Nghiên cứu não cho thấy đọc liên quan đến các mạch thần kinh chuyên biệt.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Writing emerged at roughly the same time as spoken language.', answer: 'FALSE', explain: 'Đoạn A: "Spoken language must have existed for tens of thousands of years before writing emerged".' },
          { q: 'Scholars agree that Egyptian and Mesopotamian writing developed completely independently.', answer: 'FALSE', explain: 'Đoạn B: "scholars debate whether the two developments were truly independent or influenced each other".' },
          { q: 'Early writing was used mainly for religious purposes.', answer: 'FALSE', explain: 'Đoạn C: "not invented to record poetry, philosophy, or religious texts — but for the much more mundane purpose of economic accounting".' },
          { q: 'The rebus principle allowed writers to represent abstract ideas.', answer: 'TRUE', explain: 'Đoạn D: từ vấn đề biểu diễn ý tưởng trừu tượng, giải pháp là dùng hình ảnh đại diện âm thanh - rebus principle.' },
          { q: 'Chinese characters can be read by speakers of different Chinese dialects.', answer: 'TRUE', explain: 'Đoạn F: "can be read by speakers of dialects so different they cannot understand each other\'s speech".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, writing was invented independently:', options: ['A. Only once, in Mesopotamia', 'B. Twice, in the Middle East and China', 'C. At least three times in human history', 'D. Many times but only one system survived'], answer: 'C', explain: 'Đoạn B: "Writing was invented independently at least three times in human history".' },
          { q: 'The earliest cuneiform tablets primarily contained:', options: ['A. Religious texts and prayers', 'B. Economic records like receipts and accounts', 'C. Royal proclamations and laws', 'D. Historical narratives'], answer: 'B', explain: 'Đoạn C: "The earliest cuneiform tablets are essentially receipts: records of grain delivered, livestock counted".' },
          { q: 'The first true alphabet was developed by:', options: ['A. The Greeks around 1000 BCE', 'B. The Phoenicians around 1500 BCE', 'C. The Sumerians around 3200 BCE', 'D. The Romans during the empire'], answer: 'B', explain: 'Đoạn E: "The Phoenicians, around 1500 BCE, developed what most scholars consider the first true alphabet".' },
          { q: 'According to the final paragraph, our brains:', options: ['A. Have evolved specialized circuits for reading', 'B. Adapt to literacy through cultural rather than evolutionary changes', 'C. Cannot really process digital writing', 'D. Read pictographs better than alphabetic text'], answer: 'B', explain: 'Đoạn G: "our brains have adapted, in cultural rather than evolutionary timescales, to the demands of literacy".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'The earliest known writing system emerged in Mesopotamia around __________ BCE.', answer: '3200', explain: 'Đoạn B: "emerged in Mesopotamia around 3200 BCE".' },
          { q: 'Early writing systems began as __________ — simple drawings of objects.', answer: 'pictographs', explain: 'Đoạn D: "All early writing systems began as pictographs — simple drawings".' },
          { q: 'The Greeks improved the Phoenician alphabet by adding __________.', answer: 'vowels', explain: 'Đoạn E: "adopted by the Greeks, who added vowels".' },
          { q: 'Alphabetic systems generally have between 20 and __________ symbols.', answer: 'forty', explain: 'Đoạn F: "generally between twenty and forty".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 10 - TEST 2 ====================
  'cam10-t2': {
    title: 'The Spice Trade',
    topic: 'History · Economics',
    difficulty: 'Easy',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Global Spice Trade',
      content: `<p><span class="para-num">A</span> For most of recorded history, spices have been among the most valuable commodities on Earth. Black pepper, cinnamon, cloves, and nutmeg — ingredients now found in any supermarket — were once worth their weight in gold or even more. Their cultivation was restricted to a few small regions, particularly in South and Southeast Asia, while demand existed in every civilization with the wealth to afford them. The result was one of history\'s most dramatic and far-reaching trade networks, connecting cultures from China to Western Europe and shaping events from the rise of empires to the colonization of distant continents.</p>
      
      <p><span class="para-num">B</span> The earliest evidence of long-distance spice trading dates from around 2000 BCE, when Egyptian merchants began importing cinnamon from sources thousands of miles away. The actual origin of this cinnamon remained mysterious for centuries — Egyptian and later Greek sources record fanciful stories of cinnamon being collected from the nests of giant birds, suggesting that the actual sources were deliberately concealed by middlemen seeking to protect their monopoly. Modern research has confirmed that the cinnamon used in ancient Egypt actually came from Sri Lanka and the Indonesian archipelago, transported through complex chains of intermediaries.</p>
      
      <p><span class="para-num">C</span> By Roman times, the spice trade had become enormous in scale. Roman writers complained that vast quantities of gold and silver were flowing out of the empire to pay for Eastern luxuries, including spices. Pepper, in particular, was consumed in vast quantities by wealthy Romans, who used it not only in cooking but in elaborate medicinal preparations. Some Roman recipes called for pepper in dishes ranging from main courses to desserts and even drinks. Archaeological discoveries have shown that Roman merchants traveled directly to Indian ports to acquire spices, bypassing the traditional Middle Eastern intermediaries when possible.</p>
      
      <p><span class="para-num">D</span> The collapse of the Western Roman Empire disrupted but did not end the spice trade. Spices continued to flow westward, increasingly under the control of Arab merchants who dominated the routes connecting Asia with Mediterranean markets. The Crusades reintroduced European elites to the pleasures of spiced food, and demand grew steadily throughout the medieval period. By the late Middle Ages, Venice and Genoa had become enormously wealthy by controlling the European end of the spice trade, while Constantinople thrived as the key point where Asian spices entered European markets.</p>
      
      <p><span class="para-num">E</span> The conquest of Constantinople by the Ottoman Turks in 1453 disrupted established trade routes and provided enormous motivation for Europeans to seek direct connections with the spice-producing regions. Vasco da Gama\'s 1498 voyage to India, sailing around Africa, marked the beginning of European attempts to control the spice trade directly. Within decades, Portuguese ships were patrolling the Indian Ocean, attacking the Arab merchants who had previously dominated the trade. The Portuguese were eventually displaced by the Dutch, who in turn faced competition from the British and French — all of them seeking control of what was, for many centuries, among the most profitable enterprises in human history.</p>
      
      <p><span class="para-num">F</span> The contest for spice trade dominance had lasting consequences. The Dutch East India Company, established in 1602 to organize Dutch spice trading, became the world\'s first multinational corporation and pioneered many aspects of modern capitalism, including stock markets and limited liability. European competition for spices led directly to the colonization of Indonesia, the Philippines, India, and parts of Africa. Wars between European powers over spice islands sometimes involved cruelties that would shock modern sensibilities — the Dutch massacre of the inhabitants of the Banda Islands in 1621, motivated by the desire to monopolize nutmeg production, killed roughly fifteen thousand people.</p>
      
      <p><span class="para-num">G</span> The romance and value of the spice trade gradually faded. As Europeans established spice plantations in their colonies, prices fell dramatically and spices became affordable luxuries rather than precious commodities. Refrigeration and food preservation technologies reduced their practical importance for storing food. By the twentieth century, most spices had become inexpensive grocery items that consumers took for granted. Yet the legacy of the spice trade remains immense, having shaped the global economy, transformed cuisines worldwide, and contributed to political arrangements whose consequences are still being felt today.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Trong phần lớn lịch sử, gia vị là một trong những hàng hóa giá trị nhất Trái Đất. Hồ tiêu đen, quế, đinh hương, nhục đậu khấu - các nguyên liệu nay có ở mọi siêu thị - từng có giá trị bằng vàng. Việc trồng giới hạn ở vài vùng nhỏ. Mạng lưới thương mại dramatic và sâu rộng nhất lịch sử, kết nối Trung Quốc với Tây Âu.</p>
      
      <p><strong>Đoạn B:</strong> Bằng chứng sớm nhất về thương mại gia vị đường dài từ khoảng 2000 TCN, khi thương nhân Ai Cập bắt đầu nhập quế từ nguồn cách xa hàng ngàn dặm. Nguồn gốc thực sự bí ẩn trong nhiều thế kỷ - nguồn Ai Cập và Hy Lạp ghi lại câu chuyện kỳ ảo về quế được thu thập từ tổ chim khổng lồ. Nghiên cứu hiện đại xác nhận quế thực ra từ Sri Lanka và quần đảo Indonesia.</p>
      
      <p><strong>Đoạn C:</strong> Đến thời La Mã, thương mại gia vị đã trở nên khổng lồ. Các nhà văn La Mã phàn nàn rằng vàng và bạc khổng lồ chảy ra khỏi đế chế để trả cho xa xỉ phẩm phương Đông. Hồ tiêu được tiêu thụ với số lượng lớn bởi người La Mã giàu có.</p>
      
      <p><strong>Đoạn D:</strong> Sự sụp đổ Tây La Mã đã làm gián đoạn nhưng không kết thúc thương mại gia vị. Gia vị tiếp tục chảy về phía tây, ngày càng dưới sự kiểm soát của thương nhân Ả Rập. Các cuộc Thập tự chinh đã giới thiệu lại tầng lớp tinh hoa châu Âu với gia vị. Venice và Genoa trở nên giàu có khổng lồ.</p>
      
      <p><strong>Đoạn E:</strong> Việc Ottoman chinh phục Constantinople năm 1453 đã làm gián đoạn các tuyến thương mại và tạo động lực to lớn cho người châu Âu tìm kết nối trực tiếp. Chuyến đi của Vasco da Gama năm 1498 đến Ấn Độ đánh dấu sự khởi đầu của các nỗ lực châu Âu kiểm soát thương mại gia vị trực tiếp.</p>
      
      <p><strong>Đoạn F:</strong> Cuộc tranh giành quyền thống trị thương mại có hậu quả lâu dài. Công ty Đông Ấn Hà Lan, thành lập năm 1602, trở thành tập đoàn đa quốc gia đầu tiên thế giới. Cạnh tranh châu Âu vì gia vị dẫn trực tiếp đến thực dân hóa Indonesia, Philippines, Ấn Độ. Cuộc thảm sát Hà Lan ở quần đảo Banda 1621 giết khoảng 15,000 người.</p>
      
      <p><strong>Đoạn G:</strong> Sự lãng mạn và giá trị của thương mại gia vị dần phai. Khi người châu Âu lập đồn điền gia vị ở thuộc địa, giá giảm mạnh. Công nghệ làm lạnh giảm tầm quan trọng thực tế. Đến thế kỷ 20, hầu hết gia vị đã trở thành hàng tạp hóa rẻ tiền.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Spices were once as valuable as gold or even more valuable.', answer: 'TRUE', explain: 'Đoạn A: "worth their weight in gold or even more".' },
          { q: 'Ancient Egyptians knew exactly where their cinnamon came from.', answer: 'FALSE', explain: 'Đoạn B: "The actual origin of this cinnamon remained mysterious for centuries... fanciful stories of cinnamon being collected from the nests of giant birds".' },
          { q: 'Roman writers approved of the large amounts spent on Eastern spices.', answer: 'FALSE', explain: 'Đoạn C: "Roman writers complained that vast quantities of gold and silver were flowing out".' },
          { q: 'Venice grew rich by controlling the European end of the spice trade.', answer: 'TRUE', explain: 'Đoạn D: "Venice and Genoa had become enormously wealthy by controlling the European end of the spice trade".' },
          { q: 'Vasco da Gama was the first European to reach the Spice Islands.', answer: 'NOT GIVEN', explain: 'Đoạn E nói ông đến Ấn Độ năm 1498 nhưng không nói ai là người châu Âu đầu tiên đến Spice Islands.' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'After the fall of the Western Roman Empire, the spice trade was largely controlled by:', options: ['A. Chinese merchants', 'B. Italian merchants', 'C. Arab merchants', 'D. Persian merchants'], answer: 'C', explain: 'Đoạn D: "increasingly under the control of Arab merchants who dominated the routes".' },
          { q: 'The Ottoman conquest of Constantinople in 1453:', options: ['A. Ended the spice trade entirely', 'B. Motivated Europeans to seek direct routes to spice regions', 'C. Made spices much cheaper in Europe', 'D. Was caused by disputes over spices'], answer: 'B', explain: 'Đoạn E: "disrupted established trade routes and provided enormous motivation for Europeans to seek direct connections".' },
          { q: 'The Dutch East India Company is described as:', options: ['A. The first European trading company', 'B. The world\'s first multinational corporation', 'C. A failed business experiment', 'D. The smallest of the spice trading companies'], answer: 'B', explain: 'Đoạn F: "became the world\'s first multinational corporation".' },
          { q: 'Spices became cheap and ordinary commodities because:', options: ['A. People lost their taste for them', 'B. Governments banned the spice trade', 'C. Europeans established plantations in their colonies', 'D. They were replaced by artificial flavorings'], answer: 'C', explain: 'Đoạn G: "As Europeans established spice plantations in their colonies, prices fell dramatically".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'Long-distance spice trading dates back to around __________ BCE.', answer: '2000', explain: 'Đoạn B: "dates from around 2000 BCE".' },
          { q: 'Roman merchants traveled directly to __________ ports to buy spices.', answer: 'Indian', explain: 'Đoạn C: "Roman merchants traveled directly to Indian ports to acquire spices".' },
          { q: 'The Dutch East India Company was established in __________.', answer: '1602', explain: 'Đoạn F: "established in 1602 to organize Dutch spice trading".' },
          { q: 'The Dutch massacre on the Banda Islands in 1621 was motivated by control of __________.', answer: 'nutmeg', explain: 'Đoạn F: "motivated by the desire to monopolize nutmeg production".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 18 - TEST 3 ====================
  'cam18-t3': {
    title: 'The Hidden World of Fungi',
    topic: 'Biology · Ecology',
    difficulty: 'Medium',
    passages: [
      {
        label: 'Reading Passage 1',
        title: 'The Hidden World of Fungi',
        content: `<p><span class="para-num">A</span> When most people think of fungi, they picture mushrooms — the visible reproductive structures that occasionally appear on forest floors or in damp lawns. But mushrooms are merely the small visible tip of a vast hidden network. Beneath every step you take in a healthy forest, an extensive web of fungal filaments called mycelium spreads through the soil. A single fungal organism can extend over many square kilometres and weigh more than a hundred tonnes — among the largest living things on Earth. The fungus is one of nature\'s most fundamental yet least understood kingdoms of life.</p>
        
        <p><span class="para-num">B</span> Fungi occupy a unique position in the living world. They are neither plants nor animals but constitute their own biological kingdom. Unlike plants, fungi cannot photosynthesise; they obtain their energy by breaking down organic matter, whether dead leaves, fallen logs, or living tissues. Unlike animals, they do not move actively, instead growing toward food sources by extending their mycelial networks. Some fungi are microscopic, while others form structures visible from space. The estimated total number of fungal species is around five million, but only about 150,000 have been formally described — meaning most of fungal diversity remains entirely unknown to science.</p>
        
        <p><span class="para-num">C</span> Perhaps the most remarkable aspect of fungi is their relationship with plants. The vast majority of land plants — over 90 percent — depend on partnerships with specific fungi to thrive. These relationships, called mycorrhizal associations, involve fungi attaching to plant roots and exchanging resources. The fungi extend the effective root area enormously, gathering water and nutrients that the plant could not reach alone. In return, the plant supplies the fungi with sugars produced through photosynthesis. This partnership likely played a key role in the original colonisation of land by plants over 400 million years ago, and continues to be essential to nearly all terrestrial ecosystems today.</p>
        
        <p><span class="para-num">D</span> Recent research has revealed that mycorrhizal networks also connect different plants to each other. Trees in a forest can share resources through underground fungal connections, with mature trees sometimes transferring sugars to young saplings struggling to grow in the shade. The Canadian ecologist Suzanne Simard, whose pioneering work in this field popularised the term "wood-wide web," has shown that these networks can transfer not only nutrients but also chemical signals warning of insect attacks or other dangers. Trees that previously seemed to be solitary competitors emerge from this research as members of complex collaborative communities.</p>
        
        <p><span class="para-num">E</span> Fungi also serve as the principal decomposers in most ecosystems. When trees fall, leaves drop, or animals die, fungi are the primary agents that break this material down, releasing the nutrients it contains back into the soil for new growth. Without this decomposition, ecosystems would gradually choke on accumulated dead matter, and the nutrients required for new life would remain locked up in dead tissues. Fungi can break down compounds that almost nothing else can digest, including the tough cellulose and lignin that give wood its strength. Some specialised fungi can even break down petroleum products and certain plastics.</p>
        
        <p><span class="para-num">F</span> Humans have long made practical use of fungi, often without understanding what they were using. Bread, beer, and wine all depend on fungi called yeasts that ferment sugars into alcohol and carbon dioxide. Cheese-making frequently uses moulds to produce distinctive flavours and textures. The discovery of penicillin from a mould in 1928 launched the antibiotic revolution, and many other important medicines including statins and immunosuppressant drugs were originally derived from fungal compounds. More recently, researchers have begun exploring fungi as sustainable materials for construction, packaging, and even leather substitutes.</p>
        
        <p><span class="para-num">G</span> Despite their importance, fungi receive far less attention than plants or animals in conservation efforts. Many fungal species are threatened by habitat destruction, climate change, and pollution, but few are formally protected. Some scientists argue that this neglect reflects a broader cultural blindness to the importance of fungi — an underground kingdom whose contributions to ecosystem function and human welfare remain dramatically undervalued. Greater understanding of fungi, advocates suggest, could transform our approach to medicine, agriculture, materials science, and environmental management. The mushrooms we see emerging from forest floors are reminders of the vast unseen biological work occurring beneath our feet.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Khi hầu hết mọi người nghĩ về nấm, họ hình dung mushroom. Nhưng mushroom chỉ là phần đỉnh nhỏ nhìn thấy của một mạng lưới ẩn rộng lớn. Mycelium lan rộng qua đất - một sinh vật nấm đơn lẻ có thể trải dài hàng km vuông.</p>
        <p><strong>Đoạn B:</strong> Nấm chiếm vị trí độc đáo - không phải thực vật hay động vật mà là vương quốc sinh học riêng. Tổng số loài nấm ước tính khoảng 5 triệu, nhưng chỉ khoảng 150,000 đã được mô tả chính thức.</p>
        <p><strong>Đoạn C:</strong> Hơn 90% thực vật trên cạn phụ thuộc vào quan hệ đối tác với các loài nấm cụ thể. Mối quan hệ mycorrhizal - nấm gắn vào rễ cây và trao đổi tài nguyên.</p>
        <p><strong>Đoạn D:</strong> Mycorrhizal networks cũng kết nối các cây khác nhau. Nhà sinh thái Canada Suzanne Simard phổ biến thuật ngữ "wood-wide web" - mạng này có thể chuyển chất dinh dưỡng và tín hiệu hóa học.</p>
        <p><strong>Đoạn E:</strong> Nấm là chất phân hủy chính trong hầu hết hệ sinh thái. Nấm có thể phân hủy cellulose và lignin. Một số nấm chuyên biệt phân hủy dầu mỏ và nhựa.</p>
        <p><strong>Đoạn F:</strong> Bánh mì, bia, rượu vang phụ thuộc vào yeast. Phát hiện penicillin từ nấm mốc năm 1928 mở ra cuộc cách mạng kháng sinh.</p>
        <p><strong>Đoạn G:</strong> Nấm nhận được ít sự chú ý hơn nhiều trong bảo tồn. Hiểu biết sâu hơn có thể biến đổi cách tiếp cận của chúng ta với y học, nông nghiệp.</p>`
      },
      {
        label: 'Reading Passage 2',
        title: 'The Mystery of Mass Migrations',
        content: `<p><span class="para-num">A</span> Throughout history, large populations have sometimes left their homelands to settle elsewhere — a phenomenon known as mass migration. These movements have shaped the genetic makeup of populations, transformed political boundaries, and produced cultures that blend influences from multiple sources. Some migrations are well documented in historical records; others must be reconstructed from archaeological evidence, linguistic patterns, or modern DNA studies. The reasons people migrate remain complex, but certain patterns recur throughout human history.</p>
        
        <p><span class="para-num">B</span> The most extensively studied prehistoric migration is the spread of farming peoples from Anatolia (modern Turkey) into Europe, beginning around 8,000 years ago. Ancient DNA evidence has confirmed that the genetic makeup of European populations changed substantially during this period as farmers expanded westward, partly replacing and partly mixing with the hunter-gatherer populations they encountered. This migration brought not only new genetic material but also the practice of agriculture, new languages, and distinctive types of pottery. The descendants of these early farmers contributed significantly to the genetic composition of all modern Europeans.</p>
        
        <p><span class="para-num">C</span> Another remarkable prehistoric movement was the colonisation of the Pacific by Austronesian-speaking peoples beginning around 5,000 years ago. From a homeland probably in modern Taiwan or southern China, these voyagers gradually spread across an enormous oceanic area, ultimately reaching destinations as distant as Madagascar to the west, Easter Island to the east, and New Zealand to the south. The technological achievement of these voyages, undertaken without modern navigation aids in small wooden boats, ranks among the great triumphs of human exploration. Genetic studies of modern Pacific populations confirm the basic patterns described by earlier linguistic research.</p>
        
        <p><span class="para-num">D</span> The reasons populations migrate are typically complex and often debated. Climate change has been blamed for many ancient movements — periods of drought or cooling temperatures driving populations to seek more favourable conditions. Population pressure on limited resources, particularly farmland, has motivated movements throughout history. Conflict and persecution have produced refugee migrations in many periods, from the dispersal of religious minorities to the population movements following major wars. Economic opportunity, both real and imagined, has drawn people to new regions throughout history. Often multiple factors operate simultaneously, making any simple explanation incomplete.</p>
        
        <p><span class="para-num">E</span> The Bantu expansion across Africa represents one of the most significant population movements in human history. Beginning around 3,000 years ago, Bantu-speaking peoples expanded from a homeland in the modern Cameroon-Nigeria border region across much of sub-Saharan Africa. They brought with them agricultural practices, iron-working technology, and language families that today account for hundreds of related African languages. By the time European colonisers arrived, Bantu speakers had spread across an enormous area, replacing or absorbing many earlier populations.</p>
        
        <p><span class="para-num">F</span> More recent migrations have been better documented and more controversial in their effects. The settlement of the Americas by Europeans, beginning around 500 years ago, transformed both continents through population movements involving tens of millions of people from Europe and Africa. Diseases brought by Europeans devastated indigenous American populations, sometimes killing 90 percent or more of affected communities. The mass enslavement of African peoples and their forced transportation to American colonies produced one of the most significant involuntary migrations in history. The cultural and genetic consequences of these movements continue to shape the Americas today.</p>
        
        <p><span class="para-num">G</span> Modern migration patterns differ in important ways from earlier movements. Industrial economies create labour demands that draw migrants across long distances. International transport makes movement possible on scales that would have been unimaginable to earlier generations. National borders, supported by passport controls and visa requirements, restrict movement in ways unknown to most historical migrations. Yet despite these changes, the basic patterns of mass migration — driven by economic opportunity, environmental change, conflict, and family connections — remain remarkably similar to those documented throughout history. Whether modern democracies can manage migration humanely while addressing legitimate concerns of host populations remains among the most contested political questions of our time.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Trong suốt lịch sử, các quần thể lớn đôi khi rời bỏ quê hương để định cư ở nơi khác — hiện tượng gọi là di cư hàng loạt. Một số di cư được ghi chép tốt trong lịch sử, những trường hợp khác phải tái dựng từ khảo cổ, ngôn ngữ, DNA.</p>
        <p><strong>Đoạn B:</strong> Di cư tiền sử được nghiên cứu nhiều nhất là sự lan rộng của nông dân từ Anatolia vào châu Âu khoảng 8,000 năm trước. Bằng chứng DNA xác nhận cấu trúc di truyền châu Âu thay đổi đáng kể.</p>
        <p><strong>Đoạn C:</strong> Người Austronesian thực dân hóa Thái Bình Dương từ 5,000 năm trước. Từ Đài Loan, họ đến Madagascar, đảo Phục Sinh, New Zealand. Một thành tựu công nghệ phi thường.</p>
        <p><strong>Đoạn D:</strong> Lý do di cư phức tạp - biến đổi khí hậu, áp lực dân số, xung đột, cơ hội kinh tế. Thường nhiều yếu tố hoạt động cùng nhau.</p>
        <p><strong>Đoạn E:</strong> Sự mở rộng Bantu khắp châu Phi từ 3,000 năm trước. Họ mang nông nghiệp, công nghệ sắt, các họ ngôn ngữ.</p>
        <p><strong>Đoạn F:</strong> Di cư gần đây - thực dân hóa châu Mỹ thay đổi cả hai lục địa. Dịch bệnh giết 90% hoặc hơn cộng đồng bản địa. Buôn bán nô lệ là một trong những di cư không tự nguyện lớn nhất.</p>
        <p><strong>Đoạn G:</strong> Di cư hiện đại khác biệt - kinh tế công nghiệp, vận tải quốc tế, kiểm soát biên giới. Tuy nhiên các yếu tố cơ bản vẫn tương tự lịch sử.</p>`
      },
      {
        label: 'Reading Passage 3',
        title: 'The Philosophy of Time',
        content: `<p><span class="para-num">A</span> Few questions in philosophy have proven as resistant to definitive answers as the nature of time. Despite millennia of inquiry, philosophers continue to disagree fundamentally about what time actually is. Does time flow, in some objective sense, from past to future? Are past, present, and future equally real, or does only the present truly exist? Such questions might seem academic, but they connect to deeply practical concerns about personal identity, moral responsibility, and the meaning of human life.</p>
        
        <p><span class="para-num">B</span> The ancient Greek philosopher Heraclitus famously declared that "no one steps in the same river twice" — emphasising the constant change and flow that seemed to define time. His contemporary Parmenides took the opposite view, arguing that change itself was an illusion and that reality must consist of unchanging eternal truths. This ancient disagreement has continued through Western philosophy in various forms, with thinkers divided between those emphasising change and process and those emphasising permanence and being. Modern physics has not resolved this disagreement so much as transformed its terms.</p>
        
        <p><span class="para-num">C</span> The philosopher J.M.E. McTaggart, writing in 1908, proposed an influential distinction between two ways of thinking about time. The "A-series" describes events as past, present, or future — categories that shift as time passes. The "B-series" describes events as earlier than, simultaneous with, or later than other events — relationships that never change. McTaggart argued controversially that the A-series involves contradictions and that consequently time itself must be unreal. Few philosophers accepted his conclusion, but his framework for thinking about time has influenced philosophical discussion ever since.</p>
        
        <p><span class="para-num">D</span> Modern philosophy of time has been profoundly shaped by Einstein\'s theories of relativity. Special relativity implies that there is no universal "now" shared across the universe — different observers moving at different velocities will disagree about which events are simultaneous. This appears to support a "block universe" view, in which all moments of time are equally real, with past and future no different in ontological status from the present. The flow of time, on this interpretation, must be an illusion produced by our limited perception rather than a feature of physical reality.</p>
        
        <p><span class="para-num">E</span> Yet the block universe view conflicts sharply with how time appears to ordinary human experience. We experience the present as uniquely vivid; the past seems gone forever; the future appears genuinely open and uncertain. Philosophers who emphasise these features of subjective experience — sometimes called "presentists" — insist that only the present really exists, with past events no longer real and future events not yet real. Defenders of presentism must explain how a moving "now" can coexist with the relativistic physics that seems to deny its existence.</p>
        
        <p><span class="para-num">F</span> The question of time\'s nature connects directly to the problem of personal identity. If only the present is real, what justifies our sense of being the same person we were yesterday or last year? Some philosophers have argued that personal identity is fundamentally unstable across time and that our sense of continuity is more a social construct than a metaphysical reality. Buddhist traditions, developing their own analyses of time over centuries, reached related conclusions in arguing that the self has no fixed permanent existence. Such philosophical conclusions, whether eastern or western, have profound implications for how we should think about our lives.</p>
        
        <p><span class="para-num">G</span> Whatever the ultimate metaphysical truth about time, human beings cannot help but live in time. We remember pasts and anticipate futures, plan and hope and regret. The philosophical investigation of time may not change these basic features of human experience, but it can illuminate them. Whether we understand ourselves as travellers through a four-dimensional landscape, or as briefly existing beings carried along by the flow of becoming, philosophers continue to debate. The questions are old, but they remain genuinely open, with consequences for how we live our temporal lives.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Ít câu hỏi trong triết học khó trả lời như bản chất của thời gian. Các nhà triết học vẫn bất đồng cơ bản. Thời gian có chảy không? Quá khứ, hiện tại, tương lai có thực sự thật không?</p>
        <p><strong>Đoạn B:</strong> Heraclitus tuyên bố "không ai bước vào cùng dòng sông hai lần" - nhấn mạnh sự thay đổi. Parmenides ngược lại - cho rằng thay đổi là ảo ảnh. Bất đồng cổ xưa này tiếp tục.</p>
        <p><strong>Đoạn C:</strong> Triết gia J.M.E. McTaggart năm 1908 phân biệt hai cách nghĩ về thời gian - A-series (quá khứ, hiện tại, tương lai) và B-series (sớm hơn, đồng thời, muộn hơn).</p>
        <p><strong>Đoạn D:</strong> Triết học hiện đại bị ảnh hưởng sâu sắc bởi thuyết tương đối Einstein. Không có "bây giờ" phổ quát. Quan điểm "block universe" - tất cả khoảnh khắc thời gian đều thực như nhau.</p>
        <p><strong>Đoạn E:</strong> Tuy nhiên quan điểm block universe mâu thuẫn với trải nghiệm thông thường. "Presentist" - chỉ hiện tại là thực. Họ phải giải thích cách "bây giờ" di chuyển tồn tại với vật lý tương đối.</p>
        <p><strong>Đoạn F:</strong> Câu hỏi bản chất thời gian kết nối với vấn đề bản sắc cá nhân. Bản sắc cá nhân có thực sự bất ổn theo thời gian không? Truyền thống Phật giáo cũng kết luận tự ngã không có sự tồn tại cố định.</p>
        <p><strong>Đoạn G:</strong> Bất kể sự thật siêu hình cuối cùng, con người không thể không sống trong thời gian. Các câu hỏi cổ xưa nhưng vẫn mở.</p>`
      }
    ],
    
    questions: [
      // ========== PASSAGE 1 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 1–5',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'A single fungal organism can be among the largest living things on Earth.', answer: 'TRUE', explain: 'Đoạn A: "weigh more than a hundred tonnes — among the largest living things on Earth".' },
            { q: 'Most fungal species have already been identified by scientists.', answer: 'FALSE', explain: 'Đoạn B: "only about 150,000 have been formally described — meaning most of fungal diversity remains entirely unknown".' },
            { q: 'Mycorrhizal partnerships were essential for the original colonisation of land by plants.', answer: 'TRUE', explain: 'Đoạn C: "This partnership likely played a key role in the original colonisation of land".' },
            { q: 'Suzanne Simard discovered that trees never compete with each other.', answer: 'NOT GIVEN', explain: 'Đoạn D nói các cây có hợp tác qua mạng nấm, nhưng không nói chúng "không bao giờ" cạnh tranh.' },
            { q: 'Penicillin was discovered before fungi were known to produce useful medicines.', answer: 'NOT GIVEN', explain: 'Đoạn F nói penicillin phát hiện 1928 nhưng không đề cập mốc thời gian liên quan đến biết đến thuốc khác từ nấm.' }
          ]
        },
        {
          group: 'Questions 6–9',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, fungi differ from plants because they:', options: ['A. Cannot reproduce without help', 'B. Cannot use photosynthesis to obtain energy', 'C. Are always microscopic in size', 'D. Live only in tropical forests'], answer: 'B', explain: 'Đoạn B: "Unlike plants, fungi cannot photosynthesise".' },
            { q: 'Mycorrhizal fungi benefit plants by:', options: ['A. Protecting them from all diseases', 'B. Producing sugars through photosynthesis', 'C. Extending the area from which water and nutrients can be obtained', 'D. Helping them reproduce more efficiently'], answer: 'C', explain: 'Đoạn C: "The fungi extend the effective root area enormously".' },
            { q: 'According to the passage, fungal networks can transfer:', options: ['A. Only sugars between plants', 'B. Both nutrients and chemical warning signals', 'C. Only water in dry conditions', 'D. Genetic material between unrelated species'], answer: 'B', explain: 'Đoạn D: "these networks can transfer not only nutrients but also chemical signals warning of insect attacks".' },
            { q: 'Fungi are described as crucial for ecosystems because they:', options: ['A. Produce most of the world\'s oxygen', 'B. Are the only organisms that produce food', 'C. Break down dead material and release nutrients', 'D. Control the population of all other species'], answer: 'C', explain: 'Đoạn E: "fungi are the primary agents that break this material down, releasing the nutrients".' }
          ]
        },
        {
          group: 'Questions 10–13',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'The network of fungal filaments in soil is called __________.', answer: 'mycelium', explain: 'Đoạn A: "fungal filaments called mycelium".' },
            { q: 'Suzanne Simard popularised the term __________ for the underground fungal network.', answer: 'wood-wide web', explain: 'Đoạn D: "popularised the term wood-wide web".' },
            { q: 'Fungi can break down tough plant compounds including cellulose and __________.', answer: 'lignin', explain: 'Đoạn E: "the tough cellulose and lignin that give wood its strength".' },
            { q: 'Yeasts are used in producing bread, wine, and __________.', answer: 'beer', explain: 'Đoạn F: "Bread, beer, and wine all depend on fungi called yeasts".' }
          ]
        }
      ],
      
      // ========== PASSAGE 2 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 14–19',
          type: 'matching-headings',
          instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list below.',
          headings: [
            { id: 'i', text: 'A spectacular oceanic colonisation' },
            { id: 'ii', text: 'The complex motivations behind movement' },
            { id: 'iii', text: 'A foundational European migration' },
            { id: 'iv', text: 'The basic phenomenon and how we study it' },
            { id: 'v', text: 'Modern movements and their unique features' },
            { id: 'vi', text: 'A major African expansion' },
            { id: 'vii', text: 'Catastrophic effects of European colonisation' },
            { id: 'viii', text: 'How animals and humans both migrate' },
            { id: 'ix', text: 'Modern responses to refugee crises' }
          ],
          items: [
            { q: 'A', answer: 'iv', explain: 'Đoạn A giới thiệu hiện tượng di cư hàng loạt và cách chúng ta nghiên cứu nó.' },
            { q: 'B', answer: 'iii', explain: 'Đoạn B về di cư của nông dân từ Anatolia vào châu Âu - nền tảng.' },
            { q: 'C', answer: 'i', explain: 'Đoạn C về thực dân hóa Thái Bình Dương ngoạn mục bởi người Austronesian.' },
            { q: 'D', answer: 'ii', explain: 'Đoạn D về các động cơ phức tạp của di cư.' },
            { q: 'E', answer: 'vi', explain: 'Đoạn E về sự mở rộng Bantu lớn ở châu Phi.' },
            { q: 'F', answer: 'vii', explain: 'Đoạn F về tác động thảm khốc của thực dân châu Âu (dịch bệnh, nô lệ).' }
          ]
        },
        {
          group: 'Questions 20–23',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'The migration from Anatolia brought only genetic changes to Europe.', answer: 'FALSE', explain: 'Đoạn B: "This migration brought not only new genetic material but also the practice of agriculture, new languages".' },
            { q: 'Austronesian voyagers reached destinations as far as Madagascar.', answer: 'TRUE', explain: 'Đoạn C: "ultimately reaching destinations as distant as Madagascar".' },
            { q: 'Bantu speakers eliminated all previous African populations.', answer: 'FALSE', explain: 'Đoạn E: "replacing or absorbing many earlier populations" - "thay thế HOẶC hấp thụ", không loại bỏ hoàn toàn.' },
            { q: 'European diseases killed up to 90 percent of some indigenous American communities.', answer: 'TRUE', explain: 'Đoạn F: "sometimes killing 90 percent or more of affected communities".' }
          ]
        },
        {
          group: 'Questions 24–26',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'Farmers spread from Anatolia into Europe beginning around __________ years ago.', answer: '8,000', explain: 'Đoạn B: "beginning around 8,000 years ago".' },
            { q: 'Austronesian voyagers travelled in small __________ boats.', answer: 'wooden', explain: 'Đoạn C: "in small wooden boats".' },
            { q: 'The Bantu-speaking peoples brought iron-working technology and __________ practices.', answer: 'agricultural', explain: 'Đoạn E: "They brought with them agricultural practices, iron-working technology".' }
          ]
        }
      ],
      
      // ========== PASSAGE 3 QUESTIONS (14 questions) ==========
      [
        {
          group: 'Questions 27–32',
          type: 'matching-information',
          instruction: 'Reading Passage 3 has seven paragraphs, A-G. Which paragraph contains the following information?',
          paragraphs: ['A','B','C','D','E','F','G'],
          items: [
            { q: 'A famous statement comparing time to a river.', answer: 'B', explain: 'Đoạn B: "no one steps in the same river twice" - câu nói của Heraclitus về sông.' },
            { q: 'Mention of a non-Western philosophical tradition\'s view on the self.', answer: 'F', explain: 'Đoạn F: "Buddhist traditions, developing their own analyses of time over centuries, reached related conclusions".' },
            { q: 'A description of two contrasting frameworks for thinking about events in time.', answer: 'C', explain: 'Đoạn C: "A-series" và "B-series" - hai khung tư duy.' },
            { q: 'A reference to Einstein\'s theories of physics.', answer: 'D', explain: 'Đoạn D: "Einstein\'s theories of relativity".' },
            { q: 'A description of how time appears in subjective human experience.', answer: 'E', explain: 'Đoạn E: "the block universe view conflicts sharply with how time appears to ordinary human experience".' },
            { q: 'An introduction to questions about time and their practical importance.', answer: 'A', explain: 'Đoạn A: giới thiệu các câu hỏi về thời gian và mối liên hệ với "personal identity, moral responsibility".' }
          ]
        },
        {
          group: 'Questions 33–36',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'Parmenides argued that:', options: ['A. Time flows like a river', 'B. Change itself is an illusion', 'C. Past and future are equally real', 'D. Time is purely subjective'], answer: 'B', explain: 'Đoạn B: "Parmenides took the opposite view, arguing that change itself was an illusion".' },
            { q: 'McTaggart\'s conclusion about time was that:', options: ['A. It flows in a single direction', 'B. The A-series and B-series are equally valid', 'C. Time itself must be unreal', 'D. Future events do not exist'], answer: 'C', explain: 'Đoạn C: "McTaggart argued controversially that... time itself must be unreal".' },
            { q: 'The "block universe" view holds that:', options: ['A. Only the present moment exists', 'B. All moments of time are equally real', 'C. Time flows differently in different places', 'D. The past changes our experience of the present'], answer: 'B', explain: 'Đoạn D: "all moments of time are equally real".' },
            { q: 'Presentists believe that:', options: ['A. Only past events have full reality', 'B. The future is more real than the past', 'C. Only the present really exists', 'D. Time travel is logically possible'], answer: 'C', explain: 'Đoạn E: "only the present really exists".' }
          ]
        },
        {
          group: 'Questions 37–40',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'McTaggart\'s influential work on time was published in __________.', answer: '1908', explain: 'Đoạn C: "writing in 1908".' },
            { q: 'According to relativity, there is no universal __________ shared across the universe.', answer: 'now', explain: 'Đoạn D: "there is no universal now shared across the universe".' },
            { q: 'The philosophical question of time connects to the problem of personal __________.', answer: 'identity', explain: 'Đoạn F: "the problem of personal identity".' },
            { q: 'Despite philosophical debates, the questions remain genuinely __________.', answer: 'open', explain: 'Đoạn G: "they remain genuinely open".' }
          ]
        }
      ]
    ]
  },

  // ==================== CAMBRIDGE 17 - TEST 3 ====================
  'cam17-t3': {
    title: 'The Hidden Costs of Tourism',
    topic: 'Society · Economics',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Hidden Costs of Mass Tourism',
      content: `<p><span class="para-num">A</span> Tourism has become one of the world\'s largest industries, generating roughly ten percent of global economic activity and supporting hundreds of millions of jobs. For many countries, particularly smaller ones with limited resources, tourist spending represents a vital source of foreign currency and economic opportunity. Yet alongside these benefits, the rapid growth of international tourism has created problems that are only now being seriously addressed. The phenomenon known as "overtourism" — when destinations attract more visitors than they can comfortably accommodate — has emerged as a defining challenge of the twenty-first century travel industry.</p>
      
      <p><span class="para-num">B</span> The scale of modern tourism is unprecedented. International tourist arrivals have grown from roughly 25 million in 1950 to over 1.4 billion before the disruptions of the recent pandemic, an increase of more than five thousand percent. Air travel has become dramatically cheaper, opening up international travel to populations that could not previously afford it. The rise of online platforms for booking flights and accommodation has further reduced the practical barriers to international travel. The result is that destinations once visited by tens of thousands now receive millions of visitors annually, creating pressures that infrastructure designed for smaller populations struggles to manage.</p>
      
      <p><span class="para-num">C</span> Venice has become the most cited example of overtourism\'s consequences. The historic Italian city, with a permanent population of only about 50,000, regularly hosts 30 million tourists each year. Cruise ships, until recently the largest of which dwarfed the medieval buildings they passed, contributed enormously to visitor numbers while spending relatively little in the local economy. Property prices have been driven up by short-term rentals catering to tourists, displacing the resident population. Traditional shops have given way to souvenir stores. The city has implemented various measures to manage tourism, including limits on cruise ship access and an entrance fee for day visitors, with mixed results.</p>
      
      <p><span class="para-num">D</span> Beyond major cities, overtourism affects fragile natural environments. The Galapagos Islands, whose unique wildlife inspired Darwin\'s theory of evolution, must balance the economic benefits of tourism with conservation needs. Annual visitor numbers, once limited to a few thousand, have grown into the hundreds of thousands. Coral reefs popular with snorkelers and divers experience cumulative damage from boats, sunscreen chemicals, and physical contact. Ancient archaeological sites suffer wear from millions of visitors walking on surfaces designed to last for centuries, not for daily mass tourism.</p>
      
      <p><span class="para-num">E</span> The environmental costs of tourism extend beyond local impacts. Aviation alone accounts for approximately three percent of global carbon dioxide emissions, with this share rising rapidly as flying becomes more widespread. The carbon footprint of international tourism, when full lifecycle effects are considered, may be considerably larger. Hotels and resorts consume enormous quantities of water, often in regions where freshwater is scarce. The construction of tourist infrastructure has destroyed coastal habitats and ancient landscapes that took millennia to develop. These costs are often invisible to visitors enjoying their experiences and rarely reflected in the prices they pay.</p>
      
      <p><span class="para-num">F</span> Local communities frequently bear the costs of tourism while seeing limited benefits. In many destinations, the most profitable tourist businesses are owned by multinational corporations or wealthy outsiders, with most revenue flowing out rather than supporting local economies. Service workers in tourism are typically employed at low wages, often seasonally and without security. Cultural traditions can be transformed into commercial performances, gradually losing their authentic meaning. Some indigenous communities have actively resisted tourism development, arguing that the brief economic benefits cannot compensate for the long-term damage to their way of life.</p>
      
      <p><span class="para-num">G</span> Responses to these challenges are still being developed. Some destinations have implemented visitor limits, requiring advance bookings or charging entrance fees that discourage casual visits. Others promote "sustainable tourism" that aims to minimise environmental impact while ensuring local communities benefit financially. Education campaigns urge tourists to consider their impacts and behave responsibly. Whether these efforts will be sufficient to prevent the worst consequences of overtourism, while preserving the genuine benefits that tourism can provide, remains an open question. The future of one of humanity\'s most rapidly growing activities depends on finding answers.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Du lịch đã trở thành một trong những ngành công nghiệp lớn nhất thế giới, tạo ra khoảng 10% hoạt động kinh tế toàn cầu. Đối với nhiều quốc gia, chi tiêu du lịch là nguồn ngoại tệ và cơ hội kinh tế quan trọng. Tuy nhiên, sự phát triển nhanh chóng đã tạo ra các vấn đề - "overtourism" - khi điểm đến thu hút nhiều khách hơn khả năng chứa.</p>
      
      <p><strong>Đoạn B:</strong> Quy mô du lịch hiện đại chưa từng có. Lượng khách du lịch quốc tế đã tăng từ khoảng 25 triệu năm 1950 lên trên 1.4 tỷ trước đại dịch - tăng hơn 5,000%. Du lịch hàng không trở nên rẻ hơn đáng kể. Các điểm đến từng đón hàng chục nghìn khách giờ đón hàng triệu khách mỗi năm.</p>
      
      <p><strong>Đoạn C:</strong> Venice là ví dụ được trích dẫn nhiều nhất về hậu quả của overtourism. Thành phố Ý lịch sử với dân số thường trú chỉ khoảng 50,000 thường xuyên đón 30 triệu khách mỗi năm. Tàu du lịch đóng góp lớn vào số lượng khách nhưng chi tiêu tương đối ít. Giá bất động sản tăng lên bởi cho thuê ngắn hạn. Cửa hàng truyền thống nhường chỗ cho cửa hàng lưu niệm.</p>
      
      <p><strong>Đoạn D:</strong> Ngoài các thành phố lớn, overtourism ảnh hưởng đến môi trường tự nhiên mong manh. Galapagos phải cân bằng lợi ích kinh tế từ du lịch với nhu cầu bảo tồn. Lượng khách hàng năm từng giới hạn ở vài nghìn giờ tăng lên hàng trăm nghìn. Rạn san hô phổ biến với những người lặn snorkel và lặn biển trải qua thiệt hại tích lũy từ tàu, hóa chất kem chống nắng, và tiếp xúc vật lý.</p>
      
      <p><strong>Đoạn E:</strong> Chi phí môi trường của du lịch vượt ra ngoài tác động địa phương. Hàng không chiếm khoảng 3% lượng phát thải CO2 toàn cầu, với tỷ lệ này tăng nhanh. Khách sạn và khu nghỉ dưỡng tiêu thụ lượng nước khổng lồ, thường ở các vùng nước ngọt khan hiếm. Việc xây dựng cơ sở hạ tầng du lịch đã phá hủy môi trường sống ven biển.</p>
      
      <p><strong>Đoạn F:</strong> Các cộng đồng địa phương thường gánh chịu chi phí của du lịch trong khi nhận được lợi ích hạn chế. Các doanh nghiệp du lịch lợi nhuận nhất thuộc sở hữu các tập đoàn đa quốc gia, hầu hết doanh thu chảy ra ngoài. Công nhân dịch vụ thường được tuyển dụng với mức lương thấp. Truyền thống văn hóa có thể bị biến đổi thành biểu diễn thương mại.</p>
      
      <p><strong>Đoạn G:</strong> Các phản ứng với những thách thức này vẫn đang được phát triển. Một số điểm đến đã thực hiện giới hạn khách, yêu cầu đặt trước hoặc tính phí vào cửa. Các chiến dịch giáo dục thúc giục khách du lịch xem xét tác động và hành xử có trách nhiệm.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'International tourist numbers grew by over 5,000 percent between 1950 and the recent pandemic.', answer: 'TRUE', explain: 'Đoạn B: "an increase of more than five thousand percent".' },
          { q: 'Venice has a permanent population of about 30 million people.', answer: 'FALSE', explain: 'Đoạn C: "a permanent population of only about 50,000" - 30 triệu là số khách du lịch hàng năm.' },
          { q: 'Cruise ships pay high taxes to the cities they visit.', answer: 'NOT GIVEN', explain: 'Đoạn C nói tàu du lịch chi tiêu ít ở địa phương nhưng không đề cập đến việc chúng có/không trả thuế cao.' },
          { q: 'Aviation accounts for around three percent of global CO2 emissions.', answer: 'TRUE', explain: 'Đoạn E: "Aviation alone accounts for approximately three percent of global carbon dioxide emissions".' },
          { q: 'Workers in tourism are usually employed in highly secure, well-paid positions.', answer: 'FALSE', explain: 'Đoạn F: "typically employed at low wages, often seasonally and without security".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, the rise of online booking platforms has:', options: ['A. Made flights more expensive', 'B. Increased visa requirements globally', 'C. Reduced practical barriers to international travel', 'D. Limited tourist access to popular destinations'], answer: 'C', explain: 'Đoạn B: "The rise of online platforms for booking flights and accommodation has further reduced the practical barriers to international travel".' },
          { q: 'In Venice, short-term rentals have:', options: ['A. Provided affordable housing for locals', 'B. Driven up property prices and displaced residents', 'C. Been completely banned by the city', 'D. Lowered prices for traditional shops'], answer: 'B', explain: 'Đoạn C: "Property prices have been driven up by short-term rentals catering to tourists, displacing the resident population".' },
          { q: 'The damage to ancient archaeological sites comes from:', options: ['A. The chemicals used to clean them', 'B. The wear caused by millions of visitors', 'C. Looting by professional thieves', 'D. Sound vibrations from tour buses'], answer: 'B', explain: 'Đoạn D: "Ancient archaeological sites suffer wear from millions of visitors walking on surfaces".' },
          { q: 'According to the passage, local communities often:', options: ['A. Receive most of the profits from tourism', 'B. Bear the costs while seeing limited benefits', 'C. Welcome unlimited tourist development', 'D. Have no involvement in tourist activities'], answer: 'B', explain: 'Đoạn F: "Local communities frequently bear the costs of tourism while seeing limited benefits".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'Tourism generates approximately __________ percent of global economic activity.', answer: 'ten', explain: 'Đoạn A: "generating roughly ten percent of global economic activity".' },
          { q: 'In 1950, international tourist arrivals were roughly __________ million.', answer: '25', explain: 'Đoạn B: "from roughly 25 million in 1950".' },
          { q: 'Coral reefs are damaged by boats, physical contact, and __________ chemicals.', answer: 'sunscreen', explain: 'Đoạn D: "boats, sunscreen chemicals, and physical contact".' },
          { q: 'Some destinations now require __________ bookings to limit visitor numbers.', answer: 'advance', explain: 'Đoạn G: "requiring advance bookings or charging entrance fees".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 16 - TEST 3 ====================
  'cam16-t3': {
    title: 'The Lost City of Petra',
    topic: 'Archaeology · History',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Lost City of Petra',
      content: `<p><span class="para-num">A</span> Hidden deep in the mountainous deserts of southern Jordan lies one of the world\'s most remarkable archaeological sites: the ancient city of Petra. For centuries this elaborate metropolis, with its temples and tombs carved directly into rose-red sandstone cliffs, was unknown to the outside world. When the Swiss explorer Johann Ludwig Burckhardt rediscovered it in 1812, posing as a Muslim pilgrim to access territory closed to Europeans, he found a city that had been largely abandoned for over a thousand years. Today Petra attracts hundreds of thousands of visitors annually and stands as one of UNESCO\'s World Heritage Sites.</p>
      
      <p><span class="para-num">B</span> Petra was the capital of the Nabataean kingdom, a people whose origins remain somewhat mysterious. They appear to have been Arab nomads who gradually settled along the trade routes connecting Arabia, the Mediterranean, and Mesopotamia. By the fourth century BCE they had established Petra as their main centre, taking advantage of its strategic location at the intersection of major trade routes. The site was also remarkable for its defensibility — surrounded by mountains and accessed primarily through a narrow gorge called the Siq, which winds through cliffs over 80 metres high.</p>
      
      <p><span class="para-num">C</span> The Nabataeans grew wealthy by controlling the lucrative trade in incense, particularly frankincense and myrrh, which were among the most valuable commodities of the ancient world. Caravans loaded with these and other goods crossed Nabataean territory, paying tolls and acquiring supplies. The kingdom\'s position made it possible to charge substantial fees while providing essential services such as water, food, and protection. At its peak around the first century CE, Petra may have had a population of 30,000 and was visited by traders from across the known world.</p>
      
      <p><span class="para-num">D</span> The Nabataeans\' most remarkable achievement was their mastery of water management in an arid landscape. Petra receives only about 150 millimetres of rainfall annually, yet the city supported a substantial population and irrigated gardens. Nabataean engineers constructed an elaborate system of dams, cisterns, and ceramic pipes that captured every available drop of water during the brief rainy season and stored it for use throughout the year. Some of these waterworks remained in use until modern times, and recent archaeological work continues to reveal the sophistication of their hydraulic engineering.</p>
      
      <p><span class="para-num">E</span> Petra\'s famous facades, carved directly into the cliff face, show a remarkable fusion of architectural traditions. Greek influences are evident in the columns and pediments, while Egyptian motifs appear in the decoration. Native Arab styles are also present, and some elements show influence from as far as India. The most famous monument, known to modern visitors as Al-Khazneh (The Treasury), was probably a royal tomb but acquired its current name from a legend that pirates had hidden treasure in its upper chambers. Other monuments, including theatres, temples, and a vast monastery known as Ad-Deir, are scattered throughout the site.</p>
      
      <p><span class="para-num">F</span> Petra\'s decline began with the Roman annexation of the Nabataean kingdom in 106 CE. The Romans built roads that bypassed Petra and reduced its commercial importance. A devastating earthquake in 363 CE damaged many buildings and crucially disrupted the water systems on which the city depended. Christianity spread to Petra during the Byzantine period, and several churches were established in former pagan buildings. But by the time of the Islamic conquests of the seventh century, Petra was largely deserted. Local Bedouin people continued to live in some of the rock-cut structures, but the city as such had ceased to exist.</p>
      
      <p><span class="para-num">G</span> Modern archaeology continues to reveal new aspects of Petra. Less than fifteen percent of the ancient city has been formally excavated, and new discoveries are made regularly. Recent satellite imagery has identified buried structures that may indicate even greater complexity than previously suspected. The site faces serious challenges from natural erosion, occasional flash floods, and the impact of mass tourism. Conservation work, often involving international partnerships, attempts to balance access for visitors with preservation for future generations. The full story of this remarkable city is still being uncovered, more than two thousand years after its founders shaped its first monuments.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Ẩn sâu trong sa mạc miền nam Jordan là một trong những di tích khảo cổ đáng chú ý nhất thế giới: thành phố cổ Petra. Trong nhiều thế kỷ thành phố cầu kỳ này với các đền và lăng mộ được khắc trực tiếp vào vách đá sa thạch màu hồng đỏ không được thế giới bên ngoài biết đến. Khi nhà thám hiểm Thụy Sĩ Johann Ludwig Burckhardt phát hiện lại nó năm 1812, đóng vai khách hành hương Hồi giáo.</p>
      
      <p><strong>Đoạn B:</strong> Petra là thủ đô của vương quốc Nabataean, một dân tộc có nguồn gốc bí ẩn. Họ dường như là người Ả Rập du mục dần định cư dọc theo các tuyến đường thương mại. Vào thế kỷ 4 TCN họ đã thành lập Petra làm trung tâm chính. Địa điểm cũng đáng chú ý vì tính phòng thủ - được bao quanh bởi núi và truy cập chủ yếu qua hẻm núi hẹp gọi là Siq.</p>
      
      <p><strong>Đoạn C:</strong> Người Nabataean giàu lên bằng cách kiểm soát thương mại hương béo lucrative, đặc biệt là frankincense và myrrh - hàng hóa giá trị nhất thế giới cổ đại. Caravans chở hàng đi qua lãnh thổ Nabataean, trả phí và mua đồ. Ở đỉnh cao khoảng thế kỷ 1 SCN, Petra có thể có dân số 30,000.</p>
      
      <p><strong>Đoạn D:</strong> Thành tựu đáng chú ý nhất của người Nabataean là làm chủ quản lý nước trong cảnh quan khô cằn. Petra chỉ nhận khoảng 150mm mưa hàng năm, nhưng thành phố hỗ trợ dân số đáng kể và vườn được tưới. Kỹ sư Nabataean xây dựng hệ thống đập, bể chứa, và ống gốm bắt được mỗi giọt nước có sẵn.</p>
      
      <p><strong>Đoạn E:</strong> Các mặt tiền nổi tiếng của Petra, được khắc trực tiếp vào vách đá, cho thấy sự kết hợp đáng chú ý của các truyền thống kiến trúc. Ảnh hưởng Hy Lạp rõ ràng trong các cột. Họa tiết Ai Cập xuất hiện trong trang trí. Phong cách Ả Rập bản địa cũng hiện diện. Tượng đài nổi tiếng nhất, Al-Khazneh (Kho báu), có lẽ là lăng mộ hoàng gia.</p>
      
      <p><strong>Đoạn F:</strong> Sự suy thoái của Petra bắt đầu với việc La Mã sáp nhập vương quốc Nabataean năm 106 SCN. Người La Mã xây đường vòng qua Petra và giảm tầm quan trọng thương mại. Trận động đất tàn phá năm 363 SCN làm hỏng nhiều tòa nhà và quan trọng làm gián đoạn hệ thống nước. Vào thời chinh phục Hồi giáo thế kỷ 7, Petra phần lớn bị bỏ hoang.</p>
      
      <p><strong>Đoạn G:</strong> Khảo cổ học hiện đại tiếp tục tiết lộ các khía cạnh mới của Petra. Ít hơn 15% thành phố cổ đã được khai quật chính thức. Hình ảnh vệ tinh gần đây đã xác định các cấu trúc bị chôn vùi có thể chỉ ra sự phức tạp lớn hơn nghi ngờ trước đây. Khu vực đối mặt với thách thức nghiêm trọng từ xói mòn tự nhiên, lũ quét, và tác động của du lịch hàng loạt.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Burckhardt rediscovered Petra by disguising himself as a Muslim pilgrim.', answer: 'TRUE', explain: 'Đoạn A: "posing as a Muslim pilgrim to access territory closed to Europeans".' },
          { q: 'The Nabataean people were originally from Mesopotamia.', answer: 'FALSE', explain: 'Đoạn B: "They appear to have been Arab nomads" - người Ả Rập du mục.' },
          { q: 'Petra is mainly accessed through a narrow gorge called the Siq.', answer: 'TRUE', explain: 'Đoạn B: "accessed primarily through a narrow gorge called the Siq".' },
          { q: 'Petra received less rainfall than most other cities of its time.', answer: 'NOT GIVEN', explain: 'Đoạn D cho biết Petra nhận 150mm mưa nhưng không so sánh với các thành phố khác cùng thời.' },
          { q: 'Al-Khazneh actually contained hidden pirate treasure.', answer: 'FALSE', explain: 'Đoạn E: "acquired its current name from a legend that pirates had hidden treasure" - chỉ là truyền thuyết.' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, the Nabataeans grew wealthy primarily from:', options: ['A. Mining precious metals', 'B. Farming irrigated land', 'C. Controlling trade in incense', 'D. Building monuments for foreign rulers'], answer: 'C', explain: 'Đoạn C: "The Nabataeans grew wealthy by controlling the lucrative trade in incense".' },
          { q: 'The architectural style of Petra shows influences from:', options: ['A. Only Greek and Roman traditions', 'B. Several civilizations including Greek, Egyptian, and Arab', 'C. Native Arab styles exclusively', 'D. Indian and Chinese sources only'], answer: 'B', explain: 'Đoạn E: "Greek influences... Egyptian motifs... Native Arab styles".' },
          { q: 'The decline of Petra was caused by several factors including:', options: ['A. The Roman annexation and an earthquake', 'B. Invasion by Egyptian armies', 'C. The discovery of better trade routes by sea', 'D. Religious conflict between Christians and Muslims'], answer: 'A', explain: 'Đoạn F: "Roman annexation of the Nabataean kingdom in 106 CE... devastating earthquake in 363 CE".' },
          { q: 'According to the passage, what percentage of Petra has been formally excavated?', options: ['A. About half', 'B. Roughly 30 percent', 'C. Less than 15 percent', 'D. The entire site'], answer: 'C', explain: 'Đoạn G: "Less than fifteen percent of the ancient city has been formally excavated".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'Petra was rediscovered by Burckhardt in __________.', answer: '1812', explain: 'Đoạn A: "the Swiss explorer Johann Ludwig Burckhardt rediscovered it in 1812".' },
          { q: 'At its peak, Petra may have had a population of approximately __________.', answer: '30,000', explain: 'Đoạn C: "a population of 30,000".' },
          { q: 'Petra receives only about __________ millimetres of rainfall annually.', answer: '150', explain: 'Đoạn D: "Petra receives only about 150 millimetres of rainfall annually".' },
          { q: 'A devastating earthquake damaged Petra in the year __________.', answer: '363', explain: 'Đoạn F: "A devastating earthquake in 363 CE damaged many buildings".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 15 - TEST 3 ====================
  'cam15-t3': {
    title: 'The Rise of Cities',
    topic: 'History · Urban Studies',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Rise of the World\'s Cities',
      content: `<p><span class="para-num">A</span> For most of human history, the vast majority of people lived in rural settings, growing food and raising animals on small farms scattered across the landscape. Cities, where they existed at all, were small islands of dense settlement in a vast sea of countryside. As recently as 1800, only about three percent of the world\'s population lived in urban areas. Today, more than half of humanity lives in cities, and this proportion continues to rise. The transformation from a predominantly rural to a predominantly urban species has happened with remarkable speed in historical terms, and its consequences are still unfolding.</p>
      
      <p><span class="para-num">B</span> The first cities emerged in Mesopotamia around 4000 BCE, in the fertile region between the Tigris and Euphrates rivers in what is now Iraq. Earlier human settlements had existed for thousands of years, but these were mostly small villages of a few hundred people. Cities required something fundamentally new: the ability to support populations far larger than local food production could sustain. This depended on agricultural surpluses produced by farmers in the surrounding countryside and brought to the city through systems of trade, taxation, or tribute. The earliest cities, including Uruk, Ur, and Eridu, may have had populations of 20,000 to 80,000 — astonishingly large for their time.</p>
      
      <p><span class="para-num">C</span> Cities offered both extraordinary opportunities and serious risks. The concentration of people enabled specialisation of labour to a degree impossible in rural settings. Skilled craftspeople, traders, priests, and administrators could devote themselves to their work because farmers in the surrounding region produced enough food for everyone. This specialisation drove technological innovation, artistic achievement, and intellectual development. Most of the world\'s great religions, philosophical traditions, and scientific discoveries emerged from urban environments. Yet cities were also dangerous places. The same density that enabled cultural development also fostered disease outbreaks, and pre-modern cities typically had death rates so high that they could only maintain their populations through continuous immigration from the countryside.</p>
      
      <p><span class="para-num">D</span> The relationship between cities and the surrounding countryside has always been complex. Urban populations depended on rural areas for food, raw materials, and often for population growth itself. Yet cities typically extracted more value from rural areas than they returned, sometimes through outright exploitation. Ancient cities were often surrounded by walls, both for defence and to demarcate the boundary between urban privileges and rural obligations. Medieval European cities required peasants to provide specific quantities of grain, animals, or labour to support urban populations. These tensions between city and countryside remain visible in modern political conflicts around the world.</p>
      
      <p><span class="para-num">E</span> Industrialisation transformed cities profoundly from the late eighteenth century onward. Factories required workforces of unprecedented size, and the labour-saving innovations in agriculture released millions of rural workers to migrate to industrial centres. Cities that had previously housed tens of thousands grew to hold millions within a few decades. Manchester, England, grew from about 22,000 people in 1773 to over 300,000 by 1851 — a nearly fourteen-fold increase in a single human lifetime. Similar transformations occurred across Europe and North America, and later spread to other regions. Industrial cities became symbols of progress but also of misery, with overcrowded slums, pollution, and exploitation of workers driving social movements that would shape modern politics.</p>
      
      <p><span class="para-num">F</span> Cities today face challenges quite different from those of earlier periods. Modern urban populations are largely free from the epidemic diseases that once devastated cities, thanks to clean water, sanitation, and modern medicine. Yet new problems have emerged. Air pollution causes millions of premature deaths annually. Traffic congestion wastes enormous amounts of time and energy. Affordable housing has become difficult to obtain in many growing cities. Climate change threatens cities with rising sea levels, extreme heat, and water scarcity. Income inequality often appears more stark in cities than in rural areas, as wealthy professionals and impoverished workers occupy the same urban spaces while leading very different lives.</p>
      
      <p><span class="para-num">G</span> The future of cities remains a subject of intense debate. Some observers predict that information technology will reduce the importance of physical concentration, allowing more people to work remotely from anywhere. Others note that despite the rise of digital communication, the world\'s most innovative regions remain highly concentrated geographically — suggesting that face-to-face interaction has lost little of its importance. What seems certain is that cities will continue to grow, particularly in Africa and Asia where urbanisation continues rapidly. How effectively they can address their challenges while preserving the benefits that make them so attractive will largely determine the quality of life for most of humanity in the coming century.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Trong phần lớn lịch sử nhân loại, đa số người sống ở môi trường nông thôn. Đến năm 1800, chỉ khoảng 3% dân số thế giới sống ở khu vực đô thị. Ngày nay, hơn nửa nhân loại sống ở thành phố, và tỷ lệ này tiếp tục tăng. Sự biến đổi từ chủ yếu nông thôn sang chủ yếu đô thị đã xảy ra với tốc độ đáng kể.</p>
      
      <p><strong>Đoạn B:</strong> Các thành phố đầu tiên xuất hiện ở Mesopotamia khoảng 4000 TCN, ở khu vực màu mỡ giữa sông Tigris và Euphrates. Các khu định cư trước đó tồn tại hàng nghìn năm nhưng chủ yếu là làng nhỏ vài trăm người. Các thành phố yêu cầu khả năng hỗ trợ dân số lớn hơn nhiều so với sản xuất lương thực địa phương. Các thành phố sớm nhất bao gồm Uruk, Ur, Eridu có thể có dân số 20,000-80,000.</p>
      
      <p><strong>Đoạn C:</strong> Các thành phố mang đến cơ hội phi thường và rủi ro nghiêm trọng. Sự tập trung dân cho phép chuyên môn hóa lao động ở mức không thể trong nông thôn. Thợ thủ công, thương nhân, linh mục có thể cống hiến cho công việc của họ. Sự chuyên môn hóa thúc đẩy đổi mới công nghệ, thành tựu nghệ thuật. Tuy nhiên thành phố cũng nguy hiểm - mật độ thúc đẩy bùng phát dịch bệnh.</p>
      
      <p><strong>Đoạn D:</strong> Mối quan hệ giữa thành phố và nông thôn xung quanh luôn phức tạp. Dân số đô thị phụ thuộc vào khu vực nông thôn về lương thực, nguyên liệu thô. Tuy nhiên các thành phố thường trích xuất nhiều giá trị từ khu vực nông thôn hơn so với chúng trả lại. Các thành phố cổ đại thường được bao quanh bởi tường, vừa để phòng thủ vừa để phân định ranh giới giữa đặc quyền đô thị và nghĩa vụ nông thôn.</p>
      
      <p><strong>Đoạn E:</strong> Công nghiệp hóa biến đổi các thành phố sâu sắc từ cuối thế kỷ 18. Nhà máy yêu cầu lực lượng lao động khổng lồ chưa từng có. Manchester, Anh, tăng từ khoảng 22,000 người năm 1773 lên hơn 300,000 vào năm 1851 - tăng gần 14 lần trong một đời người. Các thành phố công nghiệp trở thành biểu tượng của tiến bộ nhưng cũng là nỗi khổ.</p>
      
      <p><strong>Đoạn F:</strong> Các thành phố ngày nay đối mặt với thách thức khá khác. Dân số đô thị hiện đại phần lớn không còn các bệnh dịch nhờ nước sạch, vệ sinh, y học hiện đại. Tuy nhiên có vấn đề mới. Ô nhiễm không khí gây ra hàng triệu cái chết sớm. Tắc đường lãng phí thời gian và năng lượng. Nhà ở giá phải chăng khó có được. Biến đổi khí hậu đe dọa thành phố.</p>
      
      <p><strong>Đoạn G:</strong> Tương lai của các thành phố vẫn là chủ đề tranh luận mạnh mẽ. Một số người dự đoán công nghệ thông tin sẽ giảm tầm quan trọng của tập trung vật lý. Những người khác lưu ý rằng dù truyền thông kỹ thuật số phát triển, các vùng đổi mới nhất vẫn tập trung địa lý cao. Điều chắc chắn là các thành phố sẽ tiếp tục phát triển, đặc biệt ở châu Phi và châu Á.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'In 1800, the majority of people lived in rural areas.', answer: 'TRUE', explain: 'Đoạn A: "only about three percent of the world\'s population lived in urban areas" → đa số sống ở nông thôn.' },
          { q: 'The first cities emerged around 4000 BCE in Mesopotamia.', answer: 'TRUE', explain: 'Đoạn B: "The first cities emerged in Mesopotamia around 4000 BCE".' },
          { q: 'Pre-modern cities had birth rates higher than their death rates.', answer: 'FALSE', explain: 'Đoạn C: "could only maintain their populations through continuous immigration from the countryside" → tỷ lệ tử cao hơn sinh.' },
          { q: 'Manchester\'s population multiplied dramatically during industrialisation.', answer: 'TRUE', explain: 'Đoạn E: "grew from about 22,000 people in 1773 to over 300,000 by 1851 — a nearly fourteen-fold increase".' },
          { q: 'Cities will likely become smaller as remote work becomes more common.', answer: 'NOT GIVEN', explain: 'Đoạn G nói có người dự đoán remote work giảm tầm quan trọng đô thị, nhưng cũng nói "What seems certain is that cities will continue to grow".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'Cities became possible because of:', options: ['A. The invention of writing', 'B. Agricultural surpluses from surrounding farmers', 'C. The defeat of nomadic peoples', 'D. The discovery of metals'], answer: 'B', explain: 'Đoạn B: "This depended on agricultural surpluses produced by farmers in the surrounding countryside".' },
          { q: 'According to the passage, cities have always produced:', options: ['A. Higher living standards than rural areas', 'B. Both cultural achievements and disease outbreaks', 'C. Greater equality between citizens', 'D. Better food than the countryside'], answer: 'B', explain: 'Đoạn C: "The same density that enabled cultural development also fostered disease outbreaks".' },
          { q: 'Walls around ancient cities served to:', options: ['A. Provide architectural decoration only', 'B. Protect against rainstorms and floods', 'C. Serve defence and define city-countryside boundaries', 'D. Display the wealth of the rulers'], answer: 'C', explain: 'Đoạn D: "both for defence and to demarcate the boundary between urban privileges and rural obligations".' },
          { q: 'The passage suggests that despite digital communication:', options: ['A. Cities are becoming completely unnecessary', 'B. Innovative regions remain highly concentrated geographically', 'C. Most workers have moved to rural areas', 'D. Information technology has replaced cities entirely'], answer: 'B', explain: 'Đoạn G: "the world\'s most innovative regions remain highly concentrated geographically".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'In 1800, only about __________ percent of people lived in cities.', answer: 'three', explain: 'Đoạn A: "only about three percent of the world\'s population".' },
          { q: 'The earliest cities like Uruk and Ur may have reached populations of __________.', answer: '80,000', explain: 'Đoạn B: "populations of 20,000 to 80,000".' },
          { q: 'Industrial cities created __________ slums, pollution, and worker exploitation.', answer: 'overcrowded', explain: 'Đoạn E: "with overcrowded slums, pollution, and exploitation".' },
          { q: 'Cities continue to urbanise rapidly especially in Africa and __________.', answer: 'Asia', explain: 'Đoạn G: "particularly in Africa and Asia where urbanisation continues rapidly".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 14 - TEST 3 ====================
  'cam14-t3': {
    title: 'The Science of Taste',
    topic: 'Biology · Sensory Science',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Science of Taste',
      content: `<p><span class="para-num">A</span> Taste seems like the most personal and subjective of our senses. We all have foods we love and foods we hate, and these preferences feel like fundamental aspects of who we are. Yet behind these individual differences lies a sophisticated sensory system that operates similarly in everyone. Understanding how taste works has practical implications ranging from food product development to medical treatments for taste disorders, and the field has been revolutionised by recent discoveries that overturn long-held assumptions.</p>
      
      <p><span class="para-num">B</span> The mouth contains roughly 10,000 taste buds, mostly concentrated on the tongue but also present on the soft palate, throat, and epiglottis. Each taste bud contains around 50 to 150 taste receptor cells that respond to chemicals dissolved in saliva. When you eat something, these cells send signals to the brain via nerves, which the brain interprets as taste sensations. Taste buds are replaced every one to two weeks throughout life, except in older adults, whose ability to regenerate them declines — partly explaining why food often seems less flavourful to elderly people.</p>
      
      <p><span class="para-num">C</span> For most of the twentieth century, science taught that humans could detect just four basic tastes: sweet, sour, salty, and bitter. This information appeared in countless biology textbooks, often accompanied by diagrams showing different "taste areas" on the tongue. Both ideas are wrong. The famous "tongue map" was based on a misinterpretation of nineteenth-century German research and has no basis in fact — all taste sensations can be detected at all parts of the tongue. More importantly, scientific consensus now recognises five basic tastes, with the fifth being umami, the savoury taste characteristic of mushrooms, aged cheese, soy sauce, and meat.</p>
      
      <p><span class="para-num">D</span> Umami was first identified in 1908 by the Japanese chemist Kikunae Ikeda, who isolated the chemical responsible — glutamate, an amino acid that occurs naturally in many foods. Despite Ikeda\'s work, the wider scientific community took almost a century to fully accept umami as a basic taste. The breakthrough came in 2000, when researchers identified specific taste receptors that respond to glutamate, providing the biological basis that umami had previously lacked. Today, the food industry uses monosodium glutamate (MSG), a concentrated form of the umami taste chemical, in countless products. Despite some persistent public health concerns, scientific reviews have consistently found MSG to be safe for normal consumption.</p>
      
      <p><span class="para-num">E</span> Recent research has identified additional candidates for basic tastes, though their status remains debated. Fat appears to have its own taste, separate from the texture sensation we usually associate with fattiness. Some researchers argue for kokumi — a "mouthfulness" sensation produced by certain compounds that enhance other tastes. Others suggest that we may have a basic taste for water itself, distinct from its role as a solvent for other tastes. As scientific understanding deepens, the simple four-or-five tastes model may need to be extended further.</p>
      
      <p><span class="para-num">F</span> What we commonly call "taste" actually involves several sensory systems working together. The actual taste detection in the mouth provides only basic information. The complex flavours we experience also depend heavily on smell — most of what we think of as the "taste" of food is actually aroma. This is why food seems flavourless when we have colds that block our nasal passages, and why elaborate wine tasting techniques emphasise smelling as much as drinking. Texture, temperature, and even pain (from spicy foods) all contribute to the overall experience that humans informally call "taste".</p>
      
      <p><span class="para-num">G</span> Individual differences in taste perception are larger than most people realise. Some people, known as supertasters, have more taste buds than average and experience strong tastes — particularly bitterness — more intensely than others. About a quarter of the population are supertasters; another quarter are non-tasters who experience tastes only weakly. Genetics largely determines these differences, and they have practical consequences. Supertasters often dislike vegetables like broccoli and cabbage that contain bitter compounds, while non-tasters may add excessive salt and sugar to compensate for weak taste sensations. Understanding individual variation has implications for nutrition advice, food product development, and even pharmaceutical research, since the same medicines can taste quite different to different people.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Vị giác có vẻ là cảm giác cá nhân và chủ quan nhất của chúng ta. Tuy nhiên đằng sau những khác biệt cá nhân này là một hệ thống cảm giác tinh vi hoạt động tương tự ở mọi người. Hiểu cách vị giác hoạt động có ý nghĩa thực tế từ phát triển sản phẩm thực phẩm đến điều trị y học.</p>
      
      <p><strong>Đoạn B:</strong> Miệng chứa khoảng 10,000 nụ vị giác, chủ yếu trên lưỡi nhưng cũng có ở vòm miệng mềm, họng, và nắp thanh quản. Mỗi nụ vị giác chứa khoảng 50-150 tế bào thụ thể vị giác. Khi bạn ăn, các tế bào này gửi tín hiệu đến não. Nụ vị giác được thay thế mỗi 1-2 tuần suốt đời, ngoại trừ người lớn tuổi mà khả năng tái sinh giảm.</p>
      
      <p><strong>Đoạn C:</strong> Trong phần lớn thế kỷ 20, khoa học dạy rằng con người có thể phát hiện chỉ 4 vị cơ bản: ngọt, chua, mặn, đắng. "Bản đồ lưỡi" nổi tiếng dựa trên hiểu sai nghiên cứu Đức thế kỷ 19 và không có cơ sở thực tế. Đồng thuận khoa học hiện công nhận 5 vị cơ bản, với vị thứ năm là umami - vị đậm đà đặc trưng của nấm, phô mai già, nước tương, thịt.</p>
      
      <p><strong>Đoạn D:</strong> Umami được nhà hóa học Nhật Kikunae Ikeda xác định lần đầu năm 1908. Ông phân lập chất hóa học chịu trách nhiệm - glutamate. Cộng đồng khoa học rộng rãi đã mất gần một thế kỷ để chấp nhận đầy đủ umami. Đột phá đến năm 2000 khi các nhà nghiên cứu xác định thụ thể vị giác phản ứng với glutamate.</p>
      
      <p><strong>Đoạn E:</strong> Nghiên cứu gần đây đã xác định các ứng viên bổ sung cho vị cơ bản, mặc dù trạng thái của chúng vẫn còn tranh luận. Chất béo dường như có vị riêng. Một số nhà nghiên cứu lập luận cho kokumi - cảm giác "đầy miệng". Những người khác gợi ý chúng ta có thể có vị cơ bản cho nước.</p>
      
      <p><strong>Đoạn F:</strong> Điều chúng ta thường gọi là "vị" thực sự liên quan đến một số hệ thống cảm giác hoạt động cùng nhau. Hương vị phức tạp chúng ta trải nghiệm cũng phụ thuộc nặng vào mùi - hầu hết những gì chúng ta nghĩ là "vị" của thức ăn thực ra là mùi thơm. Đó là lý do thức ăn có vẻ không ngon khi chúng ta bị cảm. Kết cấu, nhiệt độ, và cả cơn đau (từ thức ăn cay) đều đóng góp.</p>
      
      <p><strong>Đoạn G:</strong> Sự khác biệt cá nhân về cảm nhận vị giác lớn hơn hầu hết mọi người nhận ra. Một số người được gọi là "supertasters" có nhiều nụ vị giác hơn trung bình và trải nghiệm vị mạnh - đặc biệt vị đắng - dữ dội hơn người khác. Khoảng một phần tư dân số là supertasters; một phần tư khác là non-tasters. Di truyền chủ yếu quyết định những khác biệt này.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Taste buds are found only on the tongue.', answer: 'FALSE', explain: 'Đoạn B: "mostly concentrated on the tongue but also present on the soft palate, throat, and epiglottis".' },
          { q: 'Elderly people often have less ability to regenerate taste buds.', answer: 'TRUE', explain: 'Đoạn B: "in older adults, whose ability to regenerate them declines".' },
          { q: 'The "tongue map" showing different taste areas is now known to be accurate.', answer: 'FALSE', explain: 'Đoạn C: "The famous tongue map was based on a misinterpretation... has no basis in fact".' },
          { q: 'Kikunae Ikeda was widely recognised for his discovery of umami during his lifetime.', answer: 'NOT GIVEN', explain: 'Đoạn D nói umami được chấp nhận rộng rãi gần một thế kỷ sau, nhưng không nói cụ thể về sự công nhận với Ikeda khi ông còn sống.' },
          { q: 'About 50 percent of the population are supertasters.', answer: 'FALSE', explain: 'Đoạn G: "About a quarter of the population are supertasters" - khoảng 25%, không phải 50%.' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, scientific acceptance of umami came primarily from:', options: ['A. Ikeda\'s original research in 1908', 'B. The discovery of specific taste receptors in 2000', 'C. Studies of traditional Asian cuisines', 'D. Surveys of restaurant customers'], answer: 'B', explain: 'Đoạn D: "The breakthrough came in 2000, when researchers identified specific taste receptors that respond to glutamate".' },
          { q: 'According to the passage, scientific reviews have found MSG:', options: ['A. To be dangerous to human health', 'B. To be safe for normal consumption', 'C. To have unknown effects', 'D. To work better than salt'], answer: 'B', explain: 'Đoạn D: "scientific reviews have consistently found MSG to be safe for normal consumption".' },
          { q: 'The reason food seems flavourless when we have a cold is that:', options: ['A. Cold viruses damage taste buds permanently', 'B. The body produces extra saliva', 'C. The nasal passages are blocked, reducing smell input', 'D. Body temperature changes affect taste'], answer: 'C', explain: 'Đoạn F: "food seems flavourless when we have colds that block our nasal passages".' },
          { q: 'Supertasters are likely to:', options: ['A. Enjoy bitter vegetables more than other people', 'B. Dislike bitter foods like broccoli and cabbage', 'C. Add more salt and sugar to their food', 'D. Have fewer taste buds than average'], answer: 'B', explain: 'Đoạn G: "Supertasters often dislike vegetables like broccoli and cabbage that contain bitter compounds".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'The mouth contains approximately __________ taste buds.', answer: '10,000', explain: 'Đoạn B: "The mouth contains roughly 10,000 taste buds".' },
          { q: 'The chemical responsible for umami taste is __________.', answer: 'glutamate', explain: 'Đoạn D: "the chemical responsible — glutamate".' },
          { q: 'A possible additional basic taste is __________, the sensation of "mouthfulness".', answer: 'kokumi', explain: 'Đoạn E: "Some researchers argue for kokumi — a mouthfulness sensation".' },
          { q: '__________ largely determines whether someone is a supertaster or non-taster.', answer: 'Genetics', explain: 'Đoạn G: "Genetics largely determines these differences".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 19 - TEST 3 ====================
  'cam19-t3': {
    title: 'The Art of Storytelling',
    topic: 'Anthropology · Culture',
    difficulty: 'Medium',
    passages: [
      {
        label: 'Reading Passage 1',
        title: 'Why Humans Tell Stories',
        content: `<p><span class="para-num">A</span> Stories are everywhere in human life. We read novels for pleasure, watch films for entertainment, share gossip with our friends, and tell our children fairy tales before they sleep. We use stories to explain why we are late to work, to persuade strangers to vote for our preferred candidates, and to understand our own lives. Some psychologists argue that we even dream in narrative form. So pervasive is storytelling that it can be difficult to recognise just how strange this behaviour is. No other species appears to engage in anything comparable, yet humans of every culture and time period have produced narratives in abundance.</p>
        
        <p><span class="para-num">B</span> The universality of storytelling has led many researchers to suspect that it serves crucial biological functions. The literary scholar Jonathan Gottschall has documented striking similarities in stories across vastly different cultures. From traditional folk tales of Africa to modern Hollywood films, certain narrative patterns recur with remarkable consistency: protagonists struggle against difficulties, conflicts emerge and resolve, characters undergo meaningful transformations. These shared patterns suggest that stories may exploit fundamental features of how human minds work — features that themselves evolved for specific purposes.</p>
        
        <p><span class="para-num">C</span> One leading theory holds that storytelling evolved as a form of mental rehearsal. Stories allow us to imagine ourselves in situations we have not actually experienced and to consider how we might respond to challenges before they arise. A child who hears stories about resisting strangers may be better prepared to handle dangerous encounters. An adult who follows a fictional character through a marital crisis may develop insights useful for their own relationships. This theory would explain why we are drawn most strongly to stories that involve emotional intensity and difficult choices — precisely the situations where mental rehearsal would be most valuable.</p>
        
        <p><span class="para-num">D</span> A related theory emphasises the social functions of storytelling. Human beings live in larger and more complex groups than almost any other primates, requiring sophisticated abilities to track relationships, predict behaviour, and maintain cooperation. Stories may provide a kind of laboratory for developing these social skills. By following the experiences of fictional characters, we practise reading minds, understanding motivations, and predicting actions. Brain imaging research has shown that following a narrative engages many of the same brain regions involved in real social interaction, lending support to this view.</p>
        
        <p><span class="para-num">E</span> Stories also play important roles in transmitting cultural knowledge across generations. Long before writing existed, human groups preserved information about hunting techniques, medicinal plants, historical events, and ethical principles through oral traditions. The narrative form helped this information remain memorable and meaningful when it might otherwise have been forgotten. Many indigenous cultures developed elaborate storytelling systems that encoded complex environmental and practical knowledge in seemingly simple tales. Australian Aboriginal songlines, for example, preserve detailed geographical information across vast territories through narratives.</p>
        
        <p><span class="para-num">F</span> The effectiveness of stories as tools of persuasion has long been recognised. Research consistently shows that information presented in narrative form is more memorable and more emotionally impactful than the same information presented as bare facts. This effectiveness has obvious advantages — making important lessons easier to remember and learn — but it also raises concerns. Skilled storytellers can use narrative techniques to spread misinformation, manipulate emotions, and bypass careful reasoning. Political propaganda, advertising campaigns, and modern fake news all exploit the unique power of stories to shape belief and behaviour.</p>
        
        <p><span class="para-num">G</span> Digital technology is transforming both how stories are told and how they affect us. Streaming services deliver more storytelling content than any individual could watch in a lifetime. Video games allow audiences to participate in stories rather than just witnessing them, raising new questions about how interactive narratives affect cognitive and emotional development. Social media platforms have made everyone a storyteller, with billions of personal narratives shared daily across the world. Whether these technological changes will enhance or diminish the ancient power of storytelling to connect human beings and transmit understanding remains to be seen.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Các câu chuyện ở khắp nơi trong đời sống con người. Một số nhà tâm lý học cho rằng chúng ta thậm chí mơ dưới dạng câu chuyện. Không loài nào khác làm điều tương tự.</p>
        <p><strong>Đoạn B:</strong> Tính phổ quát của kể chuyện đã khiến nhiều nhà nghiên cứu nghi ngờ nó phục vụ các chức năng sinh học quan trọng. Học giả văn học Jonathan Gottschall đã ghi lại sự tương đồng nổi bật trong các câu chuyện qua các nền văn hóa rất khác nhau.</p>
        <p><strong>Đoạn C:</strong> Một lý thuyết hàng đầu cho rằng kể chuyện tiến hóa như một hình thức diễn tập tinh thần. Câu chuyện cho phép chúng ta tưởng tượng bản thân trong các tình huống chúng ta chưa thực sự trải qua.</p>
        <p><strong>Đoạn D:</strong> Một lý thuyết liên quan nhấn mạnh các chức năng xã hội của kể chuyện. Các câu chuyện có thể cung cấp một loại phòng thí nghiệm để phát triển những kỹ năng xã hội này. Nghiên cứu chụp ảnh não cho thấy việc theo dõi một câu chuyện kích hoạt nhiều vùng não giống như tương tác xã hội thực.</p>
        <p><strong>Đoạn E:</strong> Các câu chuyện cũng đóng vai trò quan trọng trong việc truyền tải kiến thức văn hóa qua các thế hệ. Songlines của người Bản địa Úc bảo tồn thông tin địa lý chi tiết.</p>
        <p><strong>Đoạn F:</strong> Hiệu quả của các câu chuyện như công cụ thuyết phục từ lâu đã được nhận ra. Tuyên truyền chính trị, chiến dịch quảng cáo, tin giả hiện đại đều khai thác sức mạnh độc đáo của câu chuyện.</p>
        <p><strong>Đoạn G:</strong> Công nghệ kỹ thuật số đang biến đổi cả cách câu chuyện được kể và cách chúng ảnh hưởng đến chúng ta. Trò chơi video cho phép khán giả tham gia vào câu chuyện. Mạng xã hội biến mọi người thành người kể chuyện.</p>`
      },
      {
        label: 'Reading Passage 2',
        title: 'Animal Migration: Mysteries of Long-Distance Travel',
        content: `<p><span class="para-num">A</span> Animal migration is among the most extraordinary phenomena in the natural world. Each year, countless creatures undertake journeys of breathtaking distance and complexity, often traveling thousands of kilometres between distant locations with remarkable precision. The monarch butterfly migrates from Canada to Mexico, the Arctic tern flies from pole to pole, and humpback whales swim from polar feeding grounds to tropical breeding areas. These journeys involve navigation challenges that have puzzled scientists for centuries and continue to reveal new mysteries even with modern research methods.</p>
        
        <p><span class="para-num">B</span> The basic question driving migration research is straightforward: how do animals know where to go and how to get there? For animals that learn migration routes from older members of their species, the answer involves cultural transmission similar to that found in human societies. Young whales accompany their mothers along migration routes for years before traveling alone. Older elephants are believed to lead their family groups along traditional pathways during long-distance movements. These social mechanisms work well when stable populations preserve the knowledge across generations.</p>
        
        <p><span class="para-num">C</span> Many migratory species, however, demonstrate navigation abilities that cannot be explained by learning. Young salmon return to the streams where they were born after spending years at sea, even though no older fish guides them. European eels travel from rivers across Europe to the Sargasso Sea — a journey their grandparents made but they have never experienced. Most strikingly, monarch butterflies make their entire migration cycle across multiple generations, with no individual butterfly experiencing more than one leg of the journey. The information required for these migrations must be encoded genetically rather than learned.</p>
        
        <p><span class="para-num">D</span> The sensory cues used in animal navigation are remarkably diverse. Many birds detect the Earth\'s magnetic field through specialized molecules in their eyes that may respond quantum-mechanically to magnetic forces. Sea turtles use the magnetic field in combination with chemical cues to find specific beaches where they were born. Some migratory salmon appear to remember the chemical signatures of their natal streams and recognize them even after years away. Sun position, star patterns, polarized light from the sky, and even the sound of distant ocean waves have all been shown to play roles in different species\' navigation systems.</p>
        
        <p><span class="para-num">E</span> Modern tracking technology has revolutionized migration research. Tiny GPS devices and radio transmitters can now be attached to animals as small as butterflies, providing detailed information about routes, speeds, and rest stops that were impossible to obtain by traditional observation. Recent studies using such methods have revealed surprising findings: many species follow more complex routes than previously suspected, with intermediate stopover sites that prove essential to the success of their journeys. The loss of even single stopover habitats can disrupt entire migration patterns.</p>
        
        <p><span class="para-num">F</span> Climate change poses unprecedented challenges to migratory species. The seasonal cues that trigger migration — temperature changes, daylight patterns, food availability — are shifting in ways that often disrupt traditional timing. Birds arriving at breeding grounds may find that the insects they depend on have already peaked. Sea creatures may find that ocean currents have shifted, making traditional routes less efficient. Some species have adjusted their behaviour with remarkable speed, while others appear unable to adapt quickly enough. The long-term consequences for global biodiversity may be severe.</p>
        
        <p><span class="para-num">G</span> Human activities present other significant threats. Light pollution disorients night-migrating birds and sea turtles. Wind farms placed in migration corridors can kill substantial numbers of birds and bats. Highway expansion blocks traditional movement patterns of large mammals. The loss of habitat throughout migration routes — particularly wetlands and forests that serve as stopover sites — creates impossible conditions for many species. Effective conservation requires international cooperation across entire migration ranges, a coordination challenge that humanity has only partially solved despite decades of effort.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Sự di cư của động vật là một trong những hiện tượng phi thường nhất trong thế giới tự nhiên. Bướm vua di cư từ Canada đến Mexico, chim nhạn Bắc Cực bay từ cực này sang cực kia, cá voi lưng gù bơi từ vùng cực đến vùng nhiệt đới.</p>
        <p><strong>Đoạn B:</strong> Câu hỏi cơ bản của nghiên cứu di cư: làm thế nào động vật biết đi đâu và làm thế nào để đến đó? Đối với động vật học các tuyến di cư từ thành viên già hơn của loài, câu trả lời liên quan đến truyền tải văn hóa.</p>
        <p><strong>Đoạn C:</strong> Tuy nhiên, nhiều loài di cư cho thấy khả năng định hướng không thể giải thích bằng việc học. Cá hồi non quay về dòng suối nơi chúng được sinh ra. Đáng chú ý nhất, bướm vua thực hiện toàn bộ chu kỳ di cư qua nhiều thế hệ. Thông tin cần thiết phải được mã hóa di truyền.</p>
        <p><strong>Đoạn D:</strong> Các tín hiệu cảm giác được sử dụng trong định hướng động vật đa dạng đáng kể. Nhiều loài chim phát hiện từ trường Trái Đất. Rùa biển sử dụng từ trường kết hợp với tín hiệu hóa học. Cá hồi nhớ chữ ký hóa học của các dòng suối.</p>
        <p><strong>Đoạn E:</strong> Công nghệ theo dõi hiện đại đã cách mạng hóa nghiên cứu di cư. Các thiết bị GPS nhỏ có thể được gắn vào động vật nhỏ như bướm. Nhiều loài đi theo các tuyến đường phức tạp hơn nghi ngờ trước đây.</p>
        <p><strong>Đoạn F:</strong> Biến đổi khí hậu đặt ra những thách thức chưa từng có cho các loài di cư. Các tín hiệu mùa kích hoạt di cư đang thay đổi. Chim đến vùng sinh sản có thể thấy côn trùng họ phụ thuộc đã đạt đỉnh.</p>
        <p><strong>Đoạn G:</strong> Hoạt động con người đặt ra các mối đe dọa đáng kể khác. Ô nhiễm ánh sáng làm mất phương hướng chim đêm. Trang trại gió giết chim và dơi. Mở rộng đường cao tốc chặn các mô hình di chuyển.</p>`
      },
      {
        label: 'Reading Passage 3',
        title: 'The Origin of Civilisation',
        content: `<p><span class="para-num">A</span> The transition from small mobile groups of hunter-gatherers to large settled societies with cities, governments, and complex divisions of labour was perhaps the most significant transformation in human history. For most of our species\' existence, we lived in groups of a few dozen people, moving regularly to follow food sources. Then, beginning about ten thousand years ago, our ancestors began the radical experiment of staying in one place, producing food deliberately rather than gathering it, and gradually building the institutions that would become civilisation. How and why this happened remains one of the most actively debated questions in archaeology.</p>
        
        <p><span class="para-num">B</span> The traditional account, developed in the nineteenth century and dominant for most of the twentieth, presented civilisation as a clear linear progression. Hunter-gatherer life was characterized as short, harsh, and uncertain. Agriculture provided more reliable food supplies, allowing populations to grow and societies to become larger and more complex. Cities and writing eventually followed, and from these foundations modern civilisation gradually developed. In this view, the transition to civilisation was self-evidently beneficial — an obvious improvement that any rational people would embrace once it became possible.</p>
        
        <p><span class="para-num">C</span> Recent research has dramatically complicated this picture. Skeletal evidence from early agricultural communities consistently shows that the first farmers were shorter, less healthy, and shorter-lived than the hunter-gatherers they replaced. The diversity of foods available to hunter-gatherers gave way to dependence on a small number of staple crops, often producing nutritional deficiencies. Diseases that depended on dense human populations and close contact with domesticated animals — like influenza, measles, and tuberculosis — emerged for the first time in the new agricultural settlements. By many measures, the lives of early farmers were worse than those of the hunter-gatherers who preceded them.</p>
        
        <p><span class="para-num">D</span> If agriculture made life harder, why did it spread? Several theories have been proposed. Population pressure may have forced people into agriculture even though they would have preferred their previous lives — once early farmers existed, their higher fertility rates allowed them to outcompete neighboring hunter-gatherer groups for territory. Climate change at the end of the last ice age may have created conditions that favoured agricultural lifestyles in some regions. The development of small-scale gardening as a supplement to hunting and gathering may have led gradually to dependence on cultivation without any single moment of decisive change. Most likely, multiple factors operated together rather than any single cause.</p>
        
        <p><span class="para-num">E</span> The development of cities followed agriculture by several thousand years and presented even greater puzzles. The first cities — Uruk, Memphis, Mohenjo-Daro, and others — emerged in different regions independently between about 4000 and 2000 BCE. These were places where tens of thousands of people lived together in unprecedented densities, with elaborate social hierarchies, organized religion, monumental architecture, and writing systems. Why did people accept the disease, conflict, and inequality that came with urban life, when relatively healthy and egalitarian village life remained as an alternative?</p>
        
        <p><span class="para-num">F</span> One recent theory, developed by anthropologists David Graeber and David Wengrow, challenges the idea that civilisation required hierarchical authority. Their evidence suggests that many early urban societies experimented with various forms of social organisation — including more egalitarian arrangements — before settling into the pyramidal hierarchies that dominated later history. Civilisations that we have traditionally interpreted as inevitably authoritarian may actually have been the product of specific historical choices that could have gone differently. This research suggests that the conventional story of civilisation\'s development is not just incomplete but in important respects misleading.</p>
        
        <p><span class="para-num">G</span> Understanding the origins of civilisation has implications beyond academic interest. Modern societies face urgent questions about how to organize themselves in the face of climate change, technological disruption, and political polarization. If we believe civilisation always required hierarchy and inequality, we may accept these features as necessary. If, however, our ancestors experimented with diverse social arrangements and made specific choices along the way, then the futures available to us may be broader than we have assumed. The past, properly understood, may be more than a record of how we got here — it may be a guide to where we might go next.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Sự chuyển đổi từ các nhóm săn bắt-hái lượm nhỏ di động sang xã hội định cư lớn với thành phố, chính phủ là sự biến đổi quan trọng nhất trong lịch sử nhân loại. Bắt đầu khoảng 10,000 năm trước, tổ tiên chúng ta bắt đầu thử nghiệm sống một chỗ và sản xuất lương thực có chủ đích.</p>
        <p><strong>Đoạn B:</strong> Quan điểm truyền thống thế kỷ 19 trình bày văn minh như một tiến trình tuyến tính rõ ràng. Săn bắt-hái lượm được mô tả là ngắn ngủi và khắc nghiệt. Nông nghiệp cung cấp nguồn cung cấp lương thực đáng tin cậy hơn.</p>
        <p><strong>Đoạn C:</strong> Nghiên cứu gần đây đã làm phức tạp dramatically bức tranh này. Bằng chứng xương cho thấy các nông dân đầu tiên thấp hơn, ít khỏe mạnh hơn. Bệnh tật phụ thuộc vào dân số đông như cúm, sởi, lao xuất hiện lần đầu trong các khu định cư nông nghiệp.</p>
        <p><strong>Đoạn D:</strong> Nếu nông nghiệp làm cho cuộc sống khó khăn hơn, tại sao nó lan rộng? Áp lực dân số có thể đã buộc người ta vào nông nghiệp. Biến đổi khí hậu cuối kỷ băng hà có thể đã tạo điều kiện thuận lợi. Nhiều yếu tố có thể đã hoạt động cùng nhau.</p>
        <p><strong>Đoạn E:</strong> Sự phát triển của các thành phố theo sau nông nghiệp hàng nghìn năm và đặt ra câu đố lớn hơn. Các thành phố đầu tiên - Uruk, Memphis, Mohenjo-Daro - xuất hiện ở các vùng khác nhau độc lập giữa 4000 và 2000 TCN. Tại sao mọi người chấp nhận bệnh tật, xung đột, bất bình đẳng?</p>
        <p><strong>Đoạn F:</strong> Một lý thuyết gần đây của các nhà nhân học David Graeber và David Wengrow thách thức ý tưởng văn minh yêu cầu quyền hạn theo thứ bậc. Nhiều xã hội đô thị đầu tiên đã thử nghiệm các hình thức tổ chức xã hội khác nhau.</p>
        <p><strong>Đoạn G:</strong> Hiểu nguồn gốc văn minh có hàm ý vượt ra ngoài quan tâm học thuật. Nếu chúng ta tin văn minh luôn yêu cầu thứ bậc, chúng ta có thể chấp nhận điều này như cần thiết. Nếu tổ tiên chúng ta đã thử nghiệm các sắp xếp xã hội đa dạng, các tương lai có thể rộng hơn ta giả định.</p>`
      }
    ],
    
    questions: [
      // ========== PASSAGE 1 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 1–5',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'Storytelling appears to be unique to humans among all species.', answer: 'TRUE', explain: 'Đoạn A: "No other species appears to engage in anything comparable".' },
            { q: 'Stories from different cultures show no significant similarities to each other.', answer: 'FALSE', explain: 'Đoạn B: "certain narrative patterns recur with remarkable consistency".' },
            { q: 'Brain imaging shows that following stories uses different brain areas from real social interaction.', answer: 'FALSE', explain: 'Đoạn D: "engages many of the same brain regions involved in real social interaction".' },
            { q: 'Australian Aboriginal songlines were originally created for tourist guidance.', answer: 'NOT GIVEN', explain: 'Đoạn E nói songlines bảo tồn thông tin địa lý nhưng không đề cập đến mục đích du lịch.' },
            { q: 'Stories are generally more memorable than the same information presented as facts.', answer: 'TRUE', explain: 'Đoạn F: "information presented in narrative form is more memorable... than the same information presented as bare facts".' }
          ]
        },
        {
          group: 'Questions 6–9',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to one theory, storytelling helps people:', options: ['A. Communicate without using language', 'B. Mentally prepare for situations they have not yet experienced', 'C. Improve their physical health', 'D. Earn money through entertainment'], answer: 'B', explain: 'Đoạn C: "Stories allow us to imagine ourselves in situations we have not actually experienced".' },
            { q: 'The social theory of storytelling suggests that stories:', options: ['A. Discourage cooperation between people', 'B. Help develop skills for understanding others', 'C. Only matter in modern societies', 'D. Were unimportant in human evolution'], answer: 'B', explain: 'Đoạn D: "we practise reading minds, understanding motivations, and predicting actions".' },
            { q: 'Before writing existed, stories were used to:', options: ['A. Replace formal education entirely', 'B. Preserve cultural knowledge across generations', 'C. Communicate between hostile groups', 'D. Worship various nature gods'], answer: 'B', explain: 'Đoạn E: "human groups preserved information... through oral traditions".' },
            { q: 'The author suggests that the persuasive power of stories:', options: ['A. Has only positive consequences for society', 'B. Has been exaggerated by researchers', 'C. Can be used for both helpful and harmful purposes', 'D. Disappears with digital technology'], answer: 'C', explain: 'Đoạn F: "This effectiveness has obvious advantages... but it also raises concerns".' }
          ]
        },
        {
          group: 'Questions 10–13',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Jonathan Gottschall is described as a literary __________.', answer: 'scholar', explain: 'Đoạn B: "The literary scholar Jonathan Gottschall".' },
            { q: 'Some researchers describe stories as a kind of __________ for developing social skills.', answer: 'laboratory', explain: 'Đoạn D: "Stories may provide a kind of laboratory".' },
            { q: 'Australian Aboriginal __________ encode detailed geographical information through narrative.', answer: 'songlines', explain: 'Đoạn E: "Australian Aboriginal songlines, for example, preserve detailed geographical information".' },
            { q: 'Through __________ media, billions of personal narratives are shared every day.', answer: 'social', explain: 'Đoạn G: "Social media platforms have made everyone a storyteller".' }
          ]
        }
      ],
      
      // ========== PASSAGE 2 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 14–20',
          type: 'matching-headings',
          instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list below.',
          headings: [
            { id: 'i', text: 'The diverse senses animals use to navigate' },
            { id: 'ii', text: 'How modern devices have transformed research' },
            { id: 'iii', text: 'When journey knowledge passes from parent to offspring' },
            { id: 'iv', text: 'The fundamental puzzle of animal navigation' },
            { id: 'v', text: 'Human activities threatening migration' },
            { id: 'vi', text: 'Migration without learning: the genetic puzzle' },
            { id: 'vii', text: 'The introduction of an extraordinary natural behaviour' },
            { id: 'viii', text: 'Disruption from a changing climate' },
            { id: 'ix', text: 'Mating habits of long-distance travellers' }
          ],
          items: [
            { q: 'A', answer: 'vii', explain: 'Đoạn A giới thiệu hiện tượng di cư phi thường trong tự nhiên.' },
            { q: 'B', answer: 'iii', explain: 'Đoạn B nói về việc kiến thức di cư được truyền từ thế hệ già hơn (mẹ-con).' },
            { q: 'C', answer: 'vi', explain: 'Đoạn C giải thích di cư không qua học hỏi - phải mã hóa di truyền (cá hồi, lươn, bướm vua).' },
            { q: 'D', answer: 'i', explain: 'Đoạn D về các giác quan đa dạng dùng để định hướng (từ trường, hóa học, ánh sáng).' },
            { q: 'E', answer: 'ii', explain: 'Đoạn E nói về công nghệ theo dõi hiện đại (GPS, radio transmitter).' },
            { q: 'F', answer: 'viii', explain: 'Đoạn F về biến đổi khí hậu gây gián đoạn.' },
            { q: 'G', answer: 'v', explain: 'Đoạn G về các mối đe dọa từ hoạt động con người (đèn, gió, đường cao tốc).' }
          ]
        },
        {
          group: 'Questions 21–23',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'Monarch butterflies complete their migration in a single lifetime.', answer: 'FALSE', explain: 'Đoạn C: "monarch butterflies make their entire migration cycle across multiple generations".' },
            { q: 'GPS devices can now be attached to very small animals like butterflies.', answer: 'TRUE', explain: 'Đoạn E: "Tiny GPS devices and radio transmitters can now be attached to animals as small as butterflies".' },
            { q: 'All migratory species have adapted successfully to climate change.', answer: 'FALSE', explain: 'Đoạn F: "others appear unable to adapt quickly enough".' }
          ]
        },
        {
          group: 'Questions 24–26',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'European __________ travel from rivers across Europe to the Sargasso Sea.', answer: 'eels', explain: 'Đoạn C: "European eels travel from rivers across Europe to the Sargasso Sea".' },
            { q: 'Many birds detect the Earth\'s __________ field through specialized eye molecules.', answer: 'magnetic', explain: 'Đoạn D: "Many birds detect the Earth\'s magnetic field through specialized molecules".' },
            { q: 'The loss of single __________ habitats can disrupt entire migration patterns.', answer: 'stopover', explain: 'Đoạn E: "The loss of even single stopover habitats can disrupt entire migration patterns".' }
          ]
        }
      ],
      
      // ========== PASSAGE 3 QUESTIONS (14 questions) ==========
      [
        {
          group: 'Questions 27–32',
          type: 'matching-information',
          instruction: 'Reading Passage 3 has seven paragraphs, A-G. Which paragraph contains the following information?',
          paragraphs: ['A','B','C','D','E','F','G'],
          items: [
            { q: 'A list of diseases that emerged with agricultural settlements.', answer: 'C', explain: 'Đoạn C: "Diseases that depended on dense human populations... influenza, measles, and tuberculosis".' },
            { q: 'A discussion of why people accepted urban life despite its problems.', answer: 'E', explain: 'Đoạn E: "Why did people accept the disease, conflict, and inequality that came with urban life".' },
            { q: 'A reference to a 19th-century theory of civilisational progress.', answer: 'B', explain: 'Đoạn B: "developed in the nineteenth century and dominant for most of the twentieth".' },
            { q: 'Examples of the names of the world\'s first cities.', answer: 'E', explain: 'Đoạn E: "The first cities — Uruk, Memphis, Mohenjo-Daro".' },
            { q: 'A suggestion that lessons from the past may guide future societies.', answer: 'G', explain: 'Đoạn G: "the past, properly understood, may be more than a record of how we got here — it may be a guide".' },
            { q: 'A theory that early civilisations experimented with different social structures.', answer: 'F', explain: 'Đoạn F: "many early urban societies experimented with various forms of social organisation".' }
          ]
        },
        {
          group: 'Questions 33–36',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, the transition to civilisation began approximately:', options: ['A. One thousand years ago', 'B. Five thousand years ago', 'C. Ten thousand years ago', 'D. Fifty thousand years ago'], answer: 'C', explain: 'Đoạn A: "beginning about ten thousand years ago".' },
            { q: 'Skeletal evidence shows that early farmers were:', options: ['A. Generally healthier than hunter-gatherers', 'B. Shorter, less healthy, and shorter-lived', 'C. Identical to hunter-gatherers in physical condition', 'D. Better nourished than later generations'], answer: 'B', explain: 'Đoạn C: "the first farmers were shorter, less healthy, and shorter-lived than the hunter-gatherers".' },
            { q: 'The work of Graeber and Wengrow suggests that:', options: ['A. Hierarchy was inevitable in all early civilisations', 'B. Early urban societies experimented with various social arrangements', 'C. Cities developed only in one specific region', 'D. Hunter-gatherers were always more egalitarian than farmers'], answer: 'B', explain: 'Đoạn F: "many early urban societies experimented with various forms of social organisation".' },
            { q: 'According to the final paragraph, our understanding of civilisation\'s past has:', options: ['A. No relevance to modern decisions', 'B. Already been completely settled', 'C. Implications for how we think about modern society', 'D. Been distorted by recent research'], answer: 'C', explain: 'Đoạn G: "Modern societies face urgent questions... If we believe civilisation always required hierarchy".' }
          ]
        },
        {
          group: 'Questions 37–40',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'Early farmers depended on a small number of __________ crops, often causing nutritional deficiencies.', answer: 'staple', explain: 'Đoạn C: "dependence on a small number of staple crops".' },
            { q: 'Population pressure may have allowed farmers to outcompete hunter-gatherers due to higher __________ rates.', answer: 'fertility', explain: 'Đoạn D: "their higher fertility rates allowed them to outcompete".' },
            { q: 'The first cities emerged in different regions independently between 4000 and __________ BCE.', answer: '2000', explain: 'Đoạn E: "emerged in different regions independently between about 4000 and 2000 BCE".' },
            { q: 'The conventional story of civilisation\'s development may be __________ in important respects.', answer: 'misleading', explain: 'Đoạn F: "the conventional story of civilisation\'s development is not just incomplete but in important respects misleading".' }
          ]
        }
      ]
    ]
  },

  // ==================== CAMBRIDGE 13 - TEST 3 ====================
  'cam13-t3': {
    title: 'The History of Tea',
    topic: 'History · Trade',
    difficulty: 'Easy',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The History of Tea',
      content: `<p><span class="para-num">A</span> Tea is the most widely consumed beverage in the world after water. From English afternoon tea to Japanese tea ceremonies, from sweet milky chai sold by street vendors in India to bitter green tea drunk by Chinese farmers, tea exists in remarkable diversity across cultures. Despite this variation, all true teas — black, green, white, oolong, and others — come from the leaves of a single plant species, Camellia sinensis. The differences between them result from how the leaves are processed after picking, not from different botanical sources.</p>
      
      <p><span class="para-num">B</span> Tea drinking originated in China, where legend places its discovery around 2737 BCE by the mythological Emperor Shennong. According to the story, a tea leaf accidentally fell into his pot of boiling water, and he was so pleased with the resulting drink that he decreed it be cultivated. While this story is certainly fictional, archaeological evidence does confirm that tea was consumed in China by at least the third century BCE. For centuries it remained primarily a medicinal substance, valued for its alleged power to cure various ailments and aid concentration during long Buddhist meditation sessions.</p>
      
      <p><span class="para-num">C</span> Tea drinking spread from China to neighbouring regions over many centuries. Japanese Buddhist monks brought tea back from their studies in China during the eighth century, eventually developing the elaborate tea ceremony that remains an important cultural tradition today. Tea spread along the Silk Road to Central Asia, where it became deeply embedded in Mongol, Tibetan, and Persian cultures. In each region, distinctive preparation methods developed: Mongolians added butter and salt, Tibetans drank it with yak butter, and Persians served it in small glasses with sugar held between the teeth.</p>
      
      <p><span class="para-num">D</span> Tea reached Europe much later, through Portuguese and Dutch traders who encountered it in their voyages to Asia in the seventeenth century. The Dutch began importing small quantities around 1610, but tea remained an exotic luxury for several decades. The drink came to England most directly through the Portuguese princess Catherine of Braganza, who married King Charles II in 1662. As a tea enthusiast, she made the beverage fashionable at court, and from there it spread through aristocratic society. By the eighteenth century, tea had become a staple of British life, with tea importation generating substantial government revenue through taxes.</p>
      
      <p><span class="para-num">E</span> European demand for tea had dramatic political consequences. The British East India Company\'s monopoly on tea imports to America provoked colonial resistance that contributed to the American Revolution, most famously in the Boston Tea Party of 1773. Even more significantly, the imbalance of trade with China, which sold Europe vast quantities of tea but bought little in return, led the British to develop the opium trade. They began smuggling opium grown in India into China to balance their tea purchases, leading eventually to the Opium Wars of the mid-nineteenth century and the forced opening of China to Western trade.</p>
      
      <p><span class="para-num">F</span> The desire to break Chinese dominance of tea production drove botanical adventure. The Scottish botanist Robert Fortune disguised himself as a Chinese merchant in the 1840s and travelled through Chinese tea regions, collecting plants and learning manufacturing techniques. He smuggled this knowledge and approximately 20,000 tea plants out of China to India, where the British established huge tea plantations in Assam and Darjeeling. Within decades, Indian tea production exceeded that of China, and tea drinking spread to populations that could not previously afford it.</p>
      
      <p><span class="para-num">G</span> Today the global tea industry remains enormous, with annual production exceeding six million tonnes. China and India are the largest producers, with significant production also in Kenya, Sri Lanka, and Turkey. Modern research has confirmed many traditional beliefs about tea\'s health benefits, particularly the antioxidant properties of green tea. Yet tea cultivation faces challenges from climate change, which affects growing conditions in many traditional regions, and from labour issues on plantations where workers often receive minimal compensation. The drink that began as a Chinese medicinal infusion now connects billions of people across cultures while reflecting the complex history of global trade.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Trà là đồ uống được tiêu thụ rộng rãi nhất thế giới sau nước. Từ trà chiều Anh đến trà đạo Nhật Bản. Tất cả các loại trà thật - đen, xanh, trắng, oolong - đều đến từ lá của một loài thực vật duy nhất, Camellia sinensis. Sự khác biệt giữa chúng đến từ cách chế biến lá sau khi hái.</p>
      
      <p><strong>Đoạn B:</strong> Việc uống trà bắt nguồn từ Trung Quốc, nơi truyền thuyết đặt phát hiện của nó vào khoảng năm 2737 TCN bởi Hoàng đế thần thoại Thần Nông. Trong nhiều thế kỷ, nó chủ yếu vẫn là một chất y học, được đánh giá cao vì sức mạnh được cho là chữa bệnh và hỗ trợ tập trung trong các phiên thiền Phật giáo dài.</p>
      
      <p><strong>Đoạn C:</strong> Việc uống trà lan từ Trung Quốc sang các vùng láng giềng qua nhiều thế kỷ. Các nhà sư Phật giáo Nhật Bản mang trà về sau khi học tại Trung Quốc trong thế kỷ 8, cuối cùng phát triển trà đạo cầu kỳ. Người Mông Cổ thêm bơ và muối, người Tây Tạng uống với bơ yak, người Ba Tư phục vụ trong cốc nhỏ với đường ngậm giữa răng.</p>
      
      <p><strong>Đoạn D:</strong> Trà đến châu Âu muộn hơn nhiều, qua thương nhân Bồ Đào Nha và Hà Lan. Người Hà Lan bắt đầu nhập khẩu khoảng 1610. Đến Anh trực tiếp nhất qua công chúa Bồ Đào Nha Catherine of Braganza, người đã kết hôn với Vua Charles II năm 1662. Đến thế kỷ 18, trà đã trở thành một phần thiết yếu của đời sống Anh.</p>
      
      <p><strong>Đoạn E:</strong> Nhu cầu trà của châu Âu có hậu quả chính trị dramatic. Độc quyền của Công ty Đông Ấn Anh đối với nhập khẩu trà sang Mỹ kích động phản kháng thuộc địa - Boston Tea Party 1773. Sự mất cân bằng thương mại với Trung Quốc dẫn đến người Anh phát triển buôn bán thuốc phiện - cuối cùng dẫn đến Chiến tranh Nha phiến.</p>
      
      <p><strong>Đoạn F:</strong> Mong muốn phá vỡ sự thống trị của Trung Quốc đối với sản xuất trà thúc đẩy cuộc phiêu lưu thực vật học. Nhà thực vật học Scotland Robert Fortune cải trang thành thương nhân Trung Quốc trong những năm 1840 và đi qua các vùng trà Trung Quốc, thu thập cây và học kỹ thuật sản xuất. Ông buôn lậu khoảng 20,000 cây trà ra khỏi Trung Quốc sang Ấn Độ.</p>
      
      <p><strong>Đoạn G:</strong> Ngày nay ngành trà toàn cầu vẫn rất lớn, với sản lượng hàng năm vượt quá 6 triệu tấn. Trung Quốc và Ấn Độ là các nước sản xuất lớn nhất. Nghiên cứu hiện đại đã xác nhận nhiều niềm tin truyền thống về lợi ích sức khỏe của trà. Tuy nhiên trồng trà đối mặt với thách thức từ biến đổi khí hậu.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Black tea and green tea come from different plant species.', answer: 'FALSE', explain: 'Đoạn A: "all true teas... come from the leaves of a single plant species, Camellia sinensis".' },
          { q: 'The story of Emperor Shennong discovering tea is historically accurate.', answer: 'FALSE', explain: 'Đoạn B: "While this story is certainly fictional".' },
          { q: 'Catherine of Braganza introduced tea drinking to the English court.', answer: 'TRUE', explain: 'Đoạn D: "she made the beverage fashionable at court".' },
          { q: 'The Boston Tea Party occurred because Americans disliked the taste of tea.', answer: 'FALSE', explain: 'Đoạn E: do "The British East India Company\'s monopoly on tea imports" - vì độc quyền, không phải vì vị.' },
          { q: 'Robert Fortune wrote a famous book about his experiences in China.', answer: 'NOT GIVEN', explain: 'Đoạn F nói Fortune cải trang và buôn lậu cây trà, không đề cập đến việc viết sách.' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'For centuries in China, tea was primarily valued as a:', options: ['A. Refreshing beverage for ordinary people', 'B. Medicinal substance and meditation aid', 'C. Luxury drink for the imperial family only', 'D. Trade good for foreign exchange'], answer: 'B', explain: 'Đoạn B: "remained primarily a medicinal substance, valued for its alleged power to cure various ailments and aid concentration during long Buddhist meditation".' },
          { q: 'In Tibetan culture, tea was traditionally drunk with:', options: ['A. Sugar and milk', 'B. Yak butter', 'C. Salt and pepper', 'D. Honey and ginger'], answer: 'B', explain: 'Đoạn C: "Tibetans drank it with yak butter".' },
          { q: 'The trade imbalance with China led the British to:', options: ['A. Plant tea in their American colonies', 'B. Stop importing Chinese tea entirely', 'C. Smuggle opium from India into China', 'D. Buy more Chinese silk and porcelain'], answer: 'C', explain: 'Đoạn E: "They began smuggling opium grown in India into China to balance their tea purchases".' },
          { q: 'According to the passage, modern tea cultivation faces challenges from:', options: ['A. Lack of consumer demand', 'B. Climate change and labour issues', 'C. New competing beverages', 'D. Disappearance of suitable land'], answer: 'B', explain: 'Đoạn G: "tea cultivation faces challenges from climate change... and from labour issues".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'The scientific name for the tea plant is __________.', answer: 'Camellia sinensis', explain: 'Đoạn A: "from the leaves of a single plant species, Camellia sinensis".' },
          { q: 'Japanese Buddhist monks brought tea back from China in the __________ century.', answer: 'eighth', explain: 'Đoạn C: "Japanese Buddhist monks brought tea back from their studies in China during the eighth century".' },
          { q: 'Robert Fortune smuggled approximately __________ tea plants out of China.', answer: '20,000', explain: 'Đoạn F: "approximately 20,000 tea plants out of China to India".' },
          { q: 'Annual global tea production now exceeds __________ tonnes.', answer: 'six million', explain: 'Đoạn G: "annual production exceeding six million tonnes".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 12 - TEST 3 ====================
  'cam12-t3': {
    title: 'The Science of Yawning',
    topic: 'Biology · Neuroscience',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Curious Science of Yawning',
      content: `<p><span class="para-num">A</span> Yawning is among the most universal yet least understood of human behaviours. Nearly everyone yawns, and we do so from before birth — ultrasound images show foetuses yawning in the womb as early as the eleventh week of pregnancy. Most other vertebrate animals yawn as well, including not just our close primate relatives but also dogs, cats, birds, and even reptiles and fish. Despite this widespread occurrence across species and the obvious familiarity of the behaviour, science has struggled to provide a definitive explanation of what yawning is for.</p>
      
      <p><span class="para-num">B</span> The common belief that yawning serves to increase oxygen intake has been largely abandoned by researchers. Controlled experiments in which subjects breathed air with different oxygen concentrations showed no effect on yawning frequency. People did not yawn more when they had less oxygen, nor less when they had more. This finding was surprising because it had seemed so intuitive that the open mouth and deep breath of yawning must be about acquiring oxygen, but the evidence simply did not support it. Scientists had to look elsewhere for explanations.</p>
      
      <p><span class="para-num">C</span> A promising current theory holds that yawning helps regulate brain temperature. Brain function depends on precise temperature control — too hot or too cold can impair thinking and reaction times. The deep inhalation involved in yawning brings in cooler air from outside the body, while the stretching of facial muscles increases blood flow that can carry heat away from the brain. Studies have shown that yawning frequency varies with ambient temperature, with people yawning most often when external temperatures are moderate. When external temperatures exceed body temperature, yawning would no longer cool the brain and the behaviour becomes less common.</p>
      
      <p><span class="para-num">D</span> Yawning is also strongly linked to changes in alertness and arousal. We yawn most frequently when we are tired, bored, or just waking up — situations involving transitions between different brain states. This pattern suggests that yawning may help the brain shift gears, perhaps by temporarily increasing blood flow and stimulating attention. Pilots reportedly yawn before challenging manoeuvres, and athletes yawn before athletic events — both contexts where mental arousal needs to increase quickly. Whether yawning actually achieves this effect or merely accompanies it remains debated.</p>
      
      <p><span class="para-num">E</span> Perhaps the most puzzling aspect of yawning is its contagious nature. Watching or even thinking about yawning can trigger a yawn in observers, with about half of adults responding to seeing someone yawn by yawning themselves. Even reading about yawning, as you are doing now, often produces this effect. Children develop contagious yawning between ages four and six, when they also develop other capacities related to social understanding. People with conditions affecting social perception, including autism, often show reduced contagious yawning, suggesting that the response may relate to empathy or social bonding rather than to any direct physiological function.</p>
      
      <p><span class="para-num">F</span> Contagious yawning has been observed in other social species as well. Chimpanzees, baboons, and other primates show contagious yawning. So do dogs, which can be triggered to yawn by watching their human owners do so — a finding consistent with the idea that yawning relates to social bonding. Interestingly, dogs respond more to yawns from familiar humans than from strangers, paralleling research showing that humans also yawn more in response to close friends and family members than to acquaintances. These cross-species similarities suggest that contagious yawning may serve some ancient social function.</p>
      
      <p><span class="para-num">G</span> Despite progress in understanding particular aspects of yawning, no single theory fully explains all the available evidence. Yawning may serve multiple functions simultaneously — regulating brain temperature, supporting transitions between alertness states, and facilitating social bonding. Future research will likely continue to refine these theories and may identify additional roles. What seems clear is that this seemingly trivial behaviour, which we typically dismiss as a sign of boredom or fatigue, may actually serve important functions for our brains and our social relationships.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Ngáp là một trong những hành vi phổ quát nhất nhưng ít được hiểu nhất của con người. Gần như mọi người đều ngáp, và chúng ta làm vậy từ trước khi sinh - hình ảnh siêu âm cho thấy thai nhi ngáp ngay từ tuần thứ 11. Hầu hết động vật có xương sống cũng ngáp - không chỉ linh trưởng mà cả chó, mèo, chim, bò sát, cá.</p>
      
      <p><strong>Đoạn B:</strong> Niềm tin phổ biến rằng ngáp giúp tăng lượng oxy hấp thụ phần lớn đã bị các nhà nghiên cứu bỏ rơi. Các thí nghiệm có kiểm soát cho thấy không có ảnh hưởng đến tần suất ngáp. Người ta không ngáp nhiều hơn khi có ít oxy. Các nhà khoa học phải tìm lời giải thích ở chỗ khác.</p>
      
      <p><strong>Đoạn C:</strong> Một lý thuyết hứa hẹn hiện tại cho rằng ngáp giúp điều chỉnh nhiệt độ não. Chức năng não phụ thuộc vào kiểm soát nhiệt độ chính xác. Hít sâu liên quan đến ngáp đưa không khí mát hơn từ bên ngoài cơ thể. Các nghiên cứu đã chỉ ra rằng tần suất ngáp thay đổi theo nhiệt độ môi trường.</p>
      
      <p><strong>Đoạn D:</strong> Ngáp cũng liên quan mạnh đến thay đổi tỉnh táo và kích thích. Chúng ta ngáp thường xuyên nhất khi mệt, chán, hoặc vừa thức dậy - các tình huống liên quan đến chuyển tiếp giữa các trạng thái não khác nhau. Phi công ngáp trước những thao tác thử thách, vận động viên ngáp trước sự kiện thể thao.</p>
      
      <p><strong>Đoạn E:</strong> Có lẽ khía cạnh khó hiểu nhất của ngáp là bản chất lây nhiễm. Xem hoặc thậm chí nghĩ về ngáp có thể kích hoạt ngáp ở người quan sát. Trẻ em phát triển ngáp lây nhiễm từ 4-6 tuổi, khi chúng cũng phát triển các khả năng liên quan đến hiểu biết xã hội. Người bị chứng rối loạn ảnh hưởng đến nhận thức xã hội, bao gồm tự kỷ, thường thể hiện ngáp lây nhiễm giảm.</p>
      
      <p><strong>Đoạn F:</strong> Ngáp lây nhiễm cũng được quan sát ở các loài xã hội khác. Tinh tinh, khỉ baboon, các linh trưởng khác cho thấy ngáp lây nhiễm. Chó cũng vậy. Đáng chú ý, chó phản ứng nhiều hơn với ngáp từ con người quen thuộc so với người lạ.</p>
      
      <p><strong>Đoạn G:</strong> Mặc dù có tiến bộ trong việc hiểu các khía cạnh cụ thể của ngáp, không có lý thuyết nào giải thích hoàn toàn tất cả bằng chứng có sẵn. Ngáp có thể phục vụ nhiều chức năng đồng thời - điều chỉnh nhiệt độ não, hỗ trợ chuyển tiếp giữa các trạng thái tỉnh táo, và tạo điều kiện cho liên kết xã hội.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Foetuses begin yawning in the womb at around eleven weeks.', answer: 'TRUE', explain: 'Đoạn A: "foetuses yawning in the womb as early as the eleventh week".' },
          { q: 'Research has confirmed the popular belief that yawning increases oxygen levels.', answer: 'FALSE', explain: 'Đoạn B: "the evidence simply did not support it" - bằng chứng không hỗ trợ niềm tin này.' },
          { q: 'Yawning frequency tends to decrease when temperatures are extremely high.', answer: 'TRUE', explain: 'Đoạn C: "When external temperatures exceed body temperature... the behaviour becomes less common".' },
          { q: 'Pilots yawn during emergency situations to stay alert.', answer: 'NOT GIVEN', explain: 'Đoạn D nói phi công ngáp trước các thao tác thử thách, nhưng không nói cụ thể về tình huống khẩn cấp.' },
          { q: 'Dogs respond more to yawns from people they know well.', answer: 'TRUE', explain: 'Đoạn F: "dogs respond more to yawns from familiar humans than from strangers".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to recent research, one function of yawning may be to:', options: ['A. Eliminate excess carbon dioxide', 'B. Cool down the brain when needed', 'C. Help digestion of food', 'D. Strengthen facial muscles'], answer: 'B', explain: 'Đoạn C: "yawning helps regulate brain temperature... brings in cooler air".' },
          { q: 'Yawning often occurs when people are:', options: ['A. Working at maximum efficiency', 'B. Eating large meals', 'C. Transitioning between mental states', 'D. Experiencing strong pain'], answer: 'C', explain: 'Đoạn D: "situations involving transitions between different brain states".' },
          { q: 'Children typically begin to develop contagious yawning:', options: ['A. From birth', 'B. Between ages four and six', 'C. After their first year of school', 'D. Only in adulthood'], answer: 'B', explain: 'Đoạn E: "Children develop contagious yawning between ages four and six".' },
          { q: 'The author concludes that:', options: ['A. Yawning has been fully explained by recent research', 'B. Yawning probably serves multiple functions', 'C. Yawning is more important in animals than in humans', 'D. Future research should focus on stopping yawning'], answer: 'B', explain: 'Đoạn G: "Yawning may serve multiple functions simultaneously".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'The deep inhalation in yawning brings in cooler air which may help cool the __________.', answer: 'brain', explain: 'Đoạn C: "The deep inhalation involved in yawning brings in cooler air... that can carry heat away from the brain".' },
          { q: 'Studies show that about half of adults will yawn when they observe another person __________.', answer: 'yawning', explain: 'Đoạn E: "about half of adults responding to seeing someone yawn by yawning themselves".' },
          { q: 'People with __________ often show reduced contagious yawning.', answer: 'autism', explain: 'Đoạn E: "People with conditions affecting social perception, including autism, often show reduced contagious yawning".' },
          { q: 'Researchers suggest yawning may help with social __________.', answer: 'bonding', explain: 'Đoạn E và F: "social bonding" - đề cập đến chức năng liên kết xã hội.' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 11 - TEST 3 ====================
  'cam11-t3': {
    title: 'Roman Concrete',
    topic: 'History · Engineering',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Mystery of Roman Concrete',
      content: `<p><span class="para-num">A</span> The buildings of ancient Rome have an extraordinary capacity for survival. The Pantheon in Rome, built nearly two thousand years ago, still stands as one of the most architecturally impressive buildings in the world. Roman harbours, piers, and concrete sea walls have endured nearly two millennia of pounding waves and saltwater exposure that would destroy modern concrete in decades. The remarkable durability of Roman concrete has long intrigued engineers and archaeologists, particularly given that modern Portland cement-based concrete, despite its superior strength, deteriorates much faster than its ancient counterpart.</p>
      
      <p><span class="para-num">B</span> Concrete was not invented by the Romans, but they refined the technology to a remarkable degree. Earlier civilisations had used various mortar-like substances to bind stones together. The Roman innovation was to combine lime with a particular kind of volcanic ash called pozzolana, found near the town of Pozzuoli on the Bay of Naples. The combination created a material that could be poured and shaped while wet, then hardened into a durable stone-like substance. Buildings constructed with this concrete could take forms impossible with traditional stone construction — including large domes, vaulted ceilings, and complex curved walls.</p>
      
      <p><span class="para-num">C</span> The most spectacular use of Roman concrete is the Pantheon\'s dome, completed around 125 CE. With a diameter of 43 metres, it remained the largest dome in the world for over 1,300 years until surpassed by the dome of Florence\'s cathedral in 1436. The Roman engineers achieved this remarkable feat by varying the composition of the concrete throughout the structure — heavier aggregates such as basalt at the base, progressing to lighter materials including pumice and even empty pottery vessels near the top. This careful gradation reduced the dome\'s weight at the points where structural stresses were greatest.</p>
      
      <p><span class="para-num">D</span> Roman concrete used in marine environments proved especially remarkable. Roman engineers built breakwaters, piers, and harbour structures that survive to this day, including the famous harbour at Caesarea Maritima in modern Israel. These structures were created by pouring concrete directly into wooden forms submerged in seawater — a method that would seem certain to fail with modern concrete. Yet rather than weakening over time, Roman marine concrete has actually become stronger. Recent research has begun to explain this remarkable phenomenon.</p>
      
      <p><span class="para-num">E</span> A 2017 study published in the journal American Mineralogist analysed Roman marine concrete samples using sophisticated imaging techniques. Researchers led by Marie Jackson found that seawater interacting with the volcanic ash mixture had produced new minerals over the centuries — particularly a rare crystalline structure called Al-tobermorite. Unlike most chemical reactions in modern concrete, which gradually weaken its structure, these mineral formations actually fill cracks and strengthen the material as it ages. The very seawater that would destroy modern concrete becomes part of the strengthening process in Roman concrete.</p>
      
      <p><span class="para-num">F</span> The implications of these findings extend beyond mere historical curiosity. Modern Portland cement production accounts for approximately seven percent of global carbon dioxide emissions, making it a significant contributor to climate change. If researchers can develop concrete formulations that incorporate the durability principles of Roman concrete, the environmental impact of construction could be dramatically reduced. Several research teams are now actively working on developing concrete that uses volcanic ash and similar materials to create more durable and environmentally friendly building materials.</p>
      
      <p><span class="para-num">G</span> Recreating Roman concrete completely has not yet proved possible. Roman engineers had access to volcanic materials from specific geological locations that are not always available elsewhere. The exact proportions and preparation methods they used were never written down systematically, so modern researchers must reconstruct them through analysis of surviving samples. Nonetheless, the ongoing research demonstrates how studies of the past can inform present-day technology. The architects who built the Pantheon would surely have been astonished to learn that their work still has lessons to offer engineers nineteen centuries later.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Các tòa nhà La Mã cổ đại có khả năng sống sót phi thường. Pantheon ở Rome, xây gần 2000 năm trước, vẫn đứng vững. Các cảng, cầu cảng, tường biển bằng bê tông La Mã đã tồn tại gần 2 thiên niên kỷ chịu sóng đập và nước mặn. Độ bền đáng kể của bê tông La Mã từ lâu đã thu hút các kỹ sư và nhà khảo cổ.</p>
      
      <p><strong>Đoạn B:</strong> Bê tông không phải do người La Mã phát minh, nhưng họ tinh chỉnh công nghệ ở mức đáng kể. Sự đổi mới La Mã là kết hợp vôi với loại tro núi lửa cụ thể gọi là pozzolana. Sự kết hợp tạo ra vật liệu có thể đổ và tạo hình khi ướt, sau đó cứng lại thành chất giống đá bền.</p>
      
      <p><strong>Đoạn C:</strong> Việc sử dụng bê tông La Mã ngoạn mục nhất là mái vòm Pantheon, hoàn thành khoảng năm 125 SCN. Với đường kính 43m, đây là mái vòm lớn nhất thế giới trong hơn 1,300 năm. Các kỹ sư La Mã đạt được kỳ tích này bằng cách thay đổi thành phần bê tông trong cấu trúc - cốt liệu nặng hơn ở chân, vật liệu nhẹ hơn gần đỉnh.</p>
      
      <p><strong>Đoạn D:</strong> Bê tông La Mã sử dụng trong môi trường biển chứng tỏ đặc biệt đáng chú ý. Các cấu trúc này được tạo ra bằng cách đổ bê tông trực tiếp vào khuôn gỗ ngập trong nước biển - phương pháp dường như chắc chắn thất bại với bê tông hiện đại. Tuy nhiên thay vì yếu đi theo thời gian, bê tông biển La Mã thực sự trở nên mạnh hơn.</p>
      
      <p><strong>Đoạn E:</strong> Một nghiên cứu năm 2017 đăng trên American Mineralogist phân tích các mẫu bê tông biển La Mã bằng kỹ thuật chụp ảnh tinh vi. Các nhà nghiên cứu do Marie Jackson dẫn đầu phát hiện nước biển tương tác với hỗn hợp tro núi lửa đã tạo ra khoáng chất mới qua các thế kỷ - đặc biệt là cấu trúc tinh thể hiếm gọi là Al-tobermorite. Các khoáng chất này thực sự lấp đầy vết nứt và tăng cường vật liệu khi nó già đi.</p>
      
      <p><strong>Đoạn F:</strong> Ý nghĩa của những phát hiện này vượt ra ngoài sự tò mò lịch sử đơn thuần. Sản xuất xi măng Portland hiện đại chiếm khoảng 7% lượng phát thải CO2 toàn cầu. Nếu các nhà nghiên cứu có thể phát triển công thức bê tông kết hợp các nguyên tắc bền của bê tông La Mã, tác động môi trường của xây dựng có thể giảm dramatically.</p>
      
      <p><strong>Đoạn G:</strong> Tái tạo bê tông La Mã hoàn toàn chưa thể chứng minh được. Các kỹ sư La Mã có quyền truy cập vào vật liệu núi lửa từ các vị trí địa chất cụ thể không phải lúc nào cũng có sẵn. Tỷ lệ chính xác và phương pháp chuẩn bị họ sử dụng chưa bao giờ được ghi lại có hệ thống.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Modern concrete is stronger than Roman concrete despite being less durable.', answer: 'TRUE', explain: 'Đoạn A: "modern Portland cement-based concrete, despite its superior strength, deteriorates much faster".' },
          { q: 'The Romans were the first civilisation to use any kind of mortar or binding material.', answer: 'FALSE', explain: 'Đoạn B: "Earlier civilisations had used various mortar-like substances to bind stones together".' },
          { q: 'The dome of Florence\'s cathedral surpassed the Pantheon\'s dome in size.', answer: 'TRUE', explain: 'Đoạn C: "remained the largest dome in the world for over 1,300 years until surpassed by the dome of Florence\'s cathedral".' },
          { q: 'Marie Jackson\'s team failed to find any explanation for Roman concrete\'s strength.', answer: 'FALSE', explain: 'Đoạn E: "Researchers led by Marie Jackson found that seawater interacting with the volcanic ash mixture had produced new minerals".' },
          { q: 'Several research teams are currently developing new concrete based on Roman principles.', answer: 'TRUE', explain: 'Đoạn F: "Several research teams are now actively working on developing concrete that uses volcanic ash".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'The key Roman innovation in concrete was:', options: ['A. The invention of cement', 'B. Combining lime with volcanic ash', 'C. Using stones of equal size', 'D. Heating materials to high temperatures'], answer: 'B', explain: 'Đoạn B: "The Roman innovation was to combine lime with a particular kind of volcanic ash called pozzolana".' },
          { q: 'The Roman engineers reduced the weight of the Pantheon\'s dome by:', options: ['A. Making it thinner than necessary', 'B. Using lighter materials toward the top', 'C. Adding extra columns for support', 'D. Building it in stages over many years'], answer: 'B', explain: 'Đoạn C: "progressing to lighter materials including pumice and even empty pottery vessels near the top".' },
          { q: 'According to recent research, Roman marine concrete:', options: ['A. Weakens slightly over time but stays strong', 'B. Has stayed exactly the same since it was built', 'C. Actually becomes stronger as it ages', 'D. Is being eroded faster than expected'], answer: 'C', explain: 'Đoạn D: "Roman marine concrete has actually become stronger".' },
          { q: 'Modern Portland cement production:', options: ['A. Is environmentally friendly', 'B. Uses the same materials as Roman concrete', 'C. Accounts for about 7% of global CO2 emissions', 'D. Cannot be improved further'], answer: 'C', explain: 'Đoạn F: "Modern Portland cement production accounts for approximately seven percent of global carbon dioxide emissions".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'The Pantheon\'s dome has a diameter of __________ metres.', answer: '43', explain: 'Đoạn C: "With a diameter of 43 metres".' },
          { q: 'A rare crystal called __________ forms in Roman concrete and strengthens it.', answer: 'Al-tobermorite', explain: 'Đoạn E: "a rare crystalline structure called Al-tobermorite".' },
          { q: 'The volcanic ash used by the Romans came from near the Bay of __________.', answer: 'Naples', explain: 'Đoạn B: "found near the town of Pozzuoli on the Bay of Naples".' },
          { q: 'The famous Roman harbour at __________ Maritima still survives today.', answer: 'Caesarea', explain: 'Đoạn D: "the famous harbour at Caesarea Maritima in modern Israel".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 10 - TEST 3 ====================
  'cam10-t3': {
    title: 'How Birds Learn to Sing',
    topic: 'Biology · Animal Behaviour',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'How Birds Learn to Sing',
      content: `<p><span class="para-num">A</span> The dawn chorus of birdsong is one of nature\'s most familiar sounds, yet the way songbirds acquire their songs represents one of the most fascinating learning processes in the animal kingdom. While many animal sounds — the meow of a cat, the bark of a dog, the croak of a frog — are largely innate and require no learning, the songs of most birds must be carefully learned, with young birds gradually acquiring the complex sequences of notes that characterise their species. This learning process has long fascinated researchers because of its striking parallels with how human children acquire spoken language.</p>
      
      <p><span class="para-num">B</span> Birds belong to one of only a few animal groups in which true vocal learning has been documented. Humans, songbirds, parrots, hummingbirds, certain whales and dolphins, bats, and elephants all appear to learn at least some of their vocalisations rather than producing them entirely instinctively. The fact that this capacity has evolved separately multiple times in such different lineages — among mammals and birds, terrestrial and marine species — suggests that vocal learning provides important benefits in certain ecological contexts.</p>
      
      <p><span class="para-num">C</span> The classic experiments on birdsong learning were conducted by the American researcher Peter Marler from the 1950s onward. Marler isolated young white-crowned sparrows from adult birds during the critical period when they would normally have heard their species\' song. These isolated birds grew up to produce only crude, simplified versions of the normal song — they had the innate ability to vocalise but lacked the model needed to develop full species-typical songs. Birds exposed to recordings of the proper song during early development, however, learned to sing normally. This established that song development required specific auditory input during a critical sensitive period.</p>
      
      <p><span class="para-num">D</span> Different species follow different patterns of song learning. Some species, like the white-crowned sparrow, have a single sensitive period in their first year and produce songs that remain essentially unchanged thereafter. Others, like the canary, continue to modify their songs throughout life, sometimes incorporating new elements year after year. The most extreme cases are birds like the mockingbird, which can continue learning new songs from many different sources for many years, and may have repertoires of over 200 different song types. These differences appear to reflect differences in how the brain processes auditory information.</p>
      
      <p><span class="para-num">E</span> Like human children learning to speak, young songbirds go through a babbling phase. Before they can produce the precise song characteristic of their species, they produce what researchers call subsong — sequences of random sounds that gradually become more structured. As learning progresses, the subsong develops into plastic song, which contains the basic elements of the adult song but in variable order. Eventually, with continued practice, the bird produces a stable crystallised song that closely matches the model it heard during its sensitive period. This developmental sequence shows remarkable parallels with how children move from babbling to grammatical speech.</p>
      
      <p><span class="para-num">F</span> The function of birdsong varies but generally involves either territorial defence, mate attraction, or both. Male birds typically use song to advertise their occupation of a particular area, warning rival males to stay away. Quality of song also serves as a signal to potential mates about the singer\'s health, age, and experience — important factors in choosing a partner. Some species require remarkable vocal abilities to attract mates: the male sedge warbler, for example, may sing songs with as many as 75 different syllable types, and females prefer males with larger repertoires. These mating preferences create strong evolutionary pressure for complex vocal learning.</p>
      
      <p><span class="para-num">G</span> Research on birdsong continues to advance our understanding of vocal learning more generally. The neural circuits and genetic mechanisms underlying birdsong show many similarities with those involved in human language. Studies of birds that develop song abnormally — perhaps because of brain lesions or genetic mutations — have shed light on the brain structures and processes essential for vocal learning. Some researchers hope that birdsong research may eventually contribute to understanding human speech disorders, including stuttering and aphasia. The seemingly simple songs filling our gardens each morning, it turns out, may have much to teach us about the most distinctively human of capacities.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Dàn hợp xướng tiếng chim hót lúc bình minh là một trong những âm thanh tự nhiên quen thuộc nhất, nhưng cách chim hót có được bài hát của chúng đại diện cho một trong những quá trình học hỏi hấp dẫn nhất trong vương quốc động vật. Trong khi nhiều âm thanh động vật phần lớn là bản năng, các bài hát của hầu hết các loài chim phải được học cẩn thận. Quá trình học này có song song nổi bật với cách trẻ em học ngôn ngữ.</p>
      
      <p><strong>Đoạn B:</strong> Chim thuộc một trong số ít các nhóm động vật mà việc học vocal thực sự đã được ghi nhận. Con người, chim hót, vẹt, chim ruồi, một số cá voi và cá heo, dơi, và voi tất cả dường như học ít nhất một số phát âm của chúng. Khả năng này đã tiến hóa riêng nhiều lần ở các dòng dõi khác nhau gợi ý rằng học vocal cung cấp lợi ích quan trọng.</p>
      
      <p><strong>Đoạn C:</strong> Các thí nghiệm cổ điển về học bài hát chim được thực hiện bởi nhà nghiên cứu Mỹ Peter Marler từ những năm 1950. Marler cô lập chim sẻ vương miện trắng non khỏi chim trưởng thành trong thời kỳ quan trọng. Những con chim cô lập này lớn lên chỉ tạo ra phiên bản thô, đơn giản hóa của bài hát bình thường. Chim tiếp xúc với bản ghi âm trong giai đoạn phát triển sớm học hát bình thường.</p>
      
      <p><strong>Đoạn D:</strong> Các loài khác nhau tuân theo các mẫu học bài hát khác nhau. Một số loài như chim sẻ vương miện trắng có một thời kỳ nhạy cảm duy nhất trong năm đầu tiên. Những loài khác như chim hoàng yến tiếp tục sửa đổi bài hát suốt đời. Trường hợp cực đoan nhất là chim như mockingbird, có thể tiếp tục học bài hát mới với repertoire trên 200 loại.</p>
      
      <p><strong>Đoạn E:</strong> Giống trẻ em học nói, chim hót non trải qua giai đoạn bập bẹ. Trước khi chúng có thể tạo ra bài hát chính xác, chúng tạo ra cái mà các nhà nghiên cứu gọi là subsong - chuỗi âm thanh ngẫu nhiên dần dần trở nên có cấu trúc hơn. Khi việc học tiến triển, subsong phát triển thành plastic song. Cuối cùng, với luyện tập tiếp tục, chim tạo ra bài hát kết tinh ổn định.</p>
      
      <p><strong>Đoạn F:</strong> Chức năng của bài hát chim khác nhau nhưng thường liên quan đến hoặc bảo vệ lãnh thổ, thu hút bạn tình, hoặc cả hai. Chim đực thường sử dụng bài hát để quảng cáo việc chiếm đóng. Chất lượng bài hát cũng là tín hiệu cho bạn tình tiềm năng. Chim warbler đực có thể hát bài có tới 75 loại âm tiết khác nhau.</p>
      
      <p><strong>Đoạn G:</strong> Nghiên cứu về bài hát chim tiếp tục thúc đẩy hiểu biết của chúng ta về học vocal nói chung. Các mạch thần kinh và cơ chế di truyền cơ bản cho bài hát chim cho thấy nhiều điểm tương đồng với những điểm liên quan đến ngôn ngữ con người. Một số nhà nghiên cứu hy vọng nghiên cứu bài hát chim cuối cùng có thể đóng góp vào hiểu biết các rối loạn nói của con người.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Most animal sounds are largely instinctive and do not require learning.', answer: 'TRUE', explain: 'Đoạn A: "many animal sounds... are largely innate and require no learning".' },
          { q: 'Vocal learning has been documented in many different animal groups.', answer: 'TRUE', explain: 'Đoạn B: "Humans, songbirds, parrots, hummingbirds, certain whales and dolphins, bats, and elephants all appear to learn at least some of their vocalisations".' },
          { q: 'Peter Marler\'s experiments showed that isolated birds learned songs normally.', answer: 'FALSE', explain: 'Đoạn C: "These isolated birds grew up to produce only crude, simplified versions".' },
          { q: 'Mockingbirds typically have repertoires of fewer than 100 song types.', answer: 'FALSE', explain: 'Đoạn D: "may have repertoires of over 200 different song types".' },
          { q: 'Female sedge warblers prefer males with smaller song repertoires.', answer: 'FALSE', explain: 'Đoạn F: "females prefer males with larger repertoires".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'The white-crowned sparrows that Marler isolated:', options: ['A. Lost the ability to vocalise', 'B. Produced songs identical to wild birds', 'C. Had the ability to vocalise but lacked song models', 'D. Refused to vocalise at all'], answer: 'C', explain: 'Đoạn C: "they had the innate ability to vocalise but lacked the model needed to develop full species-typical songs".' },
          { q: 'Canaries differ from white-crowned sparrows in that they:', options: ['A. Cannot learn songs at all', 'B. Continue to modify songs throughout life', 'C. Only learn from their mothers', 'D. Have only one song type'], answer: 'B', explain: 'Đoạn D: "the canary, continue to modify their songs throughout life".' },
          { q: 'Subsong is described as:', options: ['A. The final stable song of an adult bird', 'B. Random sequences of sounds in young birds', 'C. A song shared between many bird species', 'D. The song females use to attract males'], answer: 'B', explain: 'Đoạn E: "subsong — sequences of random sounds".' },
          { q: 'According to the passage, male birds typically use song to:', options: ['A. Communicate with their offspring', 'B. Defend territory or attract mates', 'C. Frighten predators away', 'D. Coordinate group movements'], answer: 'B', explain: 'Đoạn F: "either territorial defence, mate attraction, or both".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'Songbird learning shows striking __________ with how children acquire language.', answer: 'parallels', explain: 'Đoạn A: "striking parallels with how human children acquire spoken language".' },
          { q: 'Marler\'s experiments showed that song development requires specific __________ input during early life.', answer: 'auditory', explain: 'Đoạn C: "song development required specific auditory input during a critical sensitive period".' },
          { q: 'The intermediate stage between subsong and adult song is called __________ song.', answer: 'plastic', explain: 'Đoạn E: "subsong develops into plastic song".' },
          { q: 'Studies of birdsong may help understand human speech __________ such as stuttering.', answer: 'disorders', explain: 'Đoạn G: "may eventually contribute to understanding human speech disorders, including stuttering".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 19 - TEST 4 ====================
  'cam19-t4': {
    title: 'The Origin of Money',
    topic: 'Economics · History',
    difficulty: 'Medium',
    passages: [
      {
        label: 'Reading Passage 1',
        title: 'How Money Was Invented',
        content: `<p><span class="para-num">A</span> Money is so deeply embedded in modern life that we rarely pause to consider how strange it actually is. The pieces of paper, metal coins, and digital numbers that we treat as valuable have no intrinsic worth — a banknote is essentially just printed paper, and the digital balance in your bank account has no physical existence at all. Yet through a remarkable collective agreement, these symbols can be exchanged for almost any goods or services available in the modern economy. Understanding how this strange system developed reveals much about human cooperation and economic history.</p>
        
        <p><span class="para-num">B</span> Standard economic textbooks usually explain money\'s origin through a story about barter. According to this account, early human societies traded goods directly — exchanging a chicken for a basket of grain, say, or labour for shelter. As economies grew more complex, barter became impractical because of what economists call the "double coincidence of wants" — you need to find someone who has what you want and simultaneously wants what you have. Money emerged, the story goes, as a universal medium of exchange that solved this problem. Anthropological research, however, has challenged this neat narrative.</p>
        
        <p><span class="para-num">C</span> The anthropologist David Graeber argued influentially that the textbook story bears little resemblance to historical reality. After examining records from many premodern societies, Graeber concluded that pure barter economies are essentially mythical — they may have existed in small-scale interactions between strangers, but no society has been documented in which large-scale economic life was based on barter. Premodern communities typically used elaborate systems of credit, gift exchange, and social obligation rather than direct barter or money. People remembered who owed what to whom, and balances were settled over time through various means.</p>
        
        <p><span class="para-num">D</span> Coins, the most familiar form of money throughout history, were a much later development. The first coins appeared in the kingdom of Lydia, in what is now Turkey, around 600 BCE. They were made of electrum, a natural alloy of gold and silver, and were stamped with images by the king to certify their weight and purity. Coins offered significant advantages: they were portable, durable, and easily counted. The invention spread rapidly through the ancient world, with Greek city-states, the Persian Empire, and eventually Rome adopting and refining the technology. By the time of the Roman Empire, sophisticated monetary systems had developed throughout the Mediterranean world.</p>
        
        <p><span class="para-num">E</span> Paper money emerged in China during the Tang Dynasty around 800 CE, several centuries before its appearance elsewhere. Initially developed by merchants who deposited heavy strings of copper coins with trusted intermediaries, paper certificates representing these deposits proved much more practical for large transactions. The Chinese government eventually took over the issuing of paper money, and at various periods sophisticated paper currency systems operated successfully. When the Italian traveller Marco Polo visited China in the thirteenth century, he was astonished by the universal use of paper money, which seemed almost magical to a European accustomed to coins.</p>
        
        <p><span class="para-num">F</span> The concept of paper money took much longer to take root in Europe. Sweden\'s Stockholms Banco issued the first European banknotes in 1661, but the experiment ended in failure when the bank could not back the notes with sufficient coin reserves. Throughout the eighteenth and nineteenth centuries, paper money remained controversial. The British economist David Ricardo argued strongly for what was called the gold standard, in which paper currency could be exchanged for fixed amounts of gold. This system dominated international trade until being abandoned during the disruptions of the twentieth-century world wars.</p>
        
        <p><span class="para-num">G</span> Modern money has moved further from physical objects than ever before. Electronic transactions now account for the vast majority of monetary exchanges, with physical cash playing an increasingly minor role. Cryptocurrencies have introduced money systems that exist entirely as digital information, with no central authority backing their value. Some economists argue that the trajectory of monetary history demonstrates the increasingly social and conceptual nature of money — what makes something function as money is collective agreement about its value, not the substance from which it is made. Whether this trend will continue toward fully digital, government-independent monetary systems, or whether cash and central banking will prove more durable than current trends suggest, remains uncertain.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Tiền tệ đã gắn bó sâu sắc với cuộc sống hiện đại đến mức chúng ta hiếm khi dừng lại để cân nhắc nó thực sự kỳ lạ đến mức nào. Các tờ giấy, đồng xu, và con số kỹ thuật số mà chúng ta coi là có giá trị thực sự không có giá trị nội tại.</p>
        <p><strong>Đoạn B:</strong> Sách kinh tế tiêu chuẩn thường giải thích nguồn gốc của tiền qua câu chuyện về trao đổi hàng hóa (barter). Tiền xuất hiện như một phương tiện trao đổi phổ quát giải quyết vấn đề "double coincidence of wants". Tuy nhiên, nghiên cứu nhân học đã thách thức câu chuyện này.</p>
        <p><strong>Đoạn C:</strong> Nhà nhân học David Graeber lập luận rằng câu chuyện sách giáo khoa ít giống thực tế lịch sử. Các cộng đồng tiền hiện đại thường sử dụng các hệ thống tín dụng, trao đổi quà tặng, và nghĩa vụ xã hội phức tạp.</p>
        <p><strong>Đoạn D:</strong> Đồng xu đầu tiên xuất hiện trong vương quốc Lydia, hiện là Thổ Nhĩ Kỳ, khoảng 600 TCN. Chúng được làm từ electrum, một hợp kim tự nhiên của vàng và bạc.</p>
        <p><strong>Đoạn E:</strong> Tiền giấy xuất hiện ở Trung Quốc trong triều đại Đường khoảng 800 SCN. Khi Marco Polo đến thăm Trung Quốc trong thế kỷ 13, ông kinh ngạc với việc sử dụng phổ biến tiền giấy.</p>
        <p><strong>Đoạn F:</strong> Stockholms Banco của Thụy Điển phát hành các tờ tiền châu Âu đầu tiên vào năm 1661. Bản vị vàng chi phối thương mại quốc tế cho đến khi bị từ bỏ trong các cuộc chiến tranh thế giới thế kỷ 20.</p>
        <p><strong>Đoạn G:</strong> Tiền hiện đại đã di chuyển xa hơn khỏi các vật thể vật lý. Tiền điện tử đã giới thiệu các hệ thống tiền tồn tại hoàn toàn dưới dạng thông tin kỹ thuật số, không có cơ quan trung ương nào hậu thuẫn giá trị của chúng.</p>`
      },
      {
        label: 'Reading Passage 2',
        title: 'The Strange Story of the Sleeping Pills',
        content: `<p><span class="para-num">A</span> Few topics in medicine illustrate the complex relationship between drugs, marketing, and public health more clearly than the story of sleeping pills in the twentieth century. What began with promising new pharmaceutical compounds offered to relieve insomnia became, over decades, a cautionary tale about how good intentions, scientific limitations, and commercial pressures can combine to produce serious harm. Although the specific drugs involved have changed substantially over the decades, the underlying patterns have recurred several times in remarkably similar ways.</p>
        
        <p><span class="para-num">B</span> The first generation of widely used sleeping pills were the barbiturates, developed in the early twentieth century and marketed enthusiastically as effective treatments for insomnia and anxiety. Initially they appeared to deliver everything they promised — patients fell asleep quickly and slept longer than they had without medication. By the 1950s, barbiturates had become extremely popular, with manufacturers producing them in enormous quantities. The drugs were prescribed for ordinary sleep difficulties and were available in many countries with relatively few restrictions.</p>
        
        <p><span class="para-num">C</span> Problems with barbiturates emerged gradually. Patients developed tolerance — requiring higher and higher doses to achieve the same effects. Physical dependence developed rapidly, with patients experiencing severe withdrawal symptoms if they tried to stop taking the medication. Most dangerously, the difference between an effective dose and a fatal one was relatively small, and overdose became a common cause of accidental death and suicide. By the 1960s, barbiturate-related fatalities had reached alarming levels. Medical opinion turned strongly against the drugs, and they were largely phased out of routine sleep medicine.</p>
        
        <p><span class="para-num">D</span> The benzodiazepines, introduced in the 1960s, were enthusiastically welcomed as a safer alternative. Drugs like diazepam and temazepam appeared to offer the relaxing and sleep-inducing effects of barbiturates without the dangerous overdose potential. For two decades, prescriptions for benzodiazepines grew dramatically across the developed world, and the drugs became among the most-prescribed medications in history. They were widely viewed as harmless aids for managing the stresses of modern life, with relatively little attention paid to their long-term effects.</p>
        
        <p><span class="para-num">E</span> By the 1980s, concerns about benzodiazepines began to mount. Although the drugs were indeed safer than barbiturates in terms of acute overdose, problems with dependence emerged as a major issue. Long-term users found it extremely difficult to stop taking the medication, experiencing withdrawal symptoms that could persist for months or even years. Investigations by journalists and patient advocacy groups revealed that the pharmaceutical companies had downplayed dependence risks in their marketing materials. Lawsuits and regulatory action followed, and benzodiazepine prescriptions began declining sharply.</p>
        
        <p><span class="para-num">F</span> A third generation of sleep medications, the so-called "Z-drugs" — zolpidem, zopiclone, and others — emerged in the 1990s and 2000s. These were marketed as offering all the benefits of benzodiazepines with none of the dependence problems. For some years, this seemed to be true, and Z-drug prescriptions grew rapidly. However, by the 2010s, evidence had accumulated showing that Z-drugs caused dependence in many users, just as benzodiazepines had. They also produced unusual side effects including sleepwalking, unusual eating during sleep, and even memory loss. The cycle of enthusiasm followed by disillusionment had repeated itself.</p>
        
        <p><span class="para-num">G</span> Modern sleep medicine has grown increasingly sceptical of pharmaceutical approaches to insomnia. Current guidelines from major medical organisations now recommend that drugs be used only briefly and as a last resort. Instead, treatments based on changing sleep behaviour and addressing underlying causes — collectively known as cognitive behavioural therapy for insomnia, or CBT-I — have proven more effective for long-term outcomes than any medication tested. Many sleep specialists now describe the past century of pharmaceutical sleep medicine as largely a series of expensive, harmful, and unnecessary experiments. Whether this lesson will be heeded in the next chapter of sleep medicine, or whether new drugs will simply begin the cycle again, remains to be seen.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Ít chủ đề trong y học minh họa mối quan hệ phức tạp giữa thuốc, tiếp thị, và sức khỏe công cộng rõ ràng hơn câu chuyện về thuốc ngủ thế kỷ 20. Bài học cảnh báo về cách ý định tốt, hạn chế khoa học, và áp lực thương mại có thể kết hợp gây hại nghiêm trọng.</p>
        <p><strong>Đoạn B:</strong> Thế hệ thuốc ngủ đầu tiên là barbiturates, phát triển đầu thế kỷ 20 và tiếp thị nhiệt tình. Đến những năm 1950, barbiturates đã trở nên cực kỳ phổ biến.</p>
        <p><strong>Đoạn C:</strong> Vấn đề với barbiturates xuất hiện dần dần. Bệnh nhân phát triển dung nạp - cần liều cao hơn. Khoảng cách giữa liều hiệu quả và liều gây chết tương đối nhỏ. Đến những năm 1960, tử vong do barbiturates đã đạt mức báo động.</p>
        <p><strong>Đoạn D:</strong> Benzodiazepines, giới thiệu năm 1960, được hoan nghênh nhiệt tình như một lựa chọn thay thế an toàn hơn. Đơn thuốc tăng dramatically trên thế giới phát triển.</p>
        <p><strong>Đoạn E:</strong> Đến những năm 1980, lo ngại về benzodiazepines bắt đầu tăng. Người dùng dài hạn thấy cực kỳ khó dừng thuốc. Các điều tra tiết lộ các công ty dược phẩm đã giảm thiểu rủi ro phụ thuộc.</p>
        <p><strong>Đoạn F:</strong> Thế hệ thứ ba là "Z-drugs" - zolpidem, zopiclone - xuất hiện những năm 1990 và 2000. Đến những năm 2010, bằng chứng cho thấy Z-drugs gây phụ thuộc ở nhiều người dùng. Chu kỳ nhiệt tình rồi vỡ mộng đã lặp lại.</p>
        <p><strong>Đoạn G:</strong> Y học giấc ngủ hiện đại ngày càng hoài nghi về các phương pháp dược phẩm. Hướng dẫn hiện tại khuyến nghị thuốc chỉ nên được sử dụng ngắn hạn và như biện pháp cuối cùng. CBT-I đã chứng tỏ hiệu quả hơn bất kỳ loại thuốc nào.</p>`
      },
      {
        label: 'Reading Passage 3',
        title: 'The Future of Work',
        content: `<p><span class="para-num">A</span> Predictions about the future of work have generated intense debate over the past decade. Technological developments — particularly artificial intelligence and automation — promise to transform employment in ways that could be either liberating or deeply destabilising. Whether the coming decades will produce widespread prosperity through new forms of work or massive disruption through job displacement depends on questions that remain genuinely uncertain. Different observers, drawing on the same evidence, reach dramatically different conclusions about what the future holds.</p>
        
        <p><span class="para-num">B</span> The historical record offers some grounds for optimism. Each previous wave of technological transformation — from agricultural mechanisation through the Industrial Revolution to the introduction of computers — has produced fears that machines would replace human workers en masse. In each case, those fears proved exaggerated. New technologies displaced certain jobs but also created new ones, often in larger numbers. The agricultural sector now employs only a tiny fraction of the workforce in developed countries, yet unemployment has not consequently become a permanent crisis. Many economists argue that the same pattern will play out with current technological changes.</p>
        
        <p><span class="para-num">C</span> Other observers warn that current technological developments may be fundamentally different from previous transitions. Previous waves of automation primarily replaced physical labour, leaving humans dominant in tasks requiring cognitive abilities. Artificial intelligence threatens to automate cognitive work as well, potentially eliminating jobs in fields as diverse as legal research, medical diagnosis, software development, and creative writing. If machines can perform both physical and cognitive work, what remains for humans to do? The answer may not be obvious in the way that "factory workers can move into office jobs" was obvious in the twentieth century.</p>
        
        <p><span class="para-num">D</span> The economist Daron Acemoglu has argued that the impact of technology on workers depends heavily on the specific choices societies make in deploying it. New technologies can be designed either to augment human capabilities — making workers more productive — or to replace humans entirely. Augmentation tends to increase wages and employment; replacement tends to do the opposite. Whether new AI technologies will be deployed in augmentative or replacement modes will depend on tax policy, education systems, labour laws, and many other choices that societies retain considerable power to shape.</p>
        
        <p><span class="para-num">E</span> One trend that seems clearly established is increasing polarisation in labour markets. High-skill, high-wage jobs requiring complex social skills, creative problem-solving, and adaptive thinking remain in demand. Low-wage service jobs requiring physical presence and contextual judgement — childcare, eldercare, food service — have also grown. The decline has been concentrated in middle-skill jobs that involve routine tasks. The hollowing out of the middle of the labour market has produced increasing inequality and political dissatisfaction across developed countries.</p>
        
        <p><span class="para-num">F</span> The future of work depends not just on technology but on how working life itself is structured. The COVID-19 pandemic demonstrated that many jobs can be performed effectively from anywhere, fundamentally challenging the traditional assumption that workers must commute to centralised workplaces. This change has produced both winners and losers — workers gaining flexibility, but also urban economies suffering as commuting patterns change. Discussions of universal basic income, shorter working weeks, and other reforms have moved from fringe topics to serious policy debates. The future of work is becoming as much a question about how we want to live as about what machines can do.</p>
        
        <p><span class="para-num">G</span> Perhaps the most important questions about the future of work are not predictive but normative. What role should paid employment play in human life? Should economic security be tied to employment, or should it become an unconditional aspect of citizenship? How should the productive gains from new technologies be distributed across society? Different answers to these questions point toward dramatically different futures. The technologies will develop in any case, but the social arrangements around them will be shaped by political choices made over the coming decades. The question is not just what the future of work will be, but what we want it to be.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Các dự đoán về tương lai của công việc đã tạo ra tranh luận sôi nổi trong thập kỷ qua. Các phát triển công nghệ - đặc biệt là AI và tự động hóa - hứa hẹn biến đổi việc làm.</p>
        <p><strong>Đoạn B:</strong> Hồ sơ lịch sử cung cấp một số cơ sở cho sự lạc quan. Mỗi đợt biến đổi công nghệ trước đây đã tạo ra lo ngại rằng máy móc sẽ thay thế công nhân hàng loạt. Trong mỗi trường hợp, những lo ngại đó đã tỏ ra phóng đại.</p>
        <p><strong>Đoạn C:</strong> Các nhà quan sát khác cảnh báo rằng các phát triển công nghệ hiện tại có thể khác biệt cơ bản. AI đe dọa tự động hóa cả công việc nhận thức. Nếu máy móc có thể thực hiện cả công việc thể chất và nhận thức, điều gì còn lại cho con người làm?</p>
        <p><strong>Đoạn D:</strong> Nhà kinh tế Daron Acemoglu lập luận rằng tác động của công nghệ lên công nhân phụ thuộc nhiều vào các lựa chọn cụ thể mà xã hội đưa ra. Công nghệ có thể được thiết kế để tăng cường khả năng con người hoặc thay thế con người hoàn toàn.</p>
        <p><strong>Đoạn E:</strong> Một xu hướng đã được thiết lập rõ ràng là sự phân cực gia tăng trong thị trường lao động. Việc làm tay nghề cao, lương cao vẫn có nhu cầu. Việc làm dịch vụ lương thấp cũng đã tăng. Sự suy giảm tập trung ở việc làm trung cấp.</p>
        <p><strong>Đoạn F:</strong> Đại dịch COVID-19 đã chứng minh rằng nhiều công việc có thể được thực hiện hiệu quả từ bất cứ đâu. Các cuộc thảo luận về thu nhập cơ bản phổ quát, tuần làm việc ngắn hơn đã chuyển từ chủ đề bên lề sang tranh luận chính sách nghiêm túc.</p>
        <p><strong>Đoạn G:</strong> Có lẽ những câu hỏi quan trọng nhất về tương lai của công việc không phải là dự đoán mà là chuẩn mực. Việc làm trả lương nên đóng vai trò gì trong cuộc sống con người? Các sắp xếp xã hội sẽ được định hình bởi các lựa chọn chính trị.</p>`
      }
    ],
    
    questions: [
      // ========== PASSAGE 1 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 1–5',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'A banknote has no intrinsic value as an object.', answer: 'TRUE', explain: 'Đoạn A: "a banknote is essentially just printed paper" và "no intrinsic worth".' },
            { q: 'Anthropological research has confirmed the traditional textbook story about barter.', answer: 'FALSE', explain: 'Đoạn B: "Anthropological research, however, has challenged this neat narrative".' },
            { q: 'David Graeber found no evidence of large-scale barter-based economies.', answer: 'TRUE', explain: 'Đoạn C: "no society has been documented in which large-scale economic life was based on barter".' },
            { q: 'The Lydian kingdom\'s coins were made of pure gold.', answer: 'FALSE', explain: 'Đoạn D: "made of electrum, a natural alloy of gold and silver".' },
            { q: 'Marco Polo invested in paper currency during his travels in China.', answer: 'NOT GIVEN', explain: 'Đoạn E nói Marco Polo kinh ngạc với tiền giấy nhưng không đề cập việc ông đầu tư.' }
          ]
        },
        {
          group: 'Questions 6–9',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, premodern societies typically used:', options: ['A. Direct barter for all transactions', 'B. Credit, gift exchange, and social obligation', 'C. Gold and silver coins exclusively', 'D. Written contracts for every trade'], answer: 'B', explain: 'Đoạn C: "elaborate systems of credit, gift exchange, and social obligation".' },
            { q: 'Paper money was first developed in China to:', options: ['A. Replace the use of gold entirely', 'B. Help merchants avoid carrying heavy coins', 'C. Be used only by the imperial government', 'D. Replace bartering completely'], answer: 'B', explain: 'Đoạn E: "Initially developed by merchants who deposited heavy strings of copper coins... paper certificates... proved much more practical".' },
            { q: 'The Stockholms Banco experiment in 1661:', options: ['A. Was an immediate success that spread to other countries', 'B. Failed because the bank could not back its notes with coins', 'C. Resulted in the British adopting paper money', 'D. Continues to be used in Sweden today'], answer: 'B', explain: 'Đoạn F: "the experiment ended in failure when the bank could not back the notes with sufficient coin reserves".' },
            { q: 'Cryptocurrencies are described as money systems that:', options: ['A. Are backed by major governments', 'B. Use physical gold reserves', 'C. Exist entirely as digital information without central authority', 'D. Have replaced all other forms of money'], answer: 'C', explain: 'Đoạn G: "exist entirely as digital information, with no central authority backing their value".' }
          ]
        },
        {
          group: 'Questions 10–13',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'The first coins appeared in the kingdom of __________ around 600 BCE.', answer: 'Lydia', explain: 'Đoạn D: "The first coins appeared in the kingdom of Lydia".' },
            { q: 'Paper money appeared in China during the Tang Dynasty around __________ CE.', answer: '800', explain: 'Đoạn E: "during the Tang Dynasty around 800 CE".' },
            { q: 'David Ricardo argued for what was called the __________ standard.', answer: 'gold', explain: 'Đoạn F: "the gold standard".' },
            { q: 'The gold standard was abandoned during the twentieth-century world __________.', answer: 'wars', explain: 'Đoạn F: "abandoned during the disruptions of the twentieth-century world wars".' }
          ]
        }
      ],
      
      // ========== PASSAGE 2 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 14–20',
          type: 'matching-headings',
          instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list below.',
          headings: [
            { id: 'i', text: 'New drugs, same disappointing pattern' },
            { id: 'ii', text: 'A welcoming reception for safer alternatives' },
            { id: 'iii', text: 'Hidden dangers of the first solution emerge' },
            { id: 'iv', text: 'A recurring cautionary tale' },
            { id: 'v', text: 'The shift away from pharmaceutical approaches' },
            { id: 'vi', text: 'Early enthusiasm for a promising treatment' },
            { id: 'vii', text: 'Mounting concerns and legal consequences' },
            { id: 'viii', text: 'New brain imaging techniques' },
            { id: 'ix', text: 'Insomnia rates around the world' }
          ],
          items: [
            { q: 'A', answer: 'iv', explain: 'Đoạn A giới thiệu câu chuyện thuốc ngủ như bài học cảnh báo lặp lại nhiều lần.' },
            { q: 'B', answer: 'vi', explain: 'Đoạn B về sự nhiệt tình ban đầu với barbiturates.' },
            { q: 'C', answer: 'iii', explain: 'Đoạn C về các nguy hiểm ẩn của barbiturates xuất hiện.' },
            { q: 'D', answer: 'ii', explain: 'Đoạn D về benzodiazepines được hoan nghênh như lựa chọn an toàn hơn.' },
            { q: 'E', answer: 'vii', explain: 'Đoạn E về các quan ngại tăng và hậu quả pháp lý của benzodiazepines.' },
            { q: 'F', answer: 'i', explain: 'Đoạn F về Z-drugs - thuốc mới nhưng cùng mô hình thất vọng.' },
            { q: 'G', answer: 'v', explain: 'Đoạn G về việc chuyển hướng khỏi các phương pháp dược phẩm sang CBT-I.' }
          ]
        },
        {
          group: 'Questions 21–23',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'The gap between an effective and a fatal dose of barbiturates was small.', answer: 'TRUE', explain: 'Đoạn C: "the difference between an effective dose and a fatal one was relatively small".' },
            { q: 'Benzodiazepines were proven to be just as dangerous as barbiturates for overdose.', answer: 'FALSE', explain: 'Đoạn E: "the drugs were indeed safer than barbiturates in terms of acute overdose".' },
            { q: 'CBT-I has been proven more effective than any sleep medication.', answer: 'TRUE', explain: 'Đoạn G: "have proven more effective for long-term outcomes than any medication tested".' }
          ]
        },
        {
          group: 'Questions 24–26',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Patients taking barbiturates developed __________, requiring higher doses for the same effect.', answer: 'tolerance', explain: 'Đoạn C: "Patients developed tolerance — requiring higher and higher doses".' },
            { q: 'Z-drugs produced unusual side effects including sleepwalking and __________ during sleep.', answer: 'unusual eating', explain: 'Đoạn F: "unusual side effects including sleepwalking, unusual eating during sleep".' },
            { q: 'The non-drug approach to insomnia is called __________ for insomnia.', answer: 'cognitive behavioural therapy', explain: 'Đoạn G: "cognitive behavioural therapy for insomnia, or CBT-I".' }
          ]
        }
      ],
      
      // ========== PASSAGE 3 QUESTIONS (14 questions) ==========
      [
        {
          group: 'Questions 27–32',
          type: 'matching-information',
          instruction: 'Reading Passage 3 has seven paragraphs, A-G. Which paragraph contains the following information?',
          paragraphs: ['A','B','C','D','E','F','G'],
          items: [
            { q: 'An argument that AI may threaten cognitive work as well as physical labour.', answer: 'C', explain: 'Đoạn C: "Artificial intelligence threatens to automate cognitive work as well".' },
            { q: 'A description of how the COVID-19 pandemic affected views of remote work.', answer: 'F', explain: 'Đoạn F: "The COVID-19 pandemic demonstrated that many jobs can be performed effectively from anywhere".' },
            { q: 'Reference to a specific economist\'s view on technology choices.', answer: 'D', explain: 'Đoạn D: "The economist Daron Acemoglu has argued".' },
            { q: 'A claim that past predictions of mass unemployment were exaggerated.', answer: 'B', explain: 'Đoạn B: "those fears proved exaggerated".' },
            { q: 'A discussion of normative questions about what work should be.', answer: 'G', explain: 'Đoạn G: "the most important questions about the future of work are not predictive but normative".' },
            { q: 'A description of how middle-skill jobs have decreased relative to others.', answer: 'E', explain: 'Đoạn E: "The decline has been concentrated in middle-skill jobs".' }
          ]
        },
        {
          group: 'Questions 33–36',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, what is the optimistic view based on history?', options: ['A. Machines have always been gradually destroyed', 'B. New technologies created more new jobs than they destroyed', 'C. Workers always refuse to accept automation', 'D. Government intervention has always prevented job loss'], answer: 'B', explain: 'Đoạn B: "New technologies displaced certain jobs but also created new ones, often in larger numbers".' },
            { q: 'Acemoglu suggests that the impact of technology on workers:', options: ['A. Is determined by the technology itself', 'B. Cannot be predicted or influenced', 'C. Depends on social choices made in deploying it', 'D. Is the same in all countries'], answer: 'C', explain: 'Đoạn D: "depends heavily on the specific choices societies make in deploying it".' },
            { q: 'Labour markets in developed countries have become increasingly:', options: ['A. Equal and stable', 'B. Polarised between high-skill and low-wage work', 'C. Dominated by middle-skill jobs', 'D. Concentrated in agricultural sectors'], answer: 'B', explain: 'Đoạn E: "increasing polarisation in labour markets".' },
            { q: 'The author concludes that the future of work:', options: ['A. Is determined entirely by technology', 'B. Will inevitably resemble the past', 'C. Depends partly on political choices we make', 'D. Cannot be considered until technology develops further'], answer: 'C', explain: 'Đoạn G: "the social arrangements around them will be shaped by political choices".' }
          ]
        },
        {
          group: 'Questions 37–40',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Acemoglu distinguishes between technologies that augment and those that __________ humans.', answer: 'replace', explain: 'Đoạn D: "augment human capabilities... or to replace humans entirely".' },
            { q: 'Low-wage jobs requiring physical presence include childcare, eldercare, and __________.', answer: 'food service', explain: 'Đoạn E: "childcare, eldercare, food service".' },
            { q: 'Discussions of universal __________ income have become serious policy debates.', answer: 'basic', explain: 'Đoạn F: "Discussions of universal basic income".' },
            { q: 'The most important questions about the future of work are __________ rather than predictive.', answer: 'normative', explain: 'Đoạn G: "the most important questions... are not predictive but normative".' }
          ]
        }
      ]
    ]
  },

  // ==================== CAMBRIDGE 18 - TEST 4 ====================
  'cam18-t4': {
    title: 'Tropical Rainforests',
    topic: 'Biology · Environment',
    difficulty: 'Medium',
    passages: [
      {
        label: 'Reading Passage 1',
        title: 'The Truth About Tropical Rainforests',
        content: `<p><span class="para-num">A</span> Tropical rainforests cover only about six percent of Earth\'s land surface yet contain more than half of all the planet\'s plant and animal species. Walking through one of these forests can be an overwhelming experience: dense vegetation reaching up to fifty metres above the ground, the constant noise of insects and birds, the heavy humidity that makes even slight exertion exhausting. Despite their familiarity from nature documentaries and tourist photography, rainforests harbour many features that surprise visitors. Many widely-held beliefs about them turn out to be incorrect.</p>
      
      <p><span class="para-num">B</span> One common misconception is that rainforest soils are extraordinarily fertile because of all the dense vegetation they support. The opposite is true. Tropical rainforest soils are typically among the poorest on Earth in terms of nutrient content. The lush vegetation grows not because of rich soils but in spite of them. The constant warmth and heavy rainfall mean that organic material decomposes very rapidly, with nutrients quickly absorbed by living plants before they can accumulate in the soil. When trees are cleared for agriculture, the apparent fertility disappears within just a few years, leaving land that is nearly useless for farming.</p>
      
      <p><span class="para-num">C</span> Another surprising feature concerns biodiversity distribution. Rainforests are famous for their incredible diversity of life, but this diversity is not distributed evenly throughout the forest. The majority of species live in the canopy — the layer of branches and leaves high above the ground — rather than at lower levels. Insects, birds, mammals, reptiles, and plants all reach their greatest diversity in this aerial environment. The forest floor, in contrast, often appears surprisingly open and dark, because so little sunlight penetrates the dense canopy. Recent research using techniques like canopy walkways and remote-controlled aircraft has dramatically expanded our understanding of this hidden world.</p>
      
      <p><span class="para-num">D</span> The role of rainforests in global climate has often been simplified or misrepresented in popular accounts. Rainforests are sometimes described as "the lungs of the planet," producing the oxygen we breathe. This characterisation is misleading. While rainforests do produce vast amounts of oxygen through photosynthesis, they consume nearly as much through the respiration of the millions of organisms living within them. The Amazon, the world\'s largest rainforest, contributes only about six percent of global oxygen production — important but hardly enough to support all human breathing. What rainforests really do for climate is much more significant: they store enormous quantities of carbon dioxide in their biomass, regulating greenhouse gas levels.</p>
      
      <p><span class="para-num">E</span> Indigenous peoples have lived in tropical rainforests for thousands of years, in some cases tens of thousands of years. Far from being passive inhabitants of pristine wilderness, these peoples have actively shaped the forests around them. Archaeological evidence increasingly suggests that much of what appears to be untouched rainforest actually reflects historical human management. The Amazon contains vast areas of unusually fertile soil that researchers now believe was created by indigenous peoples thousands of years ago through systematic addition of charcoal, ash, and organic waste. Many seemingly natural concentrations of useful plants — fruit trees, palms, medicinal herbs — likely represent the legacy of pre-Columbian gardening systems.</p>
      
      <p><span class="para-num">F</span> The threats facing rainforests are well known but often misunderstood. The primary cause of rainforest destruction is not the direct demand for tropical hardwoods, as many people believe, but agricultural expansion. Most rainforest land is cleared for cattle ranching, soy farming, palm oil production, and similar commodities. The economics of this destruction are complex: once rainforest is cleared, the land typically supports profitable agriculture for only a few years before fertility declines. Yet the short-term profits drive continued clearing because the long-term costs of land degradation are borne by future generations and the broader environment rather than the people making clearing decisions.</p>
      
      <p><span class="para-num">G</span> Effective rainforest conservation requires moving beyond simplistic narratives. Approaches that focus solely on protecting "pristine" forests ignore the fact that nearly all remaining rainforests have been influenced by human activity. Strategies that ignore the needs of local populations often fail in the long term, as economic pressures eventually drive forest clearing despite legal protections. Some of the most successful conservation initiatives now focus on supporting traditional indigenous land management, which has proven remarkably effective at preserving forests over long periods. The future of rainforests will likely depend on developing economic systems that make standing forests more valuable than cleared land — a challenge that has so far proved difficult to solve at the scale required.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Rừng nhiệt đới chỉ chiếm khoảng 6% diện tích đất Trái Đất nhưng chứa hơn nửa các loài thực vật và động vật của hành tinh. Mặc dù quen thuộc từ phim tài liệu, rừng nhiệt đới chứa nhiều đặc điểm khiến du khách ngạc nhiên. Nhiều niềm tin phổ biến về chúng hóa ra là sai.</p>
      
      <p><strong>Đoạn B:</strong> Một quan niệm sai phổ biến là đất rừng nhiệt đới cực kỳ màu mỡ. Điều ngược lại là đúng. Đất rừng nhiệt đới thuộc loại nghèo nhất Trái Đất về hàm lượng dinh dưỡng. Thảm thực vật phát triển không phải vì đất giàu mà bất chấp chúng. Nhiệt độ ấm và mưa nhiều có nghĩa là vật liệu hữu cơ phân hủy rất nhanh. Khi cây bị phá để làm nông nghiệp, độ màu mỡ biến mất trong vài năm.</p>
      
      <p><strong>Đoạn C:</strong> Một đặc điểm đáng ngạc nhiên khác là phân bố đa dạng sinh học. Đa dạng không phân bố đều trong rừng. Phần lớn các loài sống ở tán cây - lớp cành và lá cao trên mặt đất - chứ không phải ở tầng thấp hơn. Sàn rừng thường có vẻ trống trải và tối đáng ngạc nhiên vì ít ánh sáng mặt trời xuyên qua tán cây dày đặc.</p>
      
      <p><strong>Đoạn D:</strong> Vai trò của rừng nhiệt đới trong khí hậu toàn cầu thường bị đơn giản hóa. Rừng nhiệt đới đôi khi được mô tả là "phổi của hành tinh". Đặc tả này gây hiểu lầm. Mặc dù chúng tạo ra lượng oxy lớn qua quang hợp, chúng tiêu thụ gần như lượng tương tự qua hô hấp. Amazon chỉ đóng góp khoảng 6% sản xuất oxy toàn cầu. Điều rừng thực sự làm cho khí hậu là lưu trữ lượng CO2 khổng lồ.</p>
      
      <p><strong>Đoạn E:</strong> Người bản địa đã sống trong rừng nhiệt đới hàng nghìn năm. Không hề là cư dân thụ động, những người này đã chủ động định hình rừng quanh họ. Bằng chứng khảo cổ cho thấy Amazon chứa các vùng đất bất thường màu mỡ mà các nhà nghiên cứu hiện tin được tạo bởi người bản địa thông qua bổ sung than, tro, chất thải hữu cơ một cách có hệ thống.</p>
      
      <p><strong>Đoạn F:</strong> Các mối đe dọa đối với rừng được biết đến nhưng thường bị hiểu sai. Nguyên nhân chính của sự phá hủy không phải là nhu cầu gỗ cứng nhiệt đới mà là mở rộng nông nghiệp. Hầu hết đất rừng được khai quang để chăn nuôi gia súc, trồng đậu nành, sản xuất dầu cọ. Một khi rừng bị khai quang, đất thường chỉ hỗ trợ nông nghiệp có lãi trong vài năm.</p>
      
      <p><strong>Đoạn G:</strong> Bảo tồn rừng nhiệt đới hiệu quả đòi hỏi vượt qua các câu chuyện đơn giản. Các phương pháp tiếp cận chỉ tập trung vào việc bảo vệ rừng "nguyên sơ" bỏ qua thực tế là hầu hết các rừng còn lại đã bị ảnh hưởng bởi hoạt động con người. Một số sáng kiến bảo tồn thành công nhất tập trung vào hỗ trợ quản lý đất truyền thống của người bản địa.</p>`
      },
      {
        label: 'Reading Passage 2',
        title: 'The History of Photography',
        content: `<p><span class="para-num">A</span> The invention of photography in the early nineteenth century transformed human relationships with images, memory, and visual evidence in ways that continue to unfold today. Before photography, visual representations of the world depended entirely on artists with the skill and time to produce paintings, drawings, or prints. Most people went through their lives without ever seeing accurate visual representations of distant places, important events, or even their own appearance. Photography democratised the visual record in ways that ultimately changed how humans understood the world and themselves.</p>
        
        <p><span class="para-num">B</span> The fundamental principle behind photography — that certain chemicals change colour when exposed to light — had been known to alchemists since the medieval period. The challenge that frustrated experimenters for centuries was how to capture and preserve images created this way. The French inventor Joseph Nicéphore Niépce produced what is generally considered the earliest surviving photograph around 1826, an image of the view from his window that required an exposure time of several hours. Niépce\'s collaborator Louis Daguerre developed a more practical method, called daguerreotype, which was publicly announced in 1839 — the year usually given as the birth of photography.</p>
        
        <p><span class="para-num">C</span> Early photographic methods had significant limitations that shaped how photography was used in its first decades. Long exposure times — often many minutes — meant that subjects had to remain absolutely still. Moving objects could not be captured at all and appeared as ghostly blurs or simply disappeared from the image. Each daguerreotype was a unique object, like a painting, that could not be copied or distributed widely. Photographic equipment was bulky and expensive, restricting practice to wealthy hobbyists and professional studios.</p>
        
        <p><span class="para-num">D</span> The development of negative-positive photography by the English inventor William Henry Fox Talbot in the 1840s solved one major limitation. Talbot\'s process produced a negative image on paper from which multiple positive copies could be made, allowing photographs to be distributed in ways that daguerreotypes could not. This approach, refined and improved through subsequent decades, became the foundation of all photography until the digital revolution of the late twentieth century. The ability to make multiple prints transformed photography from a curiosity into a medium for mass communication.</p>
        
        <p><span class="para-num">E</span> Photography revolutionised many human practices over the second half of the nineteenth century. Police forces began using photographs of criminals in the 1860s, establishing the first systematic identification systems. Scientific researchers used photography to record specimens, document expeditions, and capture observations beyond human visual capacity through telescopes and microscopes. Newspapers eventually incorporated photographs into news coverage, though early printing technologies made this difficult and most newspapers continued to use engravings for many decades.</p>
        
        <p><span class="para-num">F</span> The development of smaller, simpler cameras in the late nineteenth century brought photography to ordinary people. George Eastman\'s Kodak company, founded in the 1880s, sold inexpensive cameras with the slogan "You press the button, we do the rest." Customers took pictures and then returned the entire camera to Kodak for processing. This approach made photography accessible to amateur users for the first time, leading to enormous growth in personal photography that continues today. Family photographs, holiday snapshots, and casual portraits became common features of ordinary life.</p>
        
        <p><span class="para-num">G</span> Digital photography, beginning seriously in the 1990s and becoming dominant by the 2010s, transformed the medium more dramatically than any previous innovation. Digital cameras and especially smartphones made photography virtually free at the moment of use, while the internet enabled instant global sharing of images. Modern humans take approximately one trillion photographs per year, with no clear sense of how this enormous visual archive will be preserved or used. Whether the explosive growth of casual photography has made images more or less significant remains a question to which different observers give very different answers.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Phát minh nhiếp ảnh đầu thế kỷ 19 đã biến đổi mối quan hệ của con người với hình ảnh, trí nhớ, và bằng chứng thị giác. Trước nhiếp ảnh, biểu diễn thị giác hoàn toàn phụ thuộc vào nghệ sĩ.</p>
        <p><strong>Đoạn B:</strong> Nguyên tắc cơ bản đằng sau nhiếp ảnh - một số hóa chất thay đổi màu khi tiếp xúc ánh sáng - đã được các nhà giả kim biết đến từ thời trung cổ. Joseph Nicéphore Niépce tạo ra bức ảnh sống sót đầu tiên khoảng năm 1826. Daguerreotype của Daguerre công bố năm 1839.</p>
        <p><strong>Đoạn C:</strong> Các phương pháp nhiếp ảnh sớm có hạn chế đáng kể. Thời gian phơi sáng dài - thường nhiều phút - đối tượng phải giữ yên tuyệt đối. Mỗi daguerreotype là một vật thể duy nhất.</p>
        <p><strong>Đoạn D:</strong> Sự phát triển của nhiếp ảnh phim âm-dương bởi William Henry Fox Talbot trong những năm 1840 giải quyết một hạn chế lớn. Phương pháp này cho phép tạo nhiều bản sao dương từ một âm bản.</p>
        <p><strong>Đoạn E:</strong> Nhiếp ảnh cách mạng hóa nhiều thực hành trong nửa sau thế kỷ 19. Cảnh sát bắt đầu sử dụng ảnh tội phạm vào những năm 1860. Các nhà nghiên cứu khoa học sử dụng nhiếp ảnh để ghi mẫu vật.</p>
        <p><strong>Đoạn F:</strong> Sự phát triển của các máy ảnh nhỏ hơn cuối thế kỷ 19 mang nhiếp ảnh đến người dân thường. George Eastman Kodak với slogan "You press the button, we do the rest".</p>
        <p><strong>Đoạn G:</strong> Nhiếp ảnh số bắt đầu nghiêm túc trong những năm 1990 và trở nên thống trị vào những năm 2010. Con người hiện đại chụp khoảng một nghìn tỷ ảnh mỗi năm.</p>`
      },
      {
        label: 'Reading Passage 3',
        title: 'The Nature of Genius',
        content: `<p><span class="para-num">A</span> What makes a genius? The question has fascinated thinkers since antiquity, but modern psychology has approached it with new tools and considerable scepticism about traditional answers. Earlier explanations, emphasising mysterious inborn gifts that distinguished geniuses from ordinary people, have largely given way to more complex accounts involving combinations of ability, opportunity, environment, and sustained effort. Yet defining and understanding extraordinary achievement remains one of the most challenging problems in the study of human capacity.</p>
        
        <p><span class="para-num">B</span> Traditional accounts of genius emphasised mysterious natural endowments. From the Romantic period onward, geniuses were often portrayed as figures touched by divine inspiration or possessed of capacities beyond ordinary understanding. The composer Wolfgang Amadeus Mozart was described as receiving complete musical compositions from supernatural sources, requiring only to write them down. Albert Einstein was sometimes presented as a similarly inexplicable phenomenon, producing revolutionary insights through pure inspiration. Such portrayals, while emotionally compelling, often distort the actual development of the achievements they describe.</p>
        
        <p><span class="para-num">C</span> Contemporary research consistently reveals that extraordinary achievement requires extraordinary preparation. The psychologist Anders Ericsson\'s research, popularised through the concept of "deliberate practice," found that world-class performers in many fields had invested approximately ten thousand hours of focused practice before reaching their highest levels. This research, popularised by Malcolm Gladwell\'s book "Outliers," has sometimes been oversimplified into the claim that anyone can achieve world-class performance through sufficient practice. Ericsson himself has emphasised that the picture is more complex — high-quality practice is essential, but so are other factors including initial aptitude, opportunity, and effective coaching.</p>
        
        <p><span class="para-num">D</span> The development of Mozart provides an instructive case. Far from receiving compositions through supernatural inspiration, the young Mozart studied music intensively under his father, an accomplished musician and teacher, from the age of three. By the time he composed his first significant works around age twelve, he had received more focused musical training than virtually any contemporary. His early compositions, while precocious for any child, were relatively conventional and clearly derivative of works he had studied. The truly original compositions on which his reputation rests came much later, after additional years of intensive development. The "miracle" of Mozart, properly understood, is no less impressive but also no more mysterious than the cumulative effects of exceptional dedication.</p>
        
        <p><span class="para-num">E</span> Similar patterns appear in other famous cases. Einstein\'s revolutionary work in physics emerged not from sudden inspiration but from years of obsessive engagement with physical problems that earlier scientists had set aside as too difficult. He read widely in physics and mathematics, corresponded with leading scientists of his day, and developed his theories through sustained effort rather than spontaneous brilliance. The pattern of extended preparation followed by breakthrough is characteristic of virtually all major achievements that have been examined in detail.</p>
        
        <p><span class="para-num">F</span> Yet the model of deliberate practice does not fully explain extraordinary achievement. Two people with similar amounts of practice typically produce very different results. Genetic studies suggest that natural aptitude — sometimes called "raw talent" — plays a substantial role in determining which individuals can reach the highest levels of performance. The specific abilities that contribute to excellence vary enormously across fields, from mathematical reasoning to musical pitch perception to athletic coordination. Practice can develop these abilities, but their underlying potential appears to vary substantially between individuals.</p>
        
        <p><span class="para-num">G</span> Social and historical context also shape what counts as genius. Cultures define which abilities matter and create or fail to create opportunities for exceptional development. Mozart\'s genius could exist only in a society that valued music, supported musicians, and provided performance opportunities. Einstein required not just personal ability but the cultural infrastructure of early twentieth-century physics. Many potential geniuses throughout history undoubtedly lived in conditions that prevented their abilities from developing or being recognised. The relatively few individuals we celebrate as geniuses represent perhaps only a fraction of those whose abilities could have qualified them, had circumstances been different. Genius emerges from the combination of individual capacity and social opportunity, with neither factor sufficient by itself.</p>`,
        
        vi: `<p><strong>Đoạn A:</strong> Điều gì tạo nên một thiên tài? Câu hỏi này đã hấp dẫn các nhà tư tưởng từ thời cổ đại. Tâm lý học hiện đại đã tiếp cận với công cụ mới và hoài nghi đáng kể về câu trả lời truyền thống.</p>
        <p><strong>Đoạn B:</strong> Các giải thích truyền thống về thiên tài nhấn mạnh năng khiếu tự nhiên bí ẩn. Mozart được mô tả nhận các bản nhạc hoàn chỉnh từ nguồn siêu nhiên. Einstein đôi khi được trình bày là hiện tượng không giải thích được.</p>
        <p><strong>Đoạn C:</strong> Nghiên cứu hiện tại cho thấy thành tựu phi thường đòi hỏi sự chuẩn bị phi thường. Nghiên cứu của Anders Ericsson về "deliberate practice" - khoảng 10,000 giờ luyện tập tập trung. Malcolm Gladwell phổ biến qua sách "Outliers".</p>
        <p><strong>Đoạn D:</strong> Sự phát triển của Mozart cho thấy bài học hữu ích. Mozart trẻ đã học nhạc dưới sự dạy bảo của cha mình từ năm 3 tuổi. Các tác phẩm gốc thực sự đến muộn hơn nhiều, sau nhiều năm phát triển chuyên sâu.</p>
        <p><strong>Đoạn E:</strong> Mô hình tương tự xuất hiện trong các trường hợp nổi tiếng khác. Công trình cách mạng của Einstein không đến từ cảm hứng đột ngột mà từ nhiều năm tham gia với các vấn đề vật lý.</p>
        <p><strong>Đoạn F:</strong> Tuy nhiên mô hình deliberate practice không giải thích đầy đủ thành tựu phi thường. Nghiên cứu di truyền cho rằng năng khiếu tự nhiên đóng vai trò đáng kể. Hai người luyện tập tương tự nhau có thể có kết quả khác nhau.</p>
        <p><strong>Đoạn G:</strong> Bối cảnh xã hội và lịch sử cũng định hình thiên tài. Mozart cần xã hội đánh giá cao âm nhạc. Einstein cần cơ sở hạ tầng văn hóa. Nhiều thiên tài tiềm năng trong lịch sử không có cơ hội phát triển.</p>`
      }
    ],
    
    questions: [
      // ========== PASSAGE 1 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 1–5',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'Rainforest soils are generally very fertile.', answer: 'FALSE', explain: 'Đoạn B: "Tropical rainforest soils are typically among the poorest on Earth in terms of nutrient content".' },
            { q: 'Most rainforest species are found in the canopy rather than on the ground.', answer: 'TRUE', explain: 'Đoạn C: "The majority of species live in the canopy".' },
            { q: 'The Amazon produces about half of the world\'s oxygen.', answer: 'FALSE', explain: 'Đoạn D: "The Amazon... contributes only about six percent of global oxygen production".' },
            { q: 'Indigenous peoples have intentionally modified rainforests for thousands of years.', answer: 'TRUE', explain: 'Đoạn E: "these peoples have actively shaped the forests around them".' },
            { q: 'The main cause of rainforest destruction is the trade in tropical hardwoods.', answer: 'FALSE', explain: 'Đoạn F: "The primary cause of rainforest destruction is not the direct demand for tropical hardwoods... but agricultural expansion".' }
          ]
        },
        {
          group: 'Questions 6–9',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to the passage, the lush vegetation of rainforests grows because:', options: ['A. The soils are exceptionally rich', 'B. There is little competition between species', 'C. Nutrients are quickly recycled by living plants', 'D. There are no large herbivores to eat them'], answer: 'C', explain: 'Đoạn B: "nutrients quickly absorbed by living plants before they can accumulate in the soil".' },
            { q: 'The passage suggests that the description of rainforests as "lungs of the planet" is:', options: ['A. Completely accurate', 'B. Misleading because they consume nearly as much oxygen as they produce', 'C. An exaggeration that should never be used', 'D. Only true for the Amazon rainforest'], answer: 'B', explain: 'Đoạn D: "This characterisation is misleading. While rainforests do produce vast amounts of oxygen... they consume nearly as much".' },
            { q: 'Areas of unusually fertile soil in the Amazon are believed to have been:', options: ['A. Created naturally by river flooding', 'B. Created by indigenous peoples adding organic materials', 'C. Brought from elsewhere by European settlers', 'D. The result of ancient volcanic activity'], answer: 'B', explain: 'Đoạn E: "created by indigenous peoples thousands of years ago through systematic addition of charcoal, ash, and organic waste".' },
            { q: 'According to the passage, successful conservation initiatives often:', options: ['A. Completely exclude humans from forest areas', 'B. Support traditional indigenous land management', 'C. Use only modern scientific approaches', 'D. Focus solely on protecting pristine forests'], answer: 'B', explain: 'Đoạn G: "Some of the most successful conservation initiatives now focus on supporting traditional indigenous land management".' }
          ]
        },
        {
          group: 'Questions 10–13',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'Rainforests cover only about __________ percent of Earth\'s land surface.', answer: 'six', explain: 'Đoạn A: "Tropical rainforests cover only about six percent of Earth\'s land surface".' },
            { q: 'The most important function of rainforests is storing __________.', answer: 'carbon dioxide', explain: 'Đoạn D: "they store enormous quantities of carbon dioxide".' },
            { q: 'Forests are typically cleared for cattle ranching, soy farming, and __________ production.', answer: 'palm oil', explain: 'Đoạn F: "cattle ranching, soy farming, palm oil production".' },
            { q: 'Long-term conservation depends on making standing forests more __________ than cleared land.', answer: 'valuable', explain: 'Đoạn G: "making standing forests more valuable than cleared land".' }
          ]
        }
      ],
      
      // ========== PASSAGE 2 QUESTIONS (13 questions) ==========
      [
        {
          group: 'Questions 14–19',
          type: 'matching-headings',
          instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list below.',
          headings: [
            { id: 'i', text: 'From rare object to democratised image' },
            { id: 'ii', text: 'A revolutionary new technology' },
            { id: 'iii', text: 'Constraints that shaped early use' },
            { id: 'iv', text: 'The transformative impact of accessible cameras' },
            { id: 'v', text: 'Multiple inventors and a watershed year' },
            { id: 'vi', text: 'A method that enabled mass reproduction' },
            { id: 'vii', text: 'Expanded uses in science and society' },
            { id: 'viii', text: 'Concerns about digital images today' },
            { id: 'ix', text: 'Famous photographs of the 19th century' }
          ],
          items: [
            { q: 'A', answer: 'i', explain: 'Đoạn A giới thiệu nhiếp ảnh biến đổi từ đối tượng hiếm hoi (chỉ nghệ sĩ làm) sang hình ảnh dân chủ hóa.' },
            { q: 'B', answer: 'v', explain: 'Đoạn B nói về nhiều nhà phát minh (Niépce, Daguerre) và năm 1839 là năm sinh của nhiếp ảnh.' },
            { q: 'C', answer: 'iii', explain: 'Đoạn C về các hạn chế (exposure dài, daguerreotype unique) định hình cách dùng sớm.' },
            { q: 'D', answer: 'vi', explain: 'Đoạn D về phương pháp negative-positive của Talbot cho phép sao chép nhiều bản.' },
            { q: 'E', answer: 'vii', explain: 'Đoạn E về các ứng dụng mới trong khoa học (telescope, microscope) và xã hội (cảnh sát).' },
            { q: 'F', answer: 'iv', explain: 'Đoạn F về Kodak và máy ảnh dễ tiếp cận - tác động biến đổi.' }
          ]
        },
        {
          group: 'Questions 20–23',
          type: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.',
          items: [
            { q: 'The principle that chemicals change colour with light exposure was known before photography was invented.', answer: 'TRUE', explain: 'Đoạn B: "had been known to alchemists since the medieval period".' },
            { q: 'Early daguerreotypes could easily be copied to create multiple identical images.', answer: 'FALSE', explain: 'Đoạn C: "Each daguerreotype was a unique object, like a painting, that could not be copied".' },
            { q: 'Newspapers immediately adopted photographs for news coverage.', answer: 'FALSE', explain: 'Đoạn E: "early printing technologies made this difficult and most newspapers continued to use engravings".' },
            { q: 'Modern humans take more than a trillion photographs per year.', answer: 'TRUE', explain: 'Đoạn G: "Modern humans take approximately one trillion photographs per year".' }
          ]
        },
        {
          group: 'Questions 24–26',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'Niépce produced what is considered the earliest surviving photograph around the year __________.', answer: '1826', explain: 'Đoạn B: "around 1826".' },
            { q: 'Talbot\'s negative-positive process produced images on __________ from which copies could be made.', answer: 'paper', explain: 'Đoạn D: "Talbot\'s process produced a negative image on paper".' },
            { q: 'George Eastman founded the __________ company in the 1880s.', answer: 'Kodak', explain: 'Đoạn F: "George Eastman\'s Kodak company, founded in the 1880s".' }
          ]
        }
      ],
      
      // ========== PASSAGE 3 QUESTIONS (14 questions) ==========
      [
        {
          group: 'Questions 27–32',
          type: 'matching-information',
          instruction: 'Reading Passage 3 has seven paragraphs, A-G. Which paragraph contains the following information?',
          paragraphs: ['A','B','C','D','E','F','G'],
          items: [
            { q: 'A statement that geniuses were once described as receiving supernatural inspiration.', answer: 'B', explain: 'Đoạn B: "geniuses were often portrayed as figures touched by divine inspiration".' },
            { q: 'A reference to the cultural conditions necessary for genius to be recognised.', answer: 'G', explain: 'Đoạn G: "Cultures define which abilities matter and create or fail to create opportunities".' },
            { q: 'The argument that natural aptitude varies substantially between individuals.', answer: 'F', explain: 'Đoạn F: "natural aptitude — sometimes called raw talent — plays a substantial role".' },
            { q: 'A claim that Einstein\'s achievements came from sustained engagement rather than sudden inspiration.', answer: 'E', explain: 'Đoạn E: "Einstein\'s revolutionary work in physics emerged not from sudden inspiration but from years of obsessive engagement".' },
            { q: 'Detailed information about a child\'s intensive musical training.', answer: 'D', explain: 'Đoạn D: "young Mozart studied music intensively under his father... from the age of three".' },
            { q: 'A reference to a book that popularised the "ten thousand hours" concept.', answer: 'C', explain: 'Đoạn C: "Malcolm Gladwell\'s book Outliers".' }
          ]
        },
        {
          group: 'Questions 33–36',
          type: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            { q: 'According to Anders Ericsson\'s research, world-class performers typically:', options: ['A. Are born with rare natural talents', 'B. Have invested around 10,000 hours of focused practice', 'C. Develop most of their skills after age 30', 'D. Achieve excellence in multiple unrelated fields'], answer: 'B', explain: 'Đoạn C: "invested approximately ten thousand hours of focused practice".' },
            { q: 'The author suggests that Mozart\'s early compositions were:', options: ['A. Truly original works of genius', 'B. Largely derivative of works he had studied', 'C. Completely unlike any earlier music', 'D. Generally ignored during his lifetime'], answer: 'B', explain: 'Đoạn D: "His early compositions... were relatively conventional and clearly derivative of works he had studied".' },
            { q: 'According to the passage, the "ten thousand hours" rule:', options: ['A. Is always sufficient to produce a genius', 'B. Has been disproved by modern psychology', 'C. Has sometimes been oversimplified', 'D. Applies only to musicians'], answer: 'C', explain: 'Đoạn C: "has sometimes been oversimplified into the claim that anyone can achieve world-class performance through sufficient practice".' },
            { q: 'The author concludes that genius emerges from:', options: ['A. Pure natural talent regardless of circumstances', 'B. The combination of individual capacity and social opportunity', 'C. Mysterious processes that cannot be analysed', 'D. Practice alone, with no other factors needed'], answer: 'B', explain: 'Đoạn G: "Genius emerges from the combination of individual capacity and social opportunity".' }
          ]
        },
        {
          group: 'Questions 37–40',
          type: 'fill',
          instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'The concept of __________ practice was popularised by the psychologist Anders Ericsson.', answer: 'deliberate', explain: 'Đoạn C: "popularised through the concept of deliberate practice".' },
            { q: 'Mozart began studying music with his father from the age of __________.', answer: 'three', explain: 'Đoạn D: "from the age of three".' },
            { q: 'Natural aptitude is sometimes called "raw __________".', answer: 'talent', explain: 'Đoạn F: "natural aptitude — sometimes called raw talent".' },
            { q: 'Mozart needed a society that valued music and supported __________.', answer: 'musicians', explain: 'Đoạn G: "a society that valued music, supported musicians".' }
          ]
        }
      ]
    ]
  },

  // ==================== CAMBRIDGE 17 - TEST 4 ====================
  'cam17-t4': {
    title: 'The Origins of Agriculture',
    topic: 'History · Archaeology',
    difficulty: 'Hard',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Origins of Agriculture',
      content: `<p><span class="para-num">A</span> For approximately 95 percent of human existence, our ancestors lived as hunter-gatherers, obtaining their food directly from wild plants and animals. The transition to agriculture — the deliberate cultivation of plants and management of animals — happened relatively recently in human history, beginning around 12,000 years ago, and not in just one place but independently in several different regions of the world. This transition was perhaps the most fundamental change in human history, transforming nearly every aspect of how humans lived, worked, and organised themselves.</p>
      
      <p><span class="para-num">B</span> The process of agricultural development was much slower than once believed. Rather than a sudden discovery, the shift involved thousands of years of gradual experimentation with plants and animals. Early communities probably encouraged useful wild plants by removing competitors and ensuring water reached them. Over many generations, the plants that responded best to such encouragement became the focus of more intensive management. True domestication — in which plants and animals develop genetic characteristics that depend on human care — emerged only after long periods of selective pressure.</p>
      
      <p><span class="para-num">C</span> The earliest known agricultural development occurred in the Fertile Crescent, a region stretching from modern Iran through Iraq, Syria, Lebanon, and Israel. Here, by around 10,000 BCE, communities had begun cultivating wild ancestors of wheat and barley, and managing herds of sheep, goats, and later cattle. The region\'s natural advantages were considerable: it contained an unusually rich variety of plant species suitable for cultivation, and animals that could be successfully domesticated. The Mediterranean climate also provided favourable conditions for early agricultural experimentation.</p>
      
      <p><span class="para-num">D</span> Agriculture also developed independently in at least six other regions of the world. In northern China, communities along the Yellow River began cultivating millet around 8,000 BCE; somewhat later, in the south, rice cultivation emerged. In Mesoamerica, beginning around 7,000 BCE, indigenous peoples gradually domesticated maize from a wild grass called teosinte, in a process taking thousands of years. The Andes mountains saw the development of potato cultivation. Sub-Saharan Africa, New Guinea, and the eastern woodlands of North America also saw independent agricultural development. The independent emergence of agriculture in so many separate regions suggests that something fundamental about human society was driving this transformation, despite the very different specific paths it took.</p>
      
      <p><span class="para-num">E</span> The reasons for the agricultural transition remain debated among scholars. Earlier explanations emphasised population pressure: as human populations grew, hunter-gatherer lifestyles became inadequate to feed everyone, forcing the development of more intensive food production. More recent research has complicated this picture. Some early agricultural communities appear to have had relatively low populations, and skeletal evidence often shows that early farmers actually had worse nutrition and shorter lives than the hunter-gatherers they replaced. Climate change at the end of the last ice age may have created conditions favourable for agriculture in some regions, but this cannot fully explain the timing in all areas where agriculture emerged.</p>
      
      <p><span class="para-num">F</span> The social consequences of agriculture were profound. Hunter-gatherer societies were typically small, mobile, and relatively egalitarian. Agricultural societies were larger, more sedentary, and developed elaborate hierarchies. The need to store and protect food crops led to the development of fortifications, military organisation, and ultimately the emergence of cities and states. Property ownership, which had been almost meaningless to mobile peoples, became central to agricultural societies. Many social inequalities that we now consider natural — including some forms of gender inequality — appear to have intensified or developed during the agricultural transition.</p>
      
      <p><span class="para-num">G</span> Agriculture also transformed humans biologically. Diets became less varied as communities depended on a small number of staple crops, leading to changes in dental and skeletal development visible in archaeological remains. The close contact between humans and domesticated animals enabled the transfer of diseases like influenza, measles, and smallpox from animal to human populations. Some genetic adaptations emerged, including the ability of adults to digest milk, which appeared independently in several populations after they began keeping cattle. The full consequences of the agricultural revolution are still unfolding ten thousand years later, with most aspects of modern human life — from cities to nutrition to social organisation — ultimately traceable to that ancient transformation.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Trong khoảng 95% sự tồn tại của con người, tổ tiên chúng ta sống như người săn bắt-hái lượm. Sự chuyển đổi sang nông nghiệp đã xảy ra tương đối gần đây trong lịch sử nhân loại, bắt đầu khoảng 12,000 năm trước, và không chỉ ở một nơi mà độc lập ở nhiều khu vực khác nhau. Sự chuyển đổi này có lẽ là thay đổi cơ bản nhất trong lịch sử nhân loại.</p>
      
      <p><strong>Đoạn B:</strong> Quá trình phát triển nông nghiệp chậm hơn nhiều so với những gì từng tin tưởng. Thay vì một phát hiện đột ngột, sự chuyển đổi liên quan đến hàng nghìn năm thử nghiệm. Các cộng đồng sớm có lẽ đã khuyến khích thực vật hoang dã hữu ích. Sự thuần hóa thực sự nổi lên sau thời kỳ áp lực chọn lọc dài.</p>
      
      <p><strong>Đoạn C:</strong> Sự phát triển nông nghiệp được biết đến sớm nhất xảy ra ở Lưỡi liềm Màu mỡ. Đến khoảng 10,000 TCN, các cộng đồng đã bắt đầu trồng các tổ tiên hoang dã của lúa mì và lúa mạch. Khu vực có nhiều lợi thế tự nhiên: chứa nhiều loài thực vật phong phú phù hợp với canh tác.</p>
      
      <p><strong>Đoạn D:</strong> Nông nghiệp cũng phát triển độc lập ở ít nhất sáu khu vực khác. Ở miền bắc Trung Quốc, các cộng đồng dọc sông Hoàng Hà bắt đầu trồng kê khoảng 8,000 TCN. Ở Mesoamerica, người bản địa dần thuần hóa ngô từ một loại cỏ hoang dã gọi là teosinte. Vùng núi Andes thấy sự phát triển canh tác khoai tây.</p>
      
      <p><strong>Đoạn E:</strong> Các lý do cho sự chuyển đổi nông nghiệp vẫn còn tranh cãi. Các giải thích trước đây nhấn mạnh áp lực dân số. Nghiên cứu gần đây đã làm phức tạp hóa bức tranh. Bằng chứng xương cho thấy nông dân sớm thực sự có dinh dưỡng kém hơn và cuộc sống ngắn hơn so với những người săn bắt-hái lượm.</p>
      
      <p><strong>Đoạn F:</strong> Hậu quả xã hội của nông nghiệp rất sâu sắc. Các xã hội săn bắt-hái lượm thường nhỏ, di động và tương đối bình đẳng. Các xã hội nông nghiệp lớn hơn, định cư hơn, và phát triển các thứ bậc phức tạp. Nhu cầu lưu trữ và bảo vệ cây trồng dẫn đến sự phát triển của các pháo đài, tổ chức quân sự, và cuối cùng là sự xuất hiện của các thành phố và nhà nước.</p>
      
      <p><strong>Đoạn G:</strong> Nông nghiệp cũng biến đổi con người về mặt sinh học. Chế độ ăn trở nên ít đa dạng hơn. Sự tiếp xúc gần gũi giữa con người và động vật được thuần hóa đã cho phép chuyển bệnh từ động vật sang quần thể người. Một số thích nghi di truyền xuất hiện, bao gồm khả năng của người lớn tiêu hóa sữa.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–6',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Agriculture developed in a single region and then spread to other parts of the world.', answer: 'FALSE', explain: 'Đoạn A: "independently in several different regions of the world".' },
          { q: 'The transition to agriculture happened quickly once it began.', answer: 'FALSE', explain: 'Đoạn B: "much slower than once believed... thousands of years of gradual experimentation".' },
          { q: 'The Fertile Crescent had natural advantages for early agriculture.', answer: 'TRUE', explain: 'Đoạn C: "The region\'s natural advantages were considerable".' },
          { q: 'Wild teosinte and modern maize look very similar to each other.', answer: 'NOT GIVEN', explain: 'Đoạn D nói teosinte là tổ tiên của maize qua hàng ngàn năm thuần hóa nhưng không so sánh ngoại hình của chúng.' },
          { q: 'Early farmers were generally healthier than hunter-gatherers.', answer: 'FALSE', explain: 'Đoạn E: "early farmers actually had worse nutrition and shorter lives than the hunter-gatherers".' },
          { q: 'The ability to digest milk evolved in just one human population.', answer: 'FALSE', explain: 'Đoạn G: "appeared independently in several populations".' }
        ]
      },
      {
        group: 'Questions 7–10',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, agriculture began approximately:', options: ['A. 5,000 years ago', 'B. 12,000 years ago', 'C. 50,000 years ago', 'D. 100,000 years ago'], answer: 'B', explain: 'Đoạn A: "beginning around 12,000 years ago".' },
          { q: 'The fact that agriculture emerged independently in many regions suggests that:', options: ['A. People were copying each other across long distances', 'B. There was something fundamental driving the transition in human societies', 'C. The same climate conditions existed worldwide', 'D. Agriculture was forced on people by external invaders'], answer: 'B', explain: 'Đoạn D: "suggests that something fundamental about human society was driving this transformation".' },
          { q: 'After the agricultural transition, social structures became:', options: ['A. More egalitarian than before', 'B. Simpler and more flexible', 'C. More hierarchical with greater inequality', 'D. Identical across different regions'], answer: 'C', explain: 'Đoạn F: "developed elaborate hierarchies... social inequalities... appear to have intensified or developed".' },
          { q: 'Domesticated animals transferred which of the following to humans?', options: ['A. Influenza, measles, and smallpox', 'B. Heart disease and diabetes', 'C. Mental health disorders', 'D. None of the above'], answer: 'A', explain: 'Đoạn G: "diseases like influenza, measles, and smallpox from animal to human populations".' }
        ]
      },
      {
        group: 'Questions 11–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'In northern China, communities began cultivating __________ around 8,000 BCE.', answer: 'millet', explain: 'Đoạn D: "communities along the Yellow River began cultivating millet around 8,000 BCE".' },
          { q: 'In Mesoamerica, indigenous peoples domesticated maize from a wild grass called __________.', answer: 'teosinte', explain: 'Đoạn D: "domesticated maize from a wild grass called teosinte".' },
          { q: 'Agricultural societies developed __________ to protect their food crops.', answer: 'fortifications', explain: 'Đoạn F: "led to the development of fortifications".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 16 - TEST 4 ====================
  'cam16-t4': {
    title: 'The Power of Habit',
    topic: 'Psychology · Behaviour',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Power of Habit',
      content: `<p><span class="para-num">A</span> Habits play a surprisingly large role in human behaviour. Researchers estimate that around 40 percent of the actions people take each day are performed not as conscious decisions but as habits — automatic responses to familiar situations. We typically brush our teeth without consciously deciding to do so, drive familiar routes without thinking about navigation, and reach for the same snacks during particular activities. The mental efficiency that habits provide is enormous — they free up our limited capacity for conscious thought to focus on novel or important decisions. Yet this efficiency comes with costs that are only now being fully understood.</p>
      
      <p><span class="para-num">B</span> The neuroscience of habit formation has been extensively studied in recent decades. Habits appear to be stored in a region of the brain called the basal ganglia, separate from the areas involved in conscious decision-making. This separation explains why habits can persist even when we consciously want to change them. Damage to the basal ganglia, whether from disease or injury, can disrupt habits while leaving conscious thinking largely intact, while damage to areas involved in conscious thinking can leave habits unchanged. Patients with severe memory disorders may forget meeting researchers from one day to the next yet learn complex motor habits through practice.</p>
      
      <p><span class="para-num">C</span> The classic model of habit formation involves three components, often called the habit loop: a cue triggers the habit, the routine itself is performed, and a reward reinforces the connection. Hearing your alarm clock in the morning (cue) might lead you to brush your teeth (routine), producing a feeling of cleanliness and freshness (reward). The reward strengthens the neural connection between cue and routine, making the behaviour more automatic over time. After enough repetitions, the routine begins to occur almost without conscious thought whenever the cue appears, and a habit has been established.</p>
      
      <p><span class="para-num">D</span> Understanding the habit loop has important practical applications. Charles Duhigg, whose book on habits became an international bestseller, argues that nearly all habits can be modified by working with rather than against the habit loop. Rather than trying to eliminate cues, which is often impossible in daily life, people can substitute new routines that respond to existing cues and provide similar rewards. Someone who habitually snacks while watching television need not give up watching television; substituting healthier snacks while keeping the same cue and reward structure can effectively change behaviour.</p>
      
      <p><span class="para-num">E</span> Habits can be either powerful tools or significant obstacles, depending on their nature. Beneficial habits — regular exercise, healthy eating, productive work routines — accumulate enormous benefits over time when established successfully. Harmful habits — overeating, excessive social media use, substance abuse — can be extraordinarily difficult to break despite genuine intentions to change. The struggle that many people experience with diet, smoking cessation, and similar challenges often reflects not weakness of will but the genuine neurological power of established habits. Knowledge of habit formation can help in both establishing beneficial habits and breaking destructive ones.</p>
      
      <p><span class="para-num">F</span> Research has identified strategies that increase the likelihood of successful habit formation. Starting with small, easily achievable behaviours rather than ambitious changes appears to be more effective. Making the cue conspicuous and the reward immediate strengthens the formation process. Choosing a specific implementation intention — "I will do exercise X at time Y in location Z" — significantly increases follow-through compared to general goals. Habit formation typically requires consistent repetition for weeks or months, with one widely cited study suggesting an average of 66 days, though this varies enormously between individuals and types of habits.</p>
      
      <p><span class="para-num">G</span> Habits also have important implications beyond individual behaviour. Businesses and governments have become increasingly sophisticated at understanding and influencing habits, sometimes with troubling implications. Casino designs, social media interfaces, and supermarket layouts all incorporate principles of habit formation. The same techniques that can help individuals establish healthy habits can be used by corporations to make products addictive and by political campaigns to manipulate behaviour. Awareness of these techniques is becoming increasingly important for both personal autonomy and informed citizenship. The science of habits, like many powerful tools, can serve human flourishing or undermine it depending on how it is applied.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Thói quen đóng vai trò lớn đáng ngạc nhiên trong hành vi con người. Các nhà nghiên cứu ước tính khoảng 40% hành động con người thực hiện mỗi ngày được thực hiện không phải như các quyết định có ý thức mà là thói quen - phản ứng tự động với các tình huống quen thuộc. Hiệu quả tinh thần mà thói quen cung cấp là to lớn.</p>
      
      <p><strong>Đoạn B:</strong> Khoa học thần kinh về hình thành thói quen đã được nghiên cứu rộng rãi trong những thập kỷ gần đây. Thói quen dường như được lưu trữ ở một vùng não gọi là hạch nền, tách biệt với các khu vực liên quan đến quyết định có ý thức. Sự tách biệt này giải thích tại sao thói quen có thể tồn tại ngay cả khi chúng ta có ý thức muốn thay đổi.</p>
      
      <p><strong>Đoạn C:</strong> Mô hình cổ điển của hình thành thói quen bao gồm ba thành phần, thường được gọi là vòng lặp thói quen: một tín hiệu kích hoạt thói quen, thói quen được thực hiện, và một phần thưởng củng cố kết nối. Phần thưởng tăng cường kết nối thần kinh giữa tín hiệu và thói quen, làm cho hành vi tự động hơn theo thời gian.</p>
      
      <p><strong>Đoạn D:</strong> Hiểu vòng lặp thói quen có ứng dụng thực tế quan trọng. Charles Duhigg lập luận rằng gần như tất cả thói quen có thể được sửa đổi bằng cách làm việc với vòng lặp thói quen. Thay vì cố gắng loại bỏ tín hiệu, mọi người có thể thay thế các thói quen mới đáp ứng tín hiệu hiện có và cung cấp phần thưởng tương tự.</p>
      
      <p><strong>Đoạn E:</strong> Thói quen có thể là công cụ mạnh mẽ hoặc trở ngại đáng kể, tùy thuộc vào bản chất của chúng. Thói quen có lợi tích lũy lợi ích to lớn theo thời gian. Thói quen có hại có thể cực kỳ khó phá bỏ bất chấp ý định chân thành để thay đổi. Cuộc đấu tranh thường phản ánh không phải là sự yếu kém của ý chí mà là sức mạnh thần kinh thực sự của các thói quen đã thiết lập.</p>
      
      <p><strong>Đoạn F:</strong> Nghiên cứu đã xác định các chiến lược tăng khả năng hình thành thói quen thành công. Bắt đầu với những hành vi nhỏ, dễ đạt được. Chọn một ý định thực hiện cụ thể - "Tôi sẽ tập X vào thời gian Y tại địa điểm Z". Hình thành thói quen thường đòi hỏi sự lặp lại nhất quán trong nhiều tuần hoặc nhiều tháng, một nghiên cứu được trích dẫn rộng rãi gợi ý trung bình 66 ngày.</p>
      
      <p><strong>Đoạn G:</strong> Thói quen cũng có ý nghĩa quan trọng vượt ra ngoài hành vi cá nhân. Các doanh nghiệp và chính phủ ngày càng tinh vi trong việc hiểu và ảnh hưởng đến thói quen. Thiết kế sòng bạc, giao diện truyền thông xã hội, bố trí siêu thị tất cả đều kết hợp các nguyên tắc hình thành thói quen.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Habits free up mental capacity for more important decisions.', answer: 'TRUE', explain: 'Đoạn A: "they free up our limited capacity for conscious thought to focus on novel or important decisions".' },
          { q: 'Damage to the basal ganglia leaves both habits and conscious thinking unchanged.', answer: 'FALSE', explain: 'Đoạn B: "Damage to the basal ganglia... can disrupt habits while leaving conscious thinking largely intact".' },
          { q: 'Patients with severe memory disorders cannot learn new motor habits.', answer: 'FALSE', explain: 'Đoạn B: "Patients with severe memory disorders may forget meeting researchers from one day to the next yet learn complex motor habits".' },
          { q: 'Charles Duhigg recommends eliminating cues to break habits.', answer: 'FALSE', explain: 'Đoạn D: "Rather than trying to eliminate cues, which is often impossible".' },
          { q: 'Casino designs are based on principles of habit formation.', answer: 'TRUE', explain: 'Đoạn G: "Casino designs... all incorporate principles of habit formation".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to researchers, what proportion of daily actions are habits rather than conscious decisions?', options: ['A. About 20 percent', 'B. About 40 percent', 'C. About 60 percent', 'D. About 80 percent'], answer: 'B', explain: 'Đoạn A: "around 40 percent of the actions people take each day".' },
          { q: 'The three components of the habit loop are:', options: ['A. Thought, action, consequence', 'B. Cue, routine, reward', 'C. Decision, motivation, completion', 'D. Stimulus, response, learning'], answer: 'B', explain: 'Đoạn C: "a cue triggers the habit, the routine itself is performed, and a reward reinforces".' },
          { q: 'The author suggests that difficulty in changing habits is mainly due to:', options: ['A. Weakness of personal willpower', 'B. The neurological power of established habits', 'C. Lack of proper education', 'D. Insufficient motivation'], answer: 'B', explain: 'Đoạn E: "not weakness of will but the genuine neurological power of established habits".' },
          { q: 'According to research, habit formation works best when:', options: ['A. Starting with ambitious large-scale changes', 'B. Trying many different approaches simultaneously', 'C. Starting with small, achievable behaviours', 'D. Avoiding any specific time or place commitments'], answer: 'C', explain: 'Đoạn F: "Starting with small, easily achievable behaviours rather than ambitious changes appears to be more effective".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'Habits are stored in a brain region called the __________.', answer: 'basal ganglia', explain: 'Đoạn B: "Habits appear to be stored in a region of the brain called the basal ganglia".' },
          { q: 'Specifying when, where, and what to do creates an implementation __________.', answer: 'intention', explain: 'Đoạn F: "Choosing a specific implementation intention".' },
          { q: 'One study suggests habit formation takes an average of __________ days.', answer: '66', explain: 'Đoạn F: "an average of 66 days".' },
          { q: 'Knowledge of habits has implications for personal autonomy and informed __________.', answer: 'citizenship', explain: 'Đoạn G: "personal autonomy and informed citizenship".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 15 - TEST 4 ====================
  'cam15-t4': {
    title: 'Ancient Egyptian Medicine',
    topic: 'History · Medicine',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'Medicine in Ancient Egypt',
      content: `<p><span class="para-num">A</span> Ancient Egyptian civilisation produced sophisticated medical knowledge that drew the admiration of contemporary cultures and influenced Western medicine for thousands of years. Greek and Roman writers consistently described Egyptian physicians as the most skilled in the ancient world, and Greek students travelled to Egypt to learn from them. Today, archaeological evidence and surviving ancient texts allow us to reconstruct in considerable detail how the Egyptians understood and treated disease — revealing a medical system that combined practical observation with magical and religious thinking.</p>
      
      <p><span class="para-num">B</span> Most of our knowledge of Egyptian medicine comes from surviving medical papyri, ancient documents that have been preserved in the dry Egyptian climate for thousands of years. The most important of these is the Ebers Papyrus, written around 1550 BCE, containing over 700 prescriptions and remedies for various conditions. The Edwin Smith Papyrus, from roughly the same period, focuses on surgical injuries and demonstrates a remarkably systematic approach. Each case in the Edwin Smith Papyrus follows a standard pattern: title, examination, diagnosis, prognosis, and treatment — a structure that anticipates modern medical case studies by more than three thousand years.</p>
      
      <p><span class="para-num">C</span> Egyptian medical knowledge was based on careful observation of the human body, supported by their unique mummification practices. Although Egyptian beliefs prevented detailed dissection of the dead, the process of preparing bodies for burial provided physicians with practical anatomical knowledge unavailable to most ancient cultures. Egyptian texts demonstrate accurate understanding of many internal organs and their functions, including a recognition that the heart was central to the circulatory system. Other identifications were less accurate — the brain was sometimes regarded as a relatively unimportant organ, while the heart was thought to be the seat of thought and feeling.</p>
      
      <p><span class="para-num">D</span> Egyptian medicine made significant practical advances in many areas. Surgeons could set broken bones, treat wounds with honey (whose antibacterial properties they used without understanding), and even perform certain operations including the trepanning of skulls. Pharmacology was particularly developed, with Egyptian pharmacists using over 700 different substances derived from plants, animals, and minerals. Many of these substances had genuine medical effects — willow bark, the natural source of aspirin, was used to treat pain and fever long before the active compound was isolated by modern chemistry.</p>
      
      <p><span class="para-num">E</span> However, Egyptian medicine combined empirical practice with extensive magical and religious elements. Many treatments included spells, prayers, and ritual practices alongside physical interventions. Diseases were often understood as being caused by supernatural forces — angry gods, demons, or the spirits of the dead. Different categories of physicians existed to address different aspects of disease: ordinary doctors handled physical conditions, while specialists dealt with conditions believed to have spiritual causes. From a modern perspective, these elements appear unscientific, but they should be understood as integral to the comprehensive system the Egyptians developed.</p>
      
      <p><span class="para-num">F</span> Egyptian medicine was also notable for its degree of specialisation. The Greek historian Herodotus, visiting Egypt around 450 BCE, reported with some amazement that Egyptian physicians specialised by body part — there were separate doctors for the eyes, the teeth, the head, the abdomen, and so forth. While Herodotus may have exaggerated the rigour of this specialisation, archaeological evidence does support the existence of medical specialists in various areas. The tombs of physicians often identify them by their specialty, and texts refer to specific titles such as "doctor of the eyes" or "guardian of the bowels".</p>
      
      <p><span class="para-num">G</span> Egyptian medicine\'s influence on subsequent cultures was substantial. Greek medical traditions, including those associated with Hippocrates, show clear debts to Egyptian sources. The Greeks acknowledged this influence and several famous Greek physicians studied in Egypt before establishing their own practices. From Greek medicine, Egyptian influence passed into Roman, Byzantine, Islamic, and ultimately European medical traditions. Some Egyptian remedies remained in European medical use until early modern times. The systematic approach of the Edwin Smith Papyrus to documenting cases — examination, diagnosis, prognosis, treatment — remains the basic structure of clinical practice today, nearly four thousand years after it was first written down in ancient Egypt.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Văn minh Ai Cập cổ đại đã sản xuất kiến thức y tế tinh vi thu hút sự ngưỡng mộ của các nền văn hóa đương thời và ảnh hưởng đến y học phương Tây trong hàng nghìn năm. Các nhà văn Hy Lạp và La Mã liên tục mô tả bác sĩ Ai Cập là khéo léo nhất trong thế giới cổ đại. Bằng chứng khảo cổ và các văn bản cổ sống sót cho phép chúng ta tái tạo chi tiết.</p>
      
      <p><strong>Đoạn B:</strong> Hầu hết kiến thức về y học Ai Cập đến từ giấy cói y học sống sót. Quan trọng nhất là Ebers Papyrus, viết khoảng 1550 TCN, chứa hơn 700 đơn thuốc. Edwin Smith Papyrus tập trung vào chấn thương phẫu thuật và thể hiện cách tiếp cận có hệ thống đáng kể. Mỗi trường hợp tuân theo mẫu chuẩn: tiêu đề, khám, chẩn đoán, tiên lượng, điều trị.</p>
      
      <p><strong>Đoạn C:</strong> Kiến thức y học Ai Cập dựa trên quan sát cẩn thận cơ thể người, được hỗ trợ bởi thực hành ướp xác độc đáo. Mặc dù niềm tin Ai Cập ngăn cản việc giải phẫu chi tiết người chết, quá trình chuẩn bị xác chết cho việc chôn cất cung cấp cho bác sĩ kiến thức giải phẫu thực tế.</p>
      
      <p><strong>Đoạn D:</strong> Y học Ai Cập có những tiến bộ thực tế đáng kể trong nhiều lĩnh vực. Bác sĩ phẫu thuật có thể đặt xương gãy, điều trị vết thương bằng mật ong, và thậm chí thực hiện một số phẫu thuật bao gồm trepanning sọ. Dược học đặc biệt phát triển, với dược sĩ Ai Cập sử dụng hơn 700 chất khác nhau. Vỏ liễu, nguồn tự nhiên của aspirin, được sử dụng để điều trị đau và sốt.</p>
      
      <p><strong>Đoạn E:</strong> Tuy nhiên, y học Ai Cập kết hợp thực hành kinh nghiệm với các yếu tố ma thuật và tôn giáo rộng rãi. Nhiều phương pháp điều trị bao gồm bùa chú, lời cầu nguyện. Bệnh thường được hiểu là do các lực lượng siêu nhiên gây ra. Bác sĩ thông thường xử lý các tình trạng vật lý, trong khi các chuyên gia đối phó với các tình trạng được cho là có nguyên nhân tâm linh.</p>
      
      <p><strong>Đoạn F:</strong> Y học Ai Cập cũng đáng chú ý vì mức độ chuyên môn hóa. Sử gia Hy Lạp Herodotus, thăm Ai Cập khoảng 450 TCN, báo cáo với sự ngạc nhiên rằng bác sĩ Ai Cập chuyên môn hóa theo bộ phận cơ thể - có các bác sĩ riêng cho mắt, răng, đầu, bụng. Bằng chứng khảo cổ hỗ trợ sự tồn tại của các chuyên gia y tế.</p>
      
      <p><strong>Đoạn G:</strong> Ảnh hưởng của y học Ai Cập đến các nền văn hóa sau này là đáng kể. Truyền thống y học Hy Lạp, bao gồm những truyền thống liên quan đến Hippocrates, cho thấy các khoản nợ rõ ràng với các nguồn Ai Cập. Cách tiếp cận có hệ thống của Edwin Smith Papyrus vẫn là cấu trúc cơ bản của thực hành lâm sàng ngày nay.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Greek doctors travelled to Egypt to learn from Egyptian physicians.', answer: 'TRUE', explain: 'Đoạn A: "Greek students travelled to Egypt to learn from them".' },
          { q: 'The Edwin Smith Papyrus contains more prescriptions than the Ebers Papyrus.', answer: 'NOT GIVEN', explain: 'Đoạn B nói Ebers chứa hơn 700 đơn thuốc nhưng không cho số liệu cụ thể cho Edwin Smith.' },
          { q: 'The Egyptians considered the heart less important than the brain.', answer: 'FALSE', explain: 'Đoạn C: "the brain was sometimes regarded as a relatively unimportant organ, while the heart was thought to be the seat of thought".' },
          { q: 'Egyptians used substances like willow bark without knowing why they worked.', answer: 'TRUE', explain: 'Đoạn D: "willow bark... was used to treat pain and fever long before the active compound was isolated".' },
          { q: 'Egyptian doctors specialised in specific parts of the body.', answer: 'TRUE', explain: 'Đoạn F: "Egyptian physicians specialised by body part".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'The Edwin Smith Papyrus is described as remarkable because:', options: ['A. It contains the largest number of remedies', 'B. Its systematic format anticipates modern case studies', 'C. It focuses on diseases of the pharaohs', 'D. It was written in a unique script'], answer: 'B', explain: 'Đoạn B: "a structure that anticipates modern medical case studies by more than three thousand years".' },
          { q: 'Egyptian knowledge of human anatomy was supported by:', options: ['A. Frequent dissections for medical research', 'B. The mummification process', 'C. Information stolen from neighbouring cultures', 'D. Detailed studies of animals'], answer: 'B', explain: 'Đoạn C: "supported by their unique mummification practices".' },
          { q: 'According to the passage, magical elements in Egyptian medicine:', options: ['A. Should be dismissed as superstition', 'B. Were less important than practical treatments', 'C. Were integral to their comprehensive system', 'D. Were added only in later periods'], answer: 'C', explain: 'Đoạn E: "they should be understood as integral to the comprehensive system the Egyptians developed".' },
          { q: 'According to the passage, the influence of Egyptian medicine:', options: ['A. Ended with the fall of ancient Egypt', 'B. Was limited to Greek medicine only', 'C. Continued through several medical traditions until modern times', 'D. Has been largely overstated by historians'], answer: 'C', explain: 'Đoạn G: "Egyptian influence passed into Roman, Byzantine, Islamic, and ultimately European medical traditions".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'The Ebers Papyrus was written around __________ BCE.', answer: '1550', explain: 'Đoạn B: "the Ebers Papyrus, written around 1550 BCE".' },
          { q: 'Egyptians treated wounds with __________, which has antibacterial properties.', answer: 'honey', explain: 'Đoạn D: "treat wounds with honey".' },
          { q: 'The Greek historian __________ described Egyptian medical specialisation.', answer: 'Herodotus', explain: 'Đoạn F: "The Greek historian Herodotus".' },
          { q: 'Egyptian doctors performed __________ of skulls as a surgical operation.', answer: 'trepanning', explain: 'Đoạn D: "the trepanning of skulls".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 14 - TEST 4 ====================
  'cam14-t4': {
    title: 'The Mystery of Time',
    topic: 'Physics · Philosophy',
    difficulty: 'Hard',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Strange Nature of Time',
      content: `<p><span class="para-num">A</span> Time is among the most familiar yet most mysterious aspects of human experience. We measure it precisely with clocks and calendars, organise our lives around it, and feel its passage in everything from the ticking of seconds to the changing of seasons. Yet despite this familiarity, time has resisted easy understanding. The greatest physicists and philosophers have struggled to explain what time actually is and why it appears to flow in only one direction. Recent advances in physics have made these questions even more puzzling rather than resolving them.</p>
      
      <p><span class="para-num">B</span> The classical understanding of time, articulated most clearly by Isaac Newton in the seventeenth century, treated it as an absolute, universal background to events. Time, in this view, flows at the same rate everywhere in the universe, independent of what happens within it. Two clocks placed anywhere would tick at the same rate, and a second would mean the same thing whether on Earth or in distant galaxies. This view aligned closely with everyday experience and dominated scientific thinking for nearly two centuries.</p>
      
      <p><span class="para-num">C</span> Albert Einstein\'s theories of relativity, developed in the early twentieth century, completely overturned this classical picture. According to Einstein\'s special relativity, time passes at different rates for observers moving at different speeds. A clock on a fast-moving spacecraft genuinely ticks slower than an identical clock on Earth — not because of any defect, but because of the fundamental nature of time itself. This effect, called time dilation, has been confirmed experimentally with extraordinary precision. Atomic clocks flown around the world on aircraft return with very slightly different readings than identical clocks that remained at rest.</p>
      
      <p><span class="para-num">D</span> General relativity, Einstein\'s extension of his theory, revealed an even stranger feature: gravity affects the flow of time. Clocks closer to massive objects like Earth tick more slowly than clocks further away. The difference is tiny in everyday situations but accumulates significantly in extreme circumstances. GPS satellites must take this effect into account in their calculations, because the satellites experience slightly faster time than equipment on the Earth\'s surface. Without this correction, GPS navigation would accumulate errors of several kilometres per day.</p>
      
      <p><span class="para-num">E</span> Perhaps the deepest mystery about time is the question of its direction. The fundamental laws of physics work equally well whether time runs forward or backward — they make no distinction between past and future. Yet our experience is unambiguously asymmetric. Memories of the past exist; "memories" of the future do not. Coffee cools but never spontaneously heats up. Glasses break but never reassemble themselves. The asymmetry of time at the macroscopic scale — what physicists call the "arrow of time" — appears to be linked to entropy, the tendency of organised systems to become disorganised. Yet exactly how the microscopic time-symmetric laws produce the macroscopic time-asymmetric experience remains debated.</p>
      
      <p><span class="para-num">F</span> Quantum mechanics adds further complications. The behaviour of fundamental particles, when observed quantum-mechanically, often seems to involve unusual relationships with time. Some experimental setups appear to involve effects that propagate backward in time, though the precise interpretation of such results remains contested. The combination of quantum mechanics with relativity creates particularly serious puzzles. Modern physicists attempting to develop a complete theory of quantum gravity must address fundamental questions about the nature of time that previous generations of scientists could safely ignore.</p>
      
      <p><span class="para-num">G</span> The philosophical implications of modern physics\'s view of time are profound and unsettling. If time is not absolute but relative, can we speak meaningfully of a universal "now" shared across the entire universe? If time depends on motion and gravity, is the distinction between past and future as fundamental as it appears? Some philosophers and physicists have proposed that the apparent flow of time may be an illusion — that all moments may exist eternally, with our experience of time\'s passage being a feature of conscious experience rather than physical reality. Whatever the ultimate truth, the strangeness of time remains one of the most fascinating and unresolved questions in human thought.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Thời gian là một trong những khía cạnh quen thuộc nhất nhưng cũng bí ẩn nhất của trải nghiệm con người. Chúng ta đo nó chính xác bằng đồng hồ và lịch. Tuy nhiên thời gian đã chống lại sự hiểu biết dễ dàng. Những nhà vật lý và triết gia vĩ đại nhất đã đấu tranh để giải thích thời gian thực sự là gì.</p>
      
      <p><strong>Đoạn B:</strong> Hiểu biết cổ điển về thời gian, được Isaac Newton diễn đạt rõ ràng nhất vào thế kỷ 17, coi nó như một nền tảng tuyệt đối, phổ quát cho các sự kiện. Thời gian trôi qua cùng tốc độ ở mọi nơi trong vũ trụ, độc lập với những gì xảy ra trong đó.</p>
      
      <p><strong>Đoạn C:</strong> Các lý thuyết tương đối của Einstein, được phát triển vào đầu thế kỷ 20, đã lật đổ hoàn toàn bức tranh cổ điển này. Theo thuyết tương đối hẹp, thời gian trôi qua với tốc độ khác nhau cho các quan sát viên di chuyển ở các tốc độ khác nhau. Hiệu ứng này, gọi là giãn nở thời gian, đã được xác nhận thực nghiệm. Đồng hồ nguyên tử bay quanh thế giới trên máy bay trở về với số đọc rất khác.</p>
      
      <p><strong>Đoạn D:</strong> Thuyết tương đối tổng quát tiết lộ một đặc điểm còn kỳ lạ hơn: trọng lực ảnh hưởng đến dòng thời gian. Đồng hồ gần các vật thể lớn như Trái Đất tích tắc chậm hơn. Vệ tinh GPS phải tính đến hiệu ứng này, vì các vệ tinh trải nghiệm thời gian nhanh hơn một chút so với thiết bị trên bề mặt Trái Đất. Không có sự điều chỉnh này, điều hướng GPS sẽ tích lũy lỗi vài km mỗi ngày.</p>
      
      <p><strong>Đoạn E:</strong> Có lẽ bí ẩn sâu sắc nhất về thời gian là câu hỏi về hướng của nó. Các định luật cơ bản của vật lý hoạt động tốt cho dù thời gian chạy về phía trước hay phía sau. Tuy nhiên trải nghiệm của chúng ta là không đối xứng rõ ràng. Cà phê nguội nhưng không bao giờ tự nóng lên. Kính vỡ nhưng không bao giờ tự lắp lại.</p>
      
      <p><strong>Đoạn F:</strong> Cơ học lượng tử thêm các phức tạp hơn. Hành vi của các hạt cơ bản thường dường như liên quan đến các mối quan hệ bất thường với thời gian. Một số thiết lập thực nghiệm xuất hiện liên quan đến các hiệu ứng truyền ngược thời gian, mặc dù việc giải thích chính xác vẫn còn tranh cãi.</p>
      
      <p><strong>Đoạn G:</strong> Hàm ý triết học của quan điểm vật lý hiện đại về thời gian rất sâu sắc và đáng lo ngại. Nếu thời gian không tuyệt đối mà tương đối, chúng ta có thể nói có ý nghĩa về một "bây giờ" phổ quát được chia sẻ trên toàn vũ trụ không? Một số triết gia và nhà vật lý đã đề xuất rằng dòng chảy rõ ràng của thời gian có thể là một ảo ảnh.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Recent advances in physics have helped resolve the mystery of time.', answer: 'FALSE', explain: 'Đoạn A: "have made these questions even more puzzling rather than resolving them".' },
          { q: 'Newton thought time flowed at the same rate everywhere in the universe.', answer: 'TRUE', explain: 'Đoạn B: "Time, in this view, flows at the same rate everywhere in the universe".' },
          { q: 'Atomic clocks on aircraft show no difference from clocks at rest.', answer: 'FALSE', explain: 'Đoạn C: "return with very slightly different readings than identical clocks that remained at rest".' },
          { q: 'GPS satellites would lose accuracy without accounting for time dilation effects.', answer: 'TRUE', explain: 'Đoạn D: "Without this correction, GPS navigation would accumulate errors of several kilometres per day".' },
          { q: 'The fundamental laws of physics clearly distinguish past from future.', answer: 'FALSE', explain: 'Đoạn E: "they make no distinction between past and future".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to special relativity, clocks on fast-moving spacecraft:', options: ['A. Tick at the same rate as clocks on Earth', 'B. Tick faster than clocks on Earth', 'C. Genuinely tick slower than identical clocks on Earth', 'D. Cannot function properly in space'], answer: 'C', explain: 'Đoạn C: "A clock on a fast-moving spacecraft genuinely ticks slower than an identical clock on Earth".' },
          { q: 'According to general relativity, gravity affects time by:', options: ['A. Stopping it completely near massive objects', 'B. Making clocks tick more slowly near massive objects', 'C. Making time flow backwards in some places', 'D. Having no effect on time'], answer: 'B', explain: 'Đoạn D: "Clocks closer to massive objects like Earth tick more slowly than clocks further away".' },
          { q: 'The "arrow of time" refers to:', options: ['A. The direction in which clocks move', 'B. A specific scientific instrument', 'C. The asymmetry of time at the macroscopic scale', 'D. Time travel devices imagined by physicists'], answer: 'C', explain: 'Đoạn E: "The asymmetry of time at the macroscopic scale — what physicists call the arrow of time".' },
          { q: 'Some philosophers and physicists have proposed that:', options: ['A. Time has been measured incorrectly for centuries', 'B. The flow of time may be an illusion of consciousness', 'C. Time will eventually stop in the future', 'D. Different cultures experience time differently'], answer: 'B', explain: 'Đoạn G: "the apparent flow of time may be an illusion — that all moments may exist eternally".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'The effect of time passing at different rates for moving observers is called __________.', answer: 'time dilation', explain: 'Đoạn C: "This effect, called time dilation".' },
          { q: 'The asymmetric arrow of time appears to be linked to __________.', answer: 'entropy', explain: 'Đoạn E: "the arrow of time — appears to be linked to entropy".' },
          { q: 'Physicists developing a complete theory of quantum __________ must address questions about time.', answer: 'gravity', explain: 'Đoạn F: "develop a complete theory of quantum gravity".' },
          { q: 'Whether the universe has a shared "now" depends on whether time is __________.', answer: 'absolute', explain: 'Đoạn G: "If time is not absolute but relative, can we speak meaningfully of a universal now".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 13 - TEST 4 ====================
  'cam13-t4': {
    title: 'The Story of Chocolate',
    topic: 'History · Food Science',
    difficulty: 'Easy',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Story of Chocolate',
      content: `<p><span class="para-num">A</span> Chocolate is among the most widely loved foods on Earth, consumed in vast quantities across nearly every culture. Its name derives from the Aztec word "xocolatl", meaning "bitter water" — a reminder that the substance we know today bears only a distant relationship to chocolate as originally consumed. The transformation of bitter cocoa beans into the sweet, smooth substance found in modern confectionery involved centuries of innovation and cultural exchange across continents.</p>
      
      <p><span class="para-num">B</span> The cacao tree, from whose seeds chocolate is made, is native to the rainforests of Central and South America. Indigenous peoples of Mesoamerica had been consuming cacao for at least 3,000 years before European contact, and possibly much longer. The Maya and later the Aztec civilisations developed elaborate cacao-based beverages, sometimes flavoured with chilli peppers, vanilla, and other spices. Cacao beans were valuable enough to function as currency in some markets, and access to chocolate drinks was often restricted to nobility and religious specialists.</p>
      
      <p><span class="para-num">C</span> Spanish conquistadors encountered chocolate in Aztec court during the early sixteenth century, and Hernán Cortés is often credited with introducing it to Europe. The initial European reception was lukewarm — the bitter, often spicy drink was very different from European tastes. Spanish innovators gradually transformed it by adding sugar and replacing the chilli peppers with sweeter spices like cinnamon. This sweetened chocolate beverage became popular among the Spanish nobility through the seventeenth century, and from Spain spread to other European courts.</p>
      
      <p><span class="para-num">D</span> For two centuries after its introduction to Europe, chocolate remained primarily a beverage. The transformation of chocolate into a solid, eatable form required several technological breakthroughs. The Dutch chemist Coenraad Van Houten invented a press in 1828 that separated cocoa butter from the bean solids, producing cocoa powder that could be easily mixed with liquid. He also developed a treatment with alkaline salts that made cocoa powder less bitter and more soluble — a process still called "Dutching" today. These innovations made mass production of chocolate possible.</p>
      
      <p><span class="para-num">E</span> The British company Fry and Sons created the first solid chocolate bar in 1847 by mixing cocoa powder with sugar and cocoa butter. The result was somewhat coarse by modern standards, but recognisably chocolate as we know it. Within decades, several other companies were producing chocolate bars, often with regional variations. The Swiss chocolatier Daniel Peter developed milk chocolate in 1875 by adding condensed milk to the basic mixture — a process that required years of experimentation to succeed.</p>
      
      <p><span class="para-num">F</span> The twentieth century saw chocolate transform from a luxury treat into an everyday food. Mass production techniques dramatically reduced costs while increasing consistency and quality. Brand-name chocolate bars became major commercial successes — Hershey\'s in America, Cadbury in Britain, Lindt in Switzerland. Chocolate became a vital part of holiday celebrations, particularly Easter and Christmas, and Valentine\'s Day. Soldiers in both world wars received chocolate as part of their rations, helping to establish lifelong preferences in returning veterans.</p>
      
      <p><span class="para-num">G</span> Today, the global chocolate industry is worth over 100 billion dollars annually, but it faces significant challenges. Most cacao is grown by small farmers in West Africa, particularly Ivory Coast and Ghana, who often earn very little despite the high prices their product commands in wealthy nations. Concerns about child labour, environmental damage from cacao farming, and climate change threatening growing regions have prompted various initiatives to make chocolate production more sustainable and ethical. The story of chocolate, which began with sacred Aztec rituals, continues to evolve in response to modern global challenges.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Sô-cô-la nằm trong số các loại thực phẩm được yêu thích rộng rãi nhất trên Trái Đất. Tên của nó bắt nguồn từ từ Aztec "xocolatl", có nghĩa là "nước đắng" - lời nhắc nhở rằng chất chúng ta biết ngày nay chỉ có mối quan hệ xa với sô-cô-la như ban đầu được tiêu thụ.</p>
      
      <p><strong>Đoạn B:</strong> Cây cacao có nguồn gốc từ rừng mưa nhiệt đới của Trung và Nam Mỹ. Người bản địa Mesoamerica đã tiêu thụ cacao ít nhất 3,000 năm trước khi tiếp xúc với người châu Âu. Người Maya và sau đó là người Aztec đã phát triển các loại đồ uống dựa trên cacao cầu kỳ. Hạt cacao đủ giá trị để đóng vai trò như tiền tệ.</p>
      
      <p><strong>Đoạn C:</strong> Các conquistador Tây Ban Nha đã gặp sô-cô-la trong triều đình Aztec đầu thế kỷ 16. Hernán Cortés thường được ghi nhận là người giới thiệu nó đến châu Âu. Người Tây Ban Nha dần biến đổi nó bằng cách thêm đường và thay thế ớt bằng các loại gia vị ngọt hơn như quế.</p>
      
      <p><strong>Đoạn D:</strong> Trong hai thế kỷ sau khi được giới thiệu đến châu Âu, sô-cô-la vẫn chủ yếu là đồ uống. Nhà hóa học Hà Lan Coenraad Van Houten đã phát minh ra máy ép vào năm 1828 tách bơ ca cao khỏi chất rắn của hạt, sản xuất bột ca cao. Ông cũng phát triển phương pháp xử lý với muối kiềm làm cho bột ca cao ít đắng hơn - một quy trình vẫn được gọi là "Dutching" ngày nay.</p>
      
      <p><strong>Đoạn E:</strong> Công ty Anh Fry and Sons đã tạo ra thanh sô-cô-la rắn đầu tiên vào năm 1847. Trong vòng vài thập kỷ, nhiều công ty khác đang sản xuất các thanh sô-cô-la. Người sản xuất sô-cô-la Thụy Sĩ Daniel Peter đã phát triển sô-cô-la sữa vào năm 1875.</p>
      
      <p><strong>Đoạn F:</strong> Thế kỷ 20 chứng kiến sô-cô-la chuyển đổi từ một món ăn xa xỉ thành một loại thực phẩm hàng ngày. Hershey\'s ở Mỹ, Cadbury ở Anh, Lindt ở Thụy Sĩ. Sô-cô-la trở thành một phần quan trọng của các lễ hội. Lính trong cả hai cuộc chiến tranh thế giới nhận được sô-cô-la như một phần khẩu phần.</p>
      
      <p><strong>Đoạn G:</strong> Ngày nay, ngành công nghiệp sô-cô-la toàn cầu trị giá hơn 100 tỷ đô la hàng năm. Hầu hết cacao được trồng bởi các nông dân nhỏ ở Tây Phi, đặc biệt là Bờ Biển Ngà và Ghana. Mối quan tâm về lao động trẻ em, thiệt hại môi trường, và biến đổi khí hậu đe dọa các vùng trồng đã thúc đẩy các sáng kiến khác nhau.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'The word "xocolatl" means "sweet drink" in the Aztec language.', answer: 'FALSE', explain: 'Đoạn A: "xocolatl, meaning bitter water".' },
          { q: 'Cacao beans were used as currency in some pre-Columbian societies.', answer: 'TRUE', explain: 'Đoạn B: "Cacao beans were valuable enough to function as currency in some markets".' },
          { q: 'Europeans immediately loved chocolate when it was first introduced.', answer: 'FALSE', explain: 'Đoạn C: "The initial European reception was lukewarm".' },
          { q: 'Coenraad Van Houten\'s innovations made mass production of chocolate possible.', answer: 'TRUE', explain: 'Đoạn D: "These innovations made mass production of chocolate possible".' },
          { q: 'Most cacao today is grown in South America where the tree originated.', answer: 'FALSE', explain: 'Đoạn G: "Most cacao is grown by small farmers in West Africa".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'The Spanish changed the Aztec chocolate beverage by:', options: ['A. Removing the cocoa entirely', 'B. Adding sugar and sweeter spices', 'C. Making it stronger and more bitter', 'D. Cooling it down before serving'], answer: 'B', explain: 'Đoạn C: "by adding sugar and replacing the chilli peppers with sweeter spices like cinnamon".' },
          { q: 'The first solid chocolate bar was created by:', options: ['A. Hernán Cortés in the sixteenth century', 'B. Coenraad Van Houten in 1828', 'C. The British company Fry and Sons in 1847', 'D. Daniel Peter in Switzerland in 1875'], answer: 'C', explain: 'Đoạn E: "The British company Fry and Sons created the first solid chocolate bar in 1847".' },
          { q: 'Milk chocolate was developed in 1875 by:', options: ['A. Adding condensed milk to chocolate', 'B. Mixing fresh milk with cocoa powder', 'C. Using cream instead of milk', 'D. Replacing sugar with milk'], answer: 'A', explain: 'Đoạn E: "Daniel Peter developed milk chocolate in 1875 by adding condensed milk".' },
          { q: 'According to the passage, the chocolate industry now faces challenges including:', options: ['A. A lack of consumer interest', 'B. Health concerns about eating chocolate', 'C. Child labour, environmental damage, and climate change', 'D. New competing technologies'], answer: 'C', explain: 'Đoạn G: "Concerns about child labour, environmental damage from cacao farming, and climate change".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'Indigenous peoples of Mesoamerica consumed cacao for at least __________ years before European contact.', answer: '3,000', explain: 'Đoạn B: "at least 3,000 years before European contact".' },
          { q: 'Van Houten\'s process for reducing the bitterness of cocoa powder is called __________.', answer: 'Dutching', explain: 'Đoạn D: "a process still called Dutching today".' },
          { q: 'During both world wars, soldiers received chocolate as part of their __________.', answer: 'rations', explain: 'Đoạn F: "received chocolate as part of their rations".' },
          { q: 'The global chocolate industry is now worth over __________ dollars annually.', answer: '100 billion', explain: 'Đoạn G: "the global chocolate industry is worth over 100 billion dollars annually".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 12 - TEST 4 ====================
  'cam12-t4': {
    title: 'The Power of Curiosity',
    topic: 'Psychology · Learning',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Power of Curiosity',
      content: `<p><span class="para-num">A</span> Curiosity — the drive to seek out new information and experiences — seems like one of the most basic features of human psychology. Children begin asking questions almost as soon as they learn to speak, and well-functioning adults continue exploring ideas, places, and possibilities throughout their lives. Yet despite its apparent universality, curiosity has received remarkably little attention from psychologists until relatively recently. The past two decades have seen a surge of research that has begun to reveal both why curiosity exists and how it might be cultivated to enhance learning and wellbeing.</p>
      
      <p><span class="para-num">B</span> Two different types of curiosity have been identified by researchers, with different psychological characteristics and effects. The first, sometimes called epistemic or intellectual curiosity, involves the desire to understand and acquire knowledge. People with high levels of epistemic curiosity enjoy reading, learning, and intellectual challenges for their own sake. The second type, often called perceptual or sensory curiosity, involves seeking new experiences and sensations. People with high perceptual curiosity tend to travel widely, try novel foods, and pursue varied entertainment. Both types of curiosity contribute to wellbeing, but they involve quite different psychological systems.</p>
      
      <p><span class="para-num">C</span> Neuroscience research has revealed that curiosity activates the same brain regions involved in processing rewards like food and money. When we encounter information that satisfies our curiosity, our brains release dopamine, the neurotransmitter associated with pleasure and motivation. This explains why learning interesting information feels intrinsically rewarding, regardless of whether it has practical applications. Conversely, situations of curiosity-without-resolution can be uncomfortable — explaining why we feel compelled to learn the endings of mysterious stories even when we know we will soon forget them.</p>
      
      <p><span class="para-num">D</span> Curiosity has important effects on memory. Research has shown that people remember information better when they were curious about the answer before learning it, even when the information itself was unrelated to anything they cared about. Asking yourself questions about material before learning it — a technique sometimes called pretesting — appears to leverage this effect to enhance retention. Teachers and trainers can use curiosity-generating techniques to improve learning outcomes, beginning lessons with intriguing questions rather than presenting information directly.</p>
      
      <p><span class="para-num">E</span> Individual differences in curiosity appear to be partly hereditary but are also strongly affected by experience. Children raised in environments that encourage exploration and reward questions tend to develop higher levels of curiosity than those raised in restrictive environments. Educational settings can either encourage or discourage curious behaviour, sometimes inadvertently. Traditional teaching methods focused on memorisation of factual material may train students to wait for information to be delivered rather than seeking it out themselves. Some progressive educational approaches deliberately work to maintain and develop students\' natural curiosity.</p>
      
      <p><span class="para-num">F</span> Curiosity has practical advantages throughout life. Studies have linked high levels of curiosity to greater life satisfaction, stronger relationships, and better physical health in old age. Researchers believe these effects reflect the way that curious people remain mentally engaged with their environments, continuing to learn and adapt rather than becoming set in their ways. Curiosity also appears to be related to longevity, possibly because it encourages continued mental activity that maintains cognitive function. In a study following older adults for several years, those with higher curiosity scores at the beginning of the study were significantly more likely to be alive at its conclusion.</p>
      
      <p><span class="para-num">G</span> Modern technology poses interesting challenges for curiosity. The internet provides instant answers to almost any question, which can satisfy curiosity easily but may also reduce the depth of engagement with topics. Social media platforms designed for engagement can transform curiosity into a constant search for novelty rather than sustained inquiry. Yet the same technologies offer unprecedented opportunities for learning and exploration. How human curiosity adapts to these new technological environments may significantly shape both individual lives and broader social outcomes in the coming decades.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Tò mò - động lực tìm kiếm thông tin và trải nghiệm mới - dường như là một trong những đặc điểm cơ bản nhất của tâm lý con người. Trẻ em bắt đầu đặt câu hỏi ngay khi học nói. Tuy nhiên, tò mò đã nhận được ít sự chú ý từ các nhà tâm lý học cho đến gần đây.</p>
      
      <p><strong>Đoạn B:</strong> Hai loại tò mò khác nhau đã được các nhà nghiên cứu xác định. Loại thứ nhất, đôi khi được gọi là tò mò nhận thức hoặc trí tuệ, liên quan đến mong muốn hiểu và có được kiến thức. Loại thứ hai, thường được gọi là tò mò tri giác hoặc cảm giác, liên quan đến việc tìm kiếm trải nghiệm và cảm giác mới.</p>
      
      <p><strong>Đoạn C:</strong> Nghiên cứu khoa học thần kinh đã tiết lộ rằng tò mò kích hoạt các vùng não giống như xử lý phần thưởng như thức ăn và tiền. Khi chúng ta gặp thông tin thỏa mãn sự tò mò, bộ não của chúng ta giải phóng dopamine. Điều này giải thích tại sao việc học thông tin thú vị cảm thấy tự bản chất là thưởng.</p>
      
      <p><strong>Đoạn D:</strong> Tò mò có hiệu ứng quan trọng đối với trí nhớ. Nghiên cứu đã chỉ ra rằng mọi người nhớ thông tin tốt hơn khi họ tò mò về câu trả lời trước khi học nó. Tự đặt câu hỏi về tài liệu trước khi học - một kỹ thuật đôi khi được gọi là pretesting - dường như tận dụng hiệu ứng này.</p>
      
      <p><strong>Đoạn E:</strong> Khác biệt cá nhân về tò mò xuất hiện một phần là di truyền nhưng cũng bị ảnh hưởng mạnh mẽ bởi kinh nghiệm. Trẻ em được nuôi dưỡng trong môi trường khuyến khích khám phá và thưởng cho câu hỏi có xu hướng phát triển mức độ tò mò cao hơn.</p>
      
      <p><strong>Đoạn F:</strong> Tò mò có những lợi thế thực tế trong suốt cuộc đời. Các nghiên cứu đã liên kết mức độ tò mò cao với sự hài lòng cuộc sống lớn hơn, mối quan hệ mạnh mẽ hơn, và sức khỏe thể chất tốt hơn ở tuổi già. Trong một nghiên cứu theo dõi người lớn tuổi qua vài năm, những người có điểm tò mò cao hơn ở đầu nghiên cứu có nhiều khả năng còn sống ở kết luận của nó.</p>
      
      <p><strong>Đoạn G:</strong> Công nghệ hiện đại đặt ra những thách thức thú vị cho sự tò mò. Internet cung cấp câu trả lời ngay lập tức cho hầu hết bất kỳ câu hỏi nào, có thể thỏa mãn tò mò dễ dàng nhưng cũng có thể làm giảm độ sâu của sự tham gia với các chủ đề.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Curiosity has been studied extensively by psychologists for many decades.', answer: 'FALSE', explain: 'Đoạn A: "curiosity has received remarkably little attention from psychologists until relatively recently".' },
          { q: 'Epistemic curiosity and perceptual curiosity involve different psychological systems.', answer: 'TRUE', explain: 'Đoạn B: "they involve quite different psychological systems".' },
          { q: 'When we satisfy our curiosity, our brains release dopamine.', answer: 'TRUE', explain: 'Đoạn C: "our brains release dopamine".' },
          { q: 'People remember information better if they were curious about it beforehand.', answer: 'TRUE', explain: 'Đoạn D: "people remember information better when they were curious about the answer before learning it".' },
          { q: 'Curiosity is entirely determined by genetic factors.', answer: 'FALSE', explain: 'Đoạn E: "partly hereditary but are also strongly affected by experience".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'A person who loves trying new foods and travelling to unusual destinations is showing:', options: ['A. Epistemic curiosity', 'B. Perceptual curiosity', 'C. Intellectual curiosity', 'D. Academic curiosity'], answer: 'B', explain: 'Đoạn B: "People with high perceptual curiosity tend to travel widely, try novel foods".' },
          { q: 'The technique called "pretesting" involves:', options: ['A. Taking practice exams before real ones', 'B. Asking yourself questions about material before learning it', 'C. Predicting what others will ask you', 'D. Testing yourself on previously known material'], answer: 'B', explain: 'Đoạn D: "Asking yourself questions about material before learning it — a technique sometimes called pretesting".' },
          { q: 'According to the passage, traditional teaching methods may:', options: ['A. Always work better than progressive approaches', 'B. Train students to wait for information rather than seek it', 'C. Never produce successful students', 'D. Be specifically designed to encourage curiosity'], answer: 'B', explain: 'Đoạn E: "Traditional teaching methods focused on memorisation... may train students to wait for information to be delivered".' },
          { q: 'A study of older adults found that high curiosity scores were associated with:', options: ['A. Better recovery from illness', 'B. Higher income in retirement', 'C. Greater likelihood of being alive years later', 'D. More children and grandchildren'], answer: 'C', explain: 'Đoạn F: "those with higher curiosity scores at the beginning of the study were significantly more likely to be alive at its conclusion".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'Intellectual curiosity is also called __________ curiosity.', answer: 'epistemic', explain: 'Đoạn B: "sometimes called epistemic or intellectual curiosity".' },
          { q: 'Curiosity activates brain regions involved in processing __________.', answer: 'rewards', explain: 'Đoạn C: "the same brain regions involved in processing rewards".' },
          { q: 'High curiosity is linked to greater life __________ in older adults.', answer: 'satisfaction', explain: 'Đoạn F: "high levels of curiosity to greater life satisfaction".' },
          { q: '__________ media platforms can transform curiosity into a constant search for novelty.', answer: 'Social', explain: 'Đoạn G: "Social media platforms designed for engagement".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 11 - TEST 4 ====================
  'cam11-t4': {
    title: 'The Origins of Football',
    topic: 'Sports · History',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Origins of Football',
      content: `<p><span class="para-num">A</span> Football, known as soccer in some English-speaking countries, is now the world\'s most popular sport, with an estimated four billion regular followers and players in every nation on Earth. Despite this remarkable global presence, the game\'s history is less well known than its current popularity might suggest. The modern sport emerged from a complex process involving multiple regional traditions and centuries of evolution before achieving its present form.</p>
      
      <p><span class="para-num">B</span> Games involving kicking a ball can be traced back to various ancient civilisations. The Chinese game of cuju, dating from around 200 BCE, involved kicking a leather ball through a small opening into a net — a setup remarkably similar to modern goals. Romans played a game called harpastum that involved both kicking and carrying a ball. Various indigenous cultures throughout the Americas had similar ball games, often with religious significance. Whether any of these ancient games directly influenced the development of modern football remains uncertain, but they demonstrate that kicking-based ball games have long appealed to human players.</p>
      
      <p><span class="para-num">C</span> Medieval European football was very different from the modern game. In England and other countries, "mob football" matches between villages or different parts of a town involved large numbers of players, virtually no rules, and frequent violence. These chaotic events sometimes involved hundreds of participants and could continue for hours, with the ball being kicked, thrown, or carried by anyone who could get hold of it. Property damage and personal injuries were common, and various English kings issued decrees attempting to ban the game — without much success.</p>
      
      <p><span class="para-num">D</span> The transformation of football into a modern sport began in nineteenth-century English public schools. Different schools had developed their own variations of football, with significantly different rules. At Rugby School, players could pick up the ball and run with it; at Eton, kicking was emphasised and handling was forbidden. Attempts to standardise rules began in the mid-nineteenth century, ultimately resulting in two distinct sports. The Football Association, founded in 1863, codified rules emphasising kicking; the Rugby Football Union, established in 1871, governed the rules allowing handling. The split between these two codes shaped subsequent development of both sports.</p>
      
      <p><span class="para-num">E</span> Standardisation enabled rapid international expansion. The British Empire played a crucial role in spreading football to other countries, with British workers, sailors, and missionaries introducing the game throughout the world. The Football Association rules were widely adopted, with various international football associations forming based on similar foundations. The international governing body FIFA was founded in 1904 by representatives from seven European countries, providing a structure for organising international competition. The first World Cup, held in Uruguay in 1930, attracted teams from only thirteen nations but laid the foundation for what has become the most-watched sporting event in human history.</p>
      
      <p><span class="para-num">F</span> Football\'s spread across class boundaries was particularly significant in its development. Although the game emerged in elite British schools, by the late nineteenth century it had become enormously popular among working-class players and audiences. Industrial workers, with newly granted leisure time on weekends, found football an ideal pastime — relatively cheap, requiring minimal equipment, and providing entertainment as both participants and spectators. Professional football emerged from this working-class base, with clubs forming in industrial cities throughout Britain. From these origins, professional football spread globally and eventually became the multi-billion-dollar industry of today.</p>
      
      <p><span class="para-num">G</span> Modern football has become deeply embedded in cultural and social identity. National football teams are sources of intense patriotic emotion, while local club loyalties can pass through families for generations. The Olympic Games and the FIFA World Cup attract television audiences exceeding a billion viewers, making football the centre of perhaps the largest shared experiences in human history. Yet football also faces significant problems: corruption in governing bodies, the obscene financial inequality between major clubs and smaller ones, concerns about player health, and the environmental impact of major tournaments. How football navigates these challenges will shape not just the sport itself but the broader cultural phenomena it has become.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Bóng đá, được biết đến với tên soccer ở một số quốc gia nói tiếng Anh, hiện là môn thể thao phổ biến nhất thế giới, với ước tính 4 tỷ người theo dõi thường xuyên. Mặc dù có sự hiện diện toàn cầu đáng kể, lịch sử của trò chơi này ít được biết đến hơn so với sự nổi tiếng hiện tại của nó.</p>
      
      <p><strong>Đoạn B:</strong> Các trò chơi liên quan đến đá bóng có thể được truy tìm về các nền văn minh cổ đại khác nhau. Trò chơi cuju của Trung Quốc, có niên đại khoảng 200 TCN, liên quan đến đá bóng da qua một lỗ nhỏ vào lưới. Người La Mã chơi một trò chơi gọi là harpastum liên quan đến cả đá và mang bóng.</p>
      
      <p><strong>Đoạn C:</strong> Bóng đá thời trung cổ châu Âu rất khác với trò chơi hiện đại. Ở Anh và các quốc gia khác, các trận đấu "mob football" giữa các làng hoặc các phần khác nhau của thị trấn liên quan đến số lượng lớn người chơi, hầu như không có luật, và bạo lực thường xuyên.</p>
      
      <p><strong>Đoạn D:</strong> Sự biến đổi của bóng đá thành một môn thể thao hiện đại bắt đầu trong các trường công lập Anh thế kỷ 19. Các trường khác nhau đã phát triển các biến thể bóng đá riêng của họ. Hiệp hội Bóng đá, được thành lập vào năm 1863, đã hệ thống hóa các quy tắc nhấn mạnh đá bóng. Liên đoàn Bóng bầu dục, thành lập năm 1871, quản lý các quy tắc cho phép xử lý.</p>
      
      <p><strong>Đoạn E:</strong> Tiêu chuẩn hóa cho phép mở rộng quốc tế nhanh chóng. Đế quốc Anh đóng vai trò quan trọng trong việc lan truyền bóng đá đến các quốc gia khác. Cơ quan quản lý quốc tế FIFA được thành lập vào năm 1904 bởi các đại diện từ bảy quốc gia châu Âu. World Cup đầu tiên, tổ chức ở Uruguay vào năm 1930.</p>
      
      <p><strong>Đoạn F:</strong> Sự lan truyền của bóng đá qua các ranh giới giai cấp đặc biệt quan trọng trong sự phát triển của nó. Mặc dù trò chơi xuất hiện trong các trường tinh hoa Anh, đến cuối thế kỷ 19, nó đã trở nên cực kỳ phổ biến trong các cầu thủ và khán giả tầng lớp lao động.</p>
      
      <p><strong>Đoạn G:</strong> Bóng đá hiện đại đã trở nên gắn bó sâu sắc với bản sắc văn hóa và xã hội. Các đội bóng đá quốc gia là nguồn cảm xúc yêu nước mạnh mẽ. Thế vận hội Olympic và FIFA World Cup thu hút khán giả truyền hình vượt quá một tỷ người xem.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'The Chinese game of cuju involved kicking a ball through a small opening into a net.', answer: 'TRUE', explain: 'Đoạn B: "involved kicking a leather ball through a small opening into a net".' },
          { q: 'Ancient ball games from the Americas were always purely recreational.', answer: 'FALSE', explain: 'Đoạn B: "often with religious significance".' },
          { q: 'Medieval mob football was generally peaceful and well-regulated.', answer: 'FALSE', explain: 'Đoạn C: "virtually no rules, and frequent violence".' },
          { q: 'English kings successfully banned football in the medieval period.', answer: 'FALSE', explain: 'Đoạn C: "issued decrees attempting to ban the game — without much success".' },
          { q: 'The 1930 World Cup attracted teams from over 30 countries.', answer: 'FALSE', explain: 'Đoạn E: "attracted teams from only thirteen nations".' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'At Rugby School in the nineteenth century, football allowed:', options: ['A. Only kicking the ball', 'B. Picking up and running with the ball', 'C. The use of bats and sticks', 'D. Only female players'], answer: 'B', explain: 'Đoạn D: "At Rugby School, players could pick up the ball and run with it".' },
          { q: 'The Football Association was founded in:', options: ['A. 1845', 'B. 1863', 'C. 1871', 'D. 1904'], answer: 'B', explain: 'Đoạn D: "The Football Association, founded in 1863".' },
          { q: 'According to the passage, football spread internationally largely through:', options: ['A. American film and television', 'B. The Olympic Games movement', 'C. British workers, sailors, and missionaries', 'D. Italian businessmen and tourists'], answer: 'C', explain: 'Đoạn E: "with British workers, sailors, and missionaries introducing the game throughout the world".' },
          { q: 'Football became popular among working-class people in Britain because:', options: ['A. It was promoted by trade unions', 'B. The government provided subsidies for working-class teams', 'C. It was cheap, easy, and fit their new weekend leisure time', 'D. The aristocracy lost interest in it'], answer: 'C', explain: 'Đoạn F: "relatively cheap, requiring minimal equipment, and providing entertainment".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
        items: [
          { q: 'The Roman ball game was called __________.', answer: 'harpastum', explain: 'Đoạn B: "Romans played a game called harpastum".' },
          { q: 'The Rugby Football Union was established in __________.', answer: '1871', explain: 'Đoạn D: "the Rugby Football Union, established in 1871".' },
          { q: 'FIFA was founded by representatives from __________ European countries.', answer: 'seven', explain: 'Đoạn E: "FIFA was founded in 1904 by representatives from seven European countries".' },
          { q: 'The first World Cup was held in __________.', answer: 'Uruguay', explain: 'Đoạn E: "The first World Cup, held in Uruguay in 1930".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 10 - TEST 4 ====================
  'cam10-t4': {
    title: 'Understanding Dreams',
    topic: 'Psychology · Sleep Science',
    difficulty: 'Medium',
    passages: [{
      label: 'Reading Passage 1',
      title: 'Understanding Why We Dream',
      content: `<p><span class="para-num">A</span> Humans dream every night, typically several times per night, in vivid sequences that can be powerfully emotional, completely bizarre, or both. The phenomenon is so universal that we rarely consider how strange it actually is. Our brains, while seemingly resting, generate elaborate hallucinations involving people we know, places we have been, and situations we have never encountered. These nightly visions have intrigued thinkers for thousands of years. From Aristotle to Freud to modern neuroscientists, attempts to understand dreams reveal as much about the changing nature of human inquiry as about dreams themselves.</p>
      
      <p><span class="para-num">B</span> The basic biology of dreaming has been understood since the 1950s, when researchers discovered REM (rapid eye movement) sleep. During REM sleep, which occupies about 20 percent of normal sleep, eye movements, brain activity, and physiological responses become similar to those of waking, while major muscles are paralysed to prevent us from acting out our dreams. Most vivid dreaming occurs during these REM periods, although less elaborate mental activity continues during other sleep stages. Adults typically have four to six REM cycles per night, with each lasting from a few minutes to nearly an hour.</p>
      
      <p><span class="para-num">C</span> Different theories about why we dream have dominated different historical periods. Sigmund Freud, writing at the beginning of the twentieth century, viewed dreams as expressions of unconscious desires that the dreamer\'s mind disguised through symbolic transformations. While this Freudian approach was enormously influential in psychology and culture, it has largely been abandoned by modern researchers. Subsequent theories have focused on the biological functions that dreaming might serve, rather than the symbolic content of specific dreams.</p>
      
      <p><span class="para-num">D</span> One influential modern theory, called the activation-synthesis hypothesis, proposed that dreams arise from random activity in brain regions during REM sleep. According to this view, dreams have no inherent meaning — they represent the brain\'s attempt to construct a coherent narrative from random patterns of neural firing. This approach treats dreams essentially as biological byproducts of necessary brain processes rather than as messages worth interpreting. While the activation-synthesis hypothesis has been refined since its original proposal in the 1970s, it remains influential in mainstream sleep research.</p>
      
      <p><span class="para-num">E</span> Other theories propose more functional roles for dreaming. The threat simulation theory suggests that dreams provide opportunities to practise responding to dangerous situations in a safe environment, helping prepare us for real threats. Memory consolidation theories propose that dreams reflect ongoing processes of integrating new information into long-term memory. The emotional regulation theory holds that dreams help us process and recover from difficult emotional experiences. None of these theories has achieved universal acceptance, but each captures features of dreaming that purely biological explanations may miss.</p>
      
      <p><span class="para-num">F</span> Recent research has revealed surprising features of dreaming. Although people often report no dreams from a night\'s sleep, virtually everyone dreams every night — the difference lies in whether the dreams are remembered. Lucid dreaming, in which the dreamer becomes aware of dreaming while still asleep, was once dismissed by scientists but has now been confirmed and studied in laboratory settings. Some people can deliberately induce lucid dreams through practice, and experiments using brain imaging confirm that lucid dreamers can consciously communicate with researchers through eye movements and breathing patterns while remaining in REM sleep.</p>
      
      <p><span class="para-num">G</span> The cultural significance of dreams varies enormously across societies. Many traditional cultures consider dreams sources of supernatural communication or spiritual insight, and elaborate dream interpretation traditions exist in many religions. Modern Western culture has tended to dismiss dreams as either meaningless or as expressions of unconscious psychology to be interpreted by experts. Whether dreams contain meaningful information or are merely biological noise remains genuinely uncertain, but research increasingly suggests that the relationship between dreams and waking thought is more complex than either tradition has supposed. The science of dreaming will likely continue producing surprises for many years to come.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Con người mơ mỗi đêm, thường vài lần mỗi đêm, trong các chuỗi sống động có thể cực kỳ cảm xúc, hoàn toàn kỳ quái, hoặc cả hai. Bộ não của chúng ta, dường như đang nghỉ ngơi, tạo ra các ảo giác chi tiết. Những tầm nhìn hàng đêm này đã hấp dẫn các nhà tư tưởng trong hàng nghìn năm.</p>
      
      <p><strong>Đoạn B:</strong> Sinh học cơ bản của giấc mơ đã được hiểu kể từ những năm 1950, khi các nhà nghiên cứu phát hiện ra giấc ngủ REM. Trong giấc ngủ REM, chiếm khoảng 20% giấc ngủ bình thường, các chuyển động mắt, hoạt động não, và phản ứng sinh lý trở nên giống như thức.</p>
      
      <p><strong>Đoạn C:</strong> Các lý thuyết khác nhau về lý do tại sao chúng ta mơ đã thống trị các giai đoạn lịch sử khác nhau. Sigmund Freud, viết vào đầu thế kỷ 20, xem các giấc mơ như là biểu hiện của những ham muốn vô thức. Cách tiếp cận Freudian này đã được các nhà nghiên cứu hiện đại phần lớn từ bỏ.</p>
      
      <p><strong>Đoạn D:</strong> Một lý thuyết hiện đại có ảnh hưởng, gọi là giả thuyết kích hoạt-tổng hợp, đề xuất rằng các giấc mơ phát sinh từ hoạt động ngẫu nhiên trong các vùng não trong giấc ngủ REM. Theo quan điểm này, các giấc mơ không có ý nghĩa vốn có.</p>
      
      <p><strong>Đoạn E:</strong> Các lý thuyết khác đề xuất các vai trò chức năng hơn cho việc mơ. Lý thuyết mô phỏng đe dọa cho thấy các giấc mơ cung cấp cơ hội để thực hành phản ứng với các tình huống nguy hiểm. Lý thuyết củng cố trí nhớ đề xuất rằng các giấc mơ phản ánh các quá trình tích hợp thông tin mới vào trí nhớ dài hạn.</p>
      
      <p><strong>Đoạn F:</strong> Nghiên cứu gần đây đã tiết lộ các đặc điểm đáng ngạc nhiên của giấc mơ. Mơ tỉnh, trong đó người mơ nhận thức được đang mơ trong khi vẫn ngủ, từng bị các nhà khoa học bác bỏ nhưng hiện đã được xác nhận. Một số người có thể cố ý gây ra giấc mơ tỉnh thông qua thực hành.</p>
      
      <p><strong>Đoạn G:</strong> Tầm quan trọng văn hóa của các giấc mơ thay đổi enormously qua các xã hội. Nhiều nền văn hóa truyền thống xem các giấc mơ là nguồn giao tiếp siêu nhiên hoặc cái nhìn tâm linh. Văn hóa phương Tây hiện đại đã có xu hướng bác bỏ các giấc mơ. Khoa học về giấc mơ có khả năng sẽ tiếp tục tạo ra những điều ngạc nhiên trong nhiều năm tới.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–5',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'During REM sleep, large muscles are typically paralysed.', answer: 'TRUE', explain: 'Đoạn B: "major muscles are paralysed to prevent us from acting out our dreams".' },
          { q: 'Freudian theories of dreaming dominate modern dream research.', answer: 'FALSE', explain: 'Đoạn C: "it has largely been abandoned by modern researchers".' },
          { q: 'The activation-synthesis hypothesis treats dreams as having important hidden meanings.', answer: 'FALSE', explain: 'Đoạn D: "dreams have no inherent meaning — they represent the brain\'s attempt to construct a coherent narrative".' },
          { q: 'All people dream every night, even if they don\'t remember their dreams.', answer: 'TRUE', explain: 'Đoạn F: "virtually everyone dreams every night — the difference lies in whether the dreams are remembered".' },
          { q: 'Lucid dreaming was first observed in a laboratory in the 1950s.', answer: 'NOT GIVEN', explain: 'Đoạn F nói mơ tỉnh đã được xác nhận trong phòng thí nghiệm nhưng không nêu năm cụ thể.' }
        ]
      },
      {
        group: 'Questions 6–9',
        type: 'mcq',
        instruction: 'Choose the correct letter, A, B, C or D.',
        items: [
          { q: 'According to the passage, REM sleep makes up about what proportion of normal sleep?', options: ['A. 10 percent', 'B. 20 percent', 'C. 40 percent', 'D. 60 percent'], answer: 'B', explain: 'Đoạn B: "occupies about 20 percent of normal sleep".' },
          { q: 'The threat simulation theory suggests dreams allow us to:', options: ['A. Predict dangerous future events', 'B. Practise responses to threats in a safe environment', 'C. Communicate with dangerous strangers', 'D. Avoid frightening situations entirely'], answer: 'B', explain: 'Đoạn E: "dreams provide opportunities to practise responding to dangerous situations in a safe environment".' },
          { q: 'In experiments with lucid dreamers, researchers found that they could:', options: ['A. Stop dreaming whenever they wanted', 'B. Wake up earlier than other sleepers', 'C. Consciously communicate through eye movements while in REM', 'D. Remember everything from their dreams'], answer: 'C', explain: 'Đoạn F: "lucid dreamers can consciously communicate with researchers through eye movements... while remaining in REM sleep".' },
          { q: 'The author concludes that the meaning of dreams:', options: ['A. Has been definitively explained by modern science', 'B. Will probably never be understood', 'C. Remains uncertain but more complex than either tradition supposed', 'D. Is purely cultural rather than biological'], answer: 'C', explain: 'Đoạn G: "remains genuinely uncertain, but research increasingly suggests that the relationship between dreams and waking thought is more complex".' }
        ]
      },
      {
        group: 'Questions 10–13',
        type: 'fill',
        instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
        items: [
          { q: 'Researchers discovered REM sleep in the __________.', answer: '1950s', explain: 'Đoạn B: "since the 1950s, when researchers discovered REM".' },
          { q: 'Freud believed dreams expressed unconscious __________ disguised through symbols.', answer: 'desires', explain: 'Đoạn C: "expressions of unconscious desires that the dreamer\'s mind disguised".' },
          { q: 'The activation-__________ hypothesis sees dreams as resulting from random brain activity.', answer: 'synthesis', explain: 'Đoạn D: "called the activation-synthesis hypothesis".' },
          { q: 'Memory __________ theories propose that dreams help integrate new information into long-term memory.', answer: 'consolidation', explain: 'Đoạn E: "Memory consolidation theories propose that dreams reflect ongoing processes".' }
        ]
      }
    ]
  }
};

// Number of full-content tests vs total framework
const FULL_TESTS = Object.keys(TESTS_DATA);
