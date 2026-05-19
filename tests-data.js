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
    passages: [{
      label: 'Reading Passage 1',
      title: 'The Story of Glass',
      content: `<p><span class="para-num">A</span> Glass is one of the most fascinating substances ever created by human hands. Its origins can be traced back over 4,000 years to ancient Mesopotamia and Egypt, where craftsmen first discovered that sand, when heated to extreme temperatures, transformed into a transparent material with extraordinary properties. However, the earliest natural form of glass — obsidian — had already been used by prehistoric peoples for over 100,000 years. Formed when volcanic lava cooled rapidly, obsidian was prized for its sharp edges and was crafted into <span class="vocab" data-word="implements" data-def="công cụ, dụng cụ">implements</span> for hunting and cutting.</p>
      
      <p><span class="para-num">B</span> The deliberate manufacture of glass began with small decorative objects. Early Egyptian glassmakers produced beads and amulets by wrapping molten glass around clay cores, which were later removed to leave hollow vessels. This labor-intensive method limited production to elite households and religious purposes. It was not until the first century BCE that a revolutionary innovation transformed the craft: the invention of glassblowing in the Syro-Palestinian region. By inserting a hollow iron tube into molten glass and blowing through it, artisans could produce vessels far more quickly and in a greater variety of shapes than ever before.</p>
      
      <p><span class="para-num">C</span> The Romans <span class="vocab" data-word="embraced" data-def="đón nhận, áp dụng nhiệt tình">embraced</span> glassblowing with remarkable enthusiasm, and within decades, glass production spread across the empire. Roman glass became so common that even modest households possessed drinking cups, bottles, and window panes — items that had previously been luxuries. Archaeological evidence suggests that by the second century CE, glass factories operated from Britain to the Middle East, producing standardized products for trade. Roman engineers also pioneered the use of glass in architecture, installing windows in public baths and wealthy villas, though these early windows were typically small and irregular.</p>
      
      <p><span class="para-num">D</span> After the fall of the Roman Empire, glassmaking knowledge was preserved primarily in the Byzantine Empire and the Islamic world. Venetian craftsmen, who learned from Byzantine sources, eventually established a glass industry on the island of Murano in 1291 — a deliberate relocation designed to prevent fires in Venice itself and to protect trade secrets. For centuries, Murano glass dominated European markets, and revealing the techniques was punishable by death. Despite such measures, knowledge gradually <span class="vocab" data-word="leaked" data-def="rò rỉ, lộ ra">leaked</span> to other European centers, particularly Bohemia and England.</p>
      
      <p><span class="para-num">E</span> In Britain, the modern glass industry only truly emerged after the repeal of the Excise Act in 1845. From 1745 onwards, heavy taxes had been imposed on the weight of glass produced, severely restricting innovation and forcing manufacturers to favor thin, lightweight designs. Once these taxes were lifted, British glassmakers rapidly developed new techniques, and the Crystal Palace, built for the Great Exhibition of 1851, became a stunning symbol of glass's architectural potential, using nearly 300,000 panes.</p>
      
      <p><span class="para-num">F</span> The twentieth century brought perhaps the most significant innovation since glassblowing: the float glass process, invented by Sir Alastair Pilkington in 1952. In this method, molten glass is poured onto a bath of molten tin, where it spreads out and forms a perfectly flat surface as it cools. This eliminated the need for grinding and polishing, dramatically reducing costs while improving quality. Today, the float process accounts for approximately 90 percent of all flat glass produced globally, and the technique has remained essentially unchanged for over seventy years.</p>
      
      <p><span class="para-num">G</span> Contemporary glass technology has expanded far beyond traditional applications. Fiber optics, developed in the 1970s, revolutionized telecommunications by transmitting information through hair-thin glass strands at the speed of light. Specialized glasses now serve in fields ranging from medicine — where bioactive glasses can stimulate bone regeneration — to space exploration, where heat-resistant glass protects spacecraft during re-entry. Researchers are even developing "smart" glass that can darken automatically in response to sunlight or transmit data wirelessly. What began as a curiosity in ancient furnaces has become one of the most <span class="vocab" data-word="versatile" data-def="đa năng, linh hoạt">versatile</span> materials of the modern age.</p>`,
      
      vi: `<p><strong>Đoạn A:</strong> Thủy tinh là một trong những chất liệu hấp dẫn nhất từng được tạo ra bởi bàn tay con người. Nguồn gốc của nó có thể truy ngược lại hơn 4.000 năm trước ở vùng Lưỡng Hà và Ai Cập cổ đại, nơi các nghệ nhân lần đầu tiên phát hiện ra rằng cát, khi được nung ở nhiệt độ cực cao, sẽ biến đổi thành một vật liệu trong suốt với những đặc tính phi thường. Tuy nhiên, dạng thủy tinh tự nhiên sớm nhất — đá obsidian — đã được người tiền sử sử dụng hơn 100.000 năm trước.</p>
      
      <p><strong>Đoạn B:</strong> Việc sản xuất thủy tinh có chủ đích bắt đầu với các vật trang trí nhỏ. Các thợ thủy tinh Ai Cập đầu tiên đã sản xuất hạt cườm và bùa hộ mệnh bằng cách quấn thủy tinh nóng chảy quanh lõi đất sét. Phải đến thế kỷ thứ nhất TCN, một phát minh mang tính cách mạng đã biến đổi nghề thủ công này: phát minh ra kỹ thuật thổi thủy tinh.</p>
      
      <p><strong>Đoạn C:</strong> Người La Mã đã đón nhận kỹ thuật thổi thủy tinh với sự nhiệt tình đáng kể. Bằng chứng khảo cổ học cho thấy đến thế kỷ thứ hai SCN, các nhà máy thủy tinh đã hoạt động từ Anh đến Trung Đông.</p>
      
      <p><strong>Đoạn D:</strong> Sau sự sụp đổ của Đế chế La Mã, kiến thức làm thủy tinh được bảo tồn chủ yếu ở Đế chế Byzantine và thế giới Hồi giáo. Các nghệ nhân Venice đã thành lập ngành công nghiệp thủy tinh trên đảo Murano vào năm 1291.</p>
      
      <p><strong>Đoạn E:</strong> Ở Anh, ngành công nghiệp thủy tinh hiện đại chỉ thực sự xuất hiện sau khi Đạo luật Tiêu thụ Đặc biệt được bãi bỏ năm 1845. Cung điện Pha lê (Crystal Palace), xây cho Triển lãm Lớn năm 1851, đã sử dụng gần 300.000 tấm kính.</p>
      
      <p><strong>Đoạn F:</strong> Thế kỷ 20 mang đến phát minh quan trọng nhất kể từ kỹ thuật thổi thủy tinh: quy trình thủy tinh nổi (float glass), được Sir Alastair Pilkington phát minh năm 1952. Quy trình này hiện chiếm khoảng 90% tổng lượng thủy tinh phẳng sản xuất toàn cầu.</p>
      
      <p><strong>Đoạn G:</strong> Công nghệ thủy tinh hiện đại đã mở rộng vượt xa các ứng dụng truyền thống. Sợi quang, phát triển vào những năm 1970, đã cách mạng hóa ngành viễn thông. Các loại thủy tinh chuyên dụng hiện phục vụ trong y học và thám hiểm không gian.</p>`
    }],
    
    questions: [
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
          { q: 'According to the passage, the Excise Act of 1745:', options: ['A. Encouraged innovation in British glassmaking', 'B. Required glass to be heavy and ornate', 'C. Restricted the development of the glass industry', 'D. Was introduced to compete with Venice'], answer: 'C', explain: 'Đoạn E: "severely restricting innovation" - hạn chế đổi mới nghiêm trọng.' },
          { q: 'The Crystal Palace was significant because it:', options: ['A. Was built before the Excise Act was repealed', 'B. Demonstrated the architectural potential of glass', 'C. Used the float glass process', 'D. Was the first building made entirely of glass'], answer: 'B', explain: 'Đoạn E: "stunning symbol of glass\'s architectural potential" - biểu tượng tiềm năng kiến trúc.' },
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
    ]
  },

  // ==================== CAMBRIDGE 19 - TEST 2 ====================
  'cam19-t2': {
    title: 'The Octopus Mind',
    topic: 'Biology · Animal Intelligence',
    difficulty: 'Hard',
    passages: [{
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
      
      <p><strong>Đoạn C:</strong> Trí tuệ phân tán này tạo nên khả năng đáng kinh ngạc. Bạch tuộc có thể đồng thời mở lọ bằng một cánh tay, săn mồi bằng cánh tay khác, và khám phá môi trường bằng 6 cánh tay còn lại.</p>
      
      <p><strong>Đoạn D:</strong> Bạch tuộc thể hiện khả năng giải quyết vấn đề ngang ngửa nhiều loài có xương sống. Trong phòng thí nghiệm, chúng học cách đi qua mê cung, mở chai thuốc có khóa an toàn, thậm chí phân biệt giữa các nhà nghiên cứu khác nhau. Otto - một con bạch tuộc nổi tiếng - liên tục dập tắt đèn bằng cách phun nước vào chúng sau giờ đóng cửa.</p>
      
      <p><strong>Đoạn E:</strong> Khả năng nhận thức đáng kinh ngạc nhất của bạch tuộc là ngụy trang. Dù bị mù màu, bạch tuộc có thể bắt chước màu sắc, hoa văn, kết cấu môi trường xung quanh với độ chính xác phi thường thông qua các tế bào chromatophore.</p>
      
      <p><strong>Đoạn F:</strong> Tuy nhiên, bạch tuộc sống cực kỳ ngắn — chỉ 1-2 năm. Điều này rất lạ vì trí tuệ ở động vật có xương sống thường tương quan với tuổi thọ dài. Bạch tuộc sống đơn độc, không có sự dạy bảo của cha mẹ.</p>
      
      <p><strong>Đoạn G:</strong> Một số nhà nghiên cứu cho rằng trí tuệ bạch tuộc tiến hóa chủ yếu để săn mồi và tránh kẻ thù. Triết gia Peter Godfrey-Smith nói: gặp một con bạch tuộc có thể là gần nhất chúng ta có thể đến với việc gặp một sinh vật ngoài hành tinh thông minh.</p>`
    }],
    
    questions: [
      {
        group: 'Questions 1–6',
        type: 'tfng',
        instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
        items: [
          { q: 'Octopuses and humans share a relatively recent common ancestor.', answer: 'FALSE', explain: 'Đoạn A: "separated from humans by over 600 million years of evolution" - cách 600 triệu năm.' },
          { q: 'Most of an octopus\'s neurons are located in its central brain.', answer: 'FALSE', explain: 'Đoạn B: "two-thirds of its 500 million neurons throughout its eight arms" - 2/3 ở các cánh tay.' },
          { q: 'Severed octopus arms can still respond to their environment.', answer: 'TRUE', explain: 'Đoạn B: "severed octopus arms continuing to react to stimuli for hours".' },
          { q: 'Dr. Jennifer Mather discovered the distributed nature of octopus intelligence.', answer: 'NOT GIVEN', explain: 'Đoạn C chỉ nói bà là nhà nghiên cứu hàng đầu, không nói bà phát hiện ra điều này.' },
          { q: 'Octopuses can recognize individual humans.', answer: 'TRUE', explain: 'Đoạn D: "distinguish between individual human caretakers".' },
          { q: 'Otto the octopus was eventually moved to a different aquarium.', answer: 'NOT GIVEN', explain: 'Đoạn D chỉ nói nhân viên ngắt điện, không nói chuyển Otto đi đâu.' }
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
          { q: 'Octopus skin contains specialized cells called __________ that control color change.', answer: 'chromatophores', explain: 'Đoạn E: "millions of specialized skin cells called chromatophores".' },
          { q: 'Unlike many social animals, octopuses are largely __________.', answer: 'solitary', explain: 'Đoạn F: "Octopuses, by contrast, are largely solitary".' },
          { q: 'Researchers suggest octopus intelligence evolved primarily for hunting and __________.', answer: 'predator avoidance', explain: 'Đoạn G: "evolved primarily for hunting and predator avoidance".' }
        ]
      }
    ]
  },

  // ==================== CAMBRIDGE 18 - TEST 1 ====================
  'cam18-t1': {
    title: 'The Decline of Bees',
    topic: 'Environment · Biology',
    difficulty: 'Medium',
    passages: [{
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
      
      <p><strong>Đoạn B:</strong> Hiện tượng Rối loạn Sụp đổ Đàn ong (CCD) thu hút sự chú ý từ năm 2006, khi người nuôi ong Mỹ báo cáo mất 30-90% tổ ong trong một mùa đông. Đặc điểm kỳ lạ: ong thợ biến mất, để lại ong chúa và thức ăn dồi dào.</p>
      
      <p><strong>Đoạn C:</strong> Không có nguyên nhân duy nhất nào giải thích khủng hoảng này. Trong số các yếu tố là neonicotinoids - thuốc trừ sâu được hấp thụ vào mô cây, kể cả phấn hoa và mật. Ngay cả ở liều thấp, chúng cũng làm suy giảm khả năng định hướng, học hỏi và sinh sản của ong.</p>
      
      <p><strong>Đoạn D:</strong> Yếu tố thứ hai là loài ve ký sinh Varroa destructor. Loài này hút mỡ dự trữ của ong, làm yếu cá thể và truyền virus tàn phá. Người nuôi ong mô tả Varroa là sâu bệnh tổn hại nhất trong ngành nuôi ong hiện đại.</p>
      
      <p><strong>Đoạn E:</strong> Mất môi trường sống cộng hưởng các mối đe dọa. Nông nghiệp hiện đại với canh tác độc canh khiến ong chết đói phần lớn thời gian năm. Ở Anh, 97% đồng cỏ giàu hoa đã biến mất kể từ những năm 1930.</p>
      
      <p><strong>Đoạn F:</strong> Biến đổi khí hậu thêm lớp phức tạp. Sự đồng bộ giữa ong và hoa có thể bị phá vỡ - một số hoa nở sớm hơn ong xuất hiện. Hiện tượng thời tiết cực đoan cũng tổn hại trực tiếp đến quần thể ong.</p>
      
      <p><strong>Đoạn G:</strong> Giải pháp đang được theo đuổi trên nhiều mặt. EU đã cấm 3 loại neonicotinoid chính ngoài trời năm 2018. Các thành phố như Oslo tạo "xa lộ ong". Người làm vườn cá nhân cũng có thể đóng góp.</p>`
    }],
    
    questions: [
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
  }
};

// Number of full-content tests vs total framework
const FULL_TESTS = Object.keys(TESTS_DATA);
