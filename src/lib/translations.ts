export type Lang = 'th' | 'en'

export const translations = {
  th: {
    nav: {
      home: 'หน้าแรก',
      environment: 'สิ่งแวดล้อม',
      crm: 'CRM ลูกค้า',
      products: 'สินค้า',
      contact: 'ติดต่อเรา',
      cta: 'เริ่มต้นเปลี่ยนผ่าน',
    },
    hero: {
      eyebrow: '100% พลังงานสะอาด · ปล่อยคาร์บอนเป็นศูนย์ · ตั้งแต่ปี 2025',
      lines: [
        [{ text: 'Terravolteco' }],
        [{ text: 'พลังงานที่' }, { text: 'เป็นมิตรกับสิ่งแวดล้อม', em: true }],
        [{ text: 'เพื่ออนาคตที่' }, { text: 'ยั่งยืนกว่า', em: true }],
      ],
      paragraph:
        'เทอร์ร่าโวลท์อิโค่ คือผู้นำด้านการพัฒนาและประยุกต์ใช้เทคโนโลยีพลังงานสะอาดแห่งอนาคต ผสานโซลาร์เซลล์ประสิทธิภาพสูง ไมโครกริดอัจฉริยะด้วย AI และระบบกักเก็บพลังงานขั้นสูง เพื่อขับเคลื่อนการเปลี่ยนแปลงด้านพลังงานทั่วโลก ด้วยโซลูชันที่เป็นมิตรต่อสิ่งแวดล้อมและยั่งยืนในระยะยาว',
      ctaLearnMore: 'เรียนรู้เพิ่มเติม',
      ctaMember: 'พื้นที่สมาชิก',
      pulseLabel: 'พลังงานสะสมทั่วเครือข่าย · วันนี้',
    },
    quickLinks: [
      {
        href: '/environment',
        tag: '01',
        title: 'สิ่งแวดล้อม',
        desc: 'วิกฤตที่รอไม่ได้ และพันธกิจด้านความยั่งยืนของเรา เพื่อพลังงานที่เป็นมิตรกับสิ่งแวดล้อม',
      },
      {
        href: '/crm',
        tag: '02',
        title: 'CRM ลูกค้า',
        desc: 'ตรวจสอบสถานะเครื่องและติดตามประสิทธิภาพการทำงานของระบบพลังงานแบบเรียลไทม์',
      },
      {
        href: '/products',
        tag: '03',
        title: 'สินค้า',
        desc: 'นวัตกรรมระบบไฮบริดพลังงานของเรา พร้อมคู่มือผลิตภัณฑ์ฉบับเต็ม',
      },
      {
        href: '/contact',
        tag: '04',
        title: 'ติดต่อเรา',
        desc: 'พูดคุยกับทีมงานเพื่อออกแบบโซลูชันพลังงานสะอาดที่ใช่สำหรับคุณ',
      },
    ],
    quickLinksMore: 'ดูเพิ่มเติม →',
    environment: {
      eyebrow: 'Why Clean Energy?',
      title: [{ text: 'วิกฤตที่รอไม่ได้' }, { text: 'ทางออกคือวันนี้', em: true }],
      intro:
        'อุณหภูมิโลกที่สูงขึ้น มลพิษทางอากาศ และทรัพยากรที่ลดลง คือสัญญาณเตือนให้เราต้องหันมาใช้พลังงานที่เป็นมิตรกับสิ่งแวดล้อมและยั่งยืน เพื่อกอบกู้สมดุลของธรรมชาติกลับคืนมา',
      crisisCards: [
        {
          tag: 'CRITICAL',
          title: 'อุณหภูมิโลกสูงขึ้น 1.5°C ต่อปี',
          desc: 'ภาวะโลกร้อนเร่งตัวขึ้นต่อเนื่อง ส่งผลกระทบต่อระบบนิเวศทั่วโลก',
        },
        {
          tag: 'Unhealthy AQI · 185',
          title: 'มลพิษทางอากาศในเมืองใหญ่',
          desc: 'คุณภาพอากาศในกรุงเทพฯ และเมืองใหญ่หลายแห่งอยู่ในระดับที่ส่งผลเสียต่อสุขภาพ',
        },
        {
          tag: 'Warning',
          title: 'ภัยแล้งที่รุนแรงขึ้นทุกปี',
          desc: 'พลังงานฟอสซิลกำลังจะหมดไป พร้อมสร้างมลพิษมหาศาลระหว่างทาง',
        },
      ],
      sustainEyebrow: 'Sustainability',
      sustainTitle: 'ความเป็นผู้นำด้านความยั่งยืน',
      sustainParagraph:
        'เราไม่เพียงแค่ผลิตพลังงานสะอาด แต่ยังดำเนินธุรกิจด้วยความรับผิดชอบต่อสังคมและสิ่งแวดล้อม มุ่งมั่นพัฒนาเทคโนโลยีสะอาดและยั่งยืน เพื่อตอบโจทย์ความต้องการพลังงานของทุกภาคส่วน ตั้งแต่ครัวเรือนจนถึงอุตสาหกรรม ด้วยโซลูชันที่ปลอดภัย มีประสิทธิภาพ และเป็นมิตรกับสิ่งแวดล้อม',
      pillars: ['Clean', 'Safe', 'Efficient'],
      innovationEyebrow: 'Innovation',
      innovationTitle: 'เทคโนโลยีหลักที่เป็นนวัตกรรม',
      tech: [
        {
          title: 'ระบบกักเก็บพลังงานขั้นสูง',
          desc: 'ใช้แบตเตอรี่ชนิด Solid-State และ Flow Battery รุ่นใหม่ ที่มีความหนาแน่นของพลังงานสูงกว่าและปลอดภัยกว่าระบบทั่วไป',
        },
        {
          title: 'ไมโครกริดอัจฉริยะด้วย AI',
          desc: 'ระบบบริหารจัดการพลังงานในพื้นที่ขนาดเล็กแบบกระจายศูนย์ ใช้ปัญญาประดิษฐ์ (AI) พยากรณ์และปรับสมดุลโหลดแบบเรียลไทม์',
        },
        {
          title: 'บริการให้คำปรึกษาด้านพลังงาน',
          desc: 'ให้คำปรึกษาด้านการเปลี่ยนผ่านพลังงาน (Energy Transition) และวางแผนลดการปล่อยคาร์บอน (Decarbonization Roadmap)',
        },
      ],
    },
    crm: {
      eyebrow: 'Customer CRM',
      title: [{ text: 'เพราะไฟฟ้าคือ' }, { text: 'หัวใจของธุรกิจ', em: true }],
      intro:
        'ตรวจเช็กเครื่องกำเนิดไฟฟ้าของคุณวันนี้ ก่อนที่ความเสียหายจะมาเยือน ระบบ CRM ของ Terravolteco ช่วยให้คุณตรวจสอบสถานะเครื่องและติดตามประสิทธิภาพการทำงานได้ตลอด 24 ชั่วโมง',
      links: [
        {
          title: 'สถานะเครื่อง CRM',
          desc: 'ตรวจสอบสถานะเครื่องกำเนิดไฟฟ้าและติดตามประสิทธิภาพการทำงานแบบเรียลไทม์',
          href: 'https://www.terravolteco.site/',
          cta: 'เข้าสู่ระบบตรวจสอบสถานะ',
        },
        {
          title: 'บัญชีของฉัน',
          desc: 'จัดการข้อมูลบัญชี คำสั่งซื้อ และประวัติการใช้งานของคุณ',
          href: 'https://dealer-customer.vercel.app/',
          cta: 'เข้าสู่บัญชีของฉัน',
        },
        {
          title: 'พื้นที่สมาชิก',
          desc: 'เข้าสู่ระบบสมาชิกเพื่อดูสิทธิประโยชน์และสั่งซื้อผลิตภัณฑ์',
          href: 'https://terravolt-eco.click/membership-login/',
          cta: 'เข้าสู่ระบบสมาชิก',
        },
        {
          title: 'ประเมินคาร์บอนเครดิต',
          desc: 'ซอฟต์แวร์คำนวณและประเมินคาร์บอนเครดิตด้วยเทคโนโลยีบล็อกเชน',
          href: 'https://tvet-mining.vercel.app/',
          cta: 'เปิดเครื่องมือประเมิน',
        },
        {
          title: 'ระบบสะสมแต้มเพื่อแลกรางวัล',
          desc: 'สมนาคุณพิเศษสำหรับลูกค้าทุกท่านที่ใช้ผลิตภัณฑ์ Terravolteco',
          href: 'https://tve-ecosystem-tech.vercel.app/',
          cta: 'ดูระบบสะสมแต้ม',
        },
        {
          title: 'ฝ่ายซ่อมบำรุง',
          desc: 'แจ้งซ่อมและติดตามงานบำรุงรักษาเครื่องกำเนิดไฟฟ้า',
          href: 'https://astoenergy.site/',
          cta: 'ติดต่อฝ่ายซ่อมบำรุง',
        },
      ],
      earthEyebrow: 'ส่วนร่วมในการรักษ์โลก',
      earthTitle: 'บล็อกเชนและการประเมินคาร์บอนเครดิต',
      earthParagraph:
        'การผสานรวมระหว่างเทคโนโลยีบล็อกเชนและการประเมินคาร์บอนเครดิต คือโครงสร้างพื้นฐานใหม่ที่จำเป็นสำหรับตลาดคาร์บอนยุคถัดไป ความโปร่งใสที่ตรวจสอบได้ด้วยโค้ดคอมพิวเตอร์และข้อมูลดาวเทียม ช่วยเปลี่ยนผ่านจากความเคลือบแคลงสงสัยไปสู่การลงมือทำเพื่อสิ่งแวดล้อมที่จับต้องได้จริง',
      earthPoints: [
        {
          head: 'เปิดโอกาสให้รายย่อย —',
          body: 'เกษตรกรที่ปลูกป่าชุมชนขนาดเล็กสามารถรวมกลุ่มออกคาร์บอนเครดิตขายได้ง่ายขึ้น',
        },
        {
          head: 'แลกโบนัสตอบแทนคุณภาพอากาศได้ 24 ชม —',
          body: 'ระบบตรวจวัดคุณภาพอากาศแบบเรียลไทม์ เปลี่ยนอากาศดีให้เป็นคะแนนสะสม แลกโบนัสตอบแทนได้ตลอดเวลา ไม่มีวันหยุด',
        },
        {
          head: 'ความเชื่อมั่นจากนักลงทุน —',
          body: 'ตรวจสอบเนื้อแท้ของคาร์บอนเครดิตได้อย่างสบายใจ ตอบโจทย์เกณฑ์ ESG อย่างแท้จริง',
        },
      ],
    },
    products: {
      eyebrow: 'Our Innovations',
      title: [{ text: 'ผลิตภัณฑ์' }, { text: 'ของเรา', em: true }],
      intro:
        'นวัตกรรมพลังงานสะอาดที่ผสานประสิทธิภาพและความยั่งยืน เพื่อขับเคลื่อนอนาคตที่ดีกว่าสำหรับทุกคน',
      flagshipTag: 'Flagship Model · Hybrid System · Clean Energy',
      flagshipTitle: 'Ion Hybrid System Reverse',
      flagshipDesc:
        'นวัตกรรมพลังงานแห่งอนาคต ผสานเทคโนโลยีการจัดเก็บและจ่ายพลังงานที่มีประสิทธิภาพสูงสุด ควบคุมด้วยดาวเทียม สามารถรีเวิร์สไฟฟ้าในระบบด้วยตัวเอง รวมหลายแหล่งพลังงานเข้าไว้ด้วยกัน เช่น ไฟหลัก แบตเตอรี่ แผงโซลาร์ หรือเจนเนอเรเตอร์',
      manualCta: 'คู่มือผลิตภัณฑ์',
      productList: [
        {
          name: 'Ion Generator R-2384',
          desc: 'ระบบการจัดเก็บแบบไฮบริด (Energy Storage) เป็นองค์ประกอบสำคัญของระบบพลังงานยุคใหม่ ช่วยรักษาเสถียรภาพของโครงข่ายไฟฟ้า รองรับความไม่แน่นอนของพลังงานหมุนเวียน ทำให้จ่ายไฟได้ต่อเนื่อง',
        },
        {
          name: 'Energy Storage-2322',
          desc: 'ระบบจัดเก็บพลังงานแบบไฮบริด (HESS) ผสานเทคโนโลยีมากกว่าหนึ่งชนิดเพื่อลดข้อจำกัดของแต่ละระบบ เช่น การจับคู่ตัวเก็บประจุที่ตอบสนองเร็วเข้ากับแบตเตอรี่ความจุสูง',
        },
        {
          name: 'Hybrid System R-2381X',
          desc: 'การรวมแบตเตอรี่ลิเธียมไอออนที่ตอบสนองเร็ว เข้ากับอัลตร้าแคปาซิเตอร์หรือระบบฟลายวีล เพื่อประสิทธิภาพการชาร์จ-คายประจุที่เหนือกว่าระบบทั่วไป',
        },
        {
          name: 'Ion Hybrid System-2125',
          desc: 'จุดเด่น: ประสิทธิภาพสูงขึ้น รับภาระโหลดฉับพลันได้ดี ยืดอายุการใช้งานแบตเตอรี่ รักษาเสถียรภาพแรงดันและความถี่ไฟฟ้า ลดต้นทุนการบำรุงรักษาในระยะยาว',
        },
      ],
      pricingNote:
        'สินค้าจะมีราคาตามขนาดประสิทธิภาพการจัดการไฟฟ้า เฉลี่ยขั้นต่ำ 20,000 บาท/Kw (ไม่รวมค่าจัดส่ง)',
      mechanismEyebrow: 'Mechanism',
      mechanismTitle: 'ระบบกลไกการทำงาน',
      mechanismIntro:
        'กระบวนการเปลี่ยนผ่านพลังงานจากธรรมชาติสู่พลังงานกลที่มีประสิทธิภาพสูง ด้วยเทคโนโลยีที่เป็นมิตรต่อสิ่งแวดล้อม ผ่านวงจรการทำงาน 6 ขั้นตอน',
      cycle: [
        { step: '1', title: 'แผ่นเหนี่ยวนำน้ำอากาศ', out: 'น้ำ (H₂O)', desc: 'ดึงความชื้นจากอากาศมากลั่นตัวเป็นน้ำบริสุทธิ์เพื่อใช้ในกระบวนการถัดไป' },
        { step: '2', title: 'วัสดุแยกไฮโดรเจน', out: 'ก๊าซไฮโดรเจน (H₂)', desc: 'แยกโมเลกุลน้ำด้วยกระบวนการทางไฟฟ้าหรือเคมีขั้นสูง' },
        { step: '3', title: 'เซลล์เชื้อเพลิง (Fuel Cell)', out: 'ไฟฟ้ากระแสตรง (DC)', desc: 'ใช้แผ่น Platinum/Nafion ในการแปลงพลังงานเคมีเป็นพลังงานไฟฟ้า' },
        { step: '4', title: 'ตัวเก็บประจุ (Capacitor)', out: 'พลังงานพร้อมใช้', desc: 'สำรองพลังงานและปรับแรงดันไฟฟ้าให้คงที่พร้อมสำหรับการจ่ายไฟ' },
        { step: '5', title: 'มอเตอร์กำลังไฟ', out: 'แรงบิด / แรงหมุน', desc: 'เปลี่ยนพลังงานไฟฟ้าเป็นพลังงานกลที่มีประสิทธิภาพสูง' },
        { step: '6', title: 'เครื่องจักร / เครื่องยนต์', out: 'Output System', desc: 'นำพลังงานกลไปใช้ขับเคลื่อนระบบหรือยานยนต์อย่างเต็มประสิทธิภาพ' },
      ],
    },
    contact: {
      eyebrow: 'Get in Touch',
      title: [{ text: 'ติดต่อ' }, { text: 'เรา', em: true }],
      intro: 'พูดคุยกับทีมงาน Terravolteco เพื่อออกแบบโซลูชันพลังงานที่เป็นมิตรกับสิ่งแวดล้อมสำหรับคุณ',
      info: [
        { label: 'อีเมล', value: 'varunya@terravolteco.com', href: 'mailto:varunya@terravolteco.com' },
        { label: 'เบอร์โทรศัพท์', value: '092-273-2376', href: 'tel:0922732376' },
        { label: 'Line Official', value: 'สอบถามข้อมูลเพิ่มเติมผ่านไลน์', href: 'https://lin.ee/nzYBrcA' },
        {
          label: 'ที่อยู่บริษัท',
          value: '25 อาคารอัลม่าลิงค์ ชั้น 17 ห้องเลขที่ 575 ซอยชิดลม ถนนเพลินจิตร แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330',
        },
      ],
      form: {
        title: 'ส่งข้อความถึงเรา',
        subtitle: 'กรอกข้อมูลด้านล่างเพื่อติดต่อสอบถามทีมงาน',
        name: 'ชื่อ-นามสกุล',
        email: 'อีเมล',
        subject: 'หัวข้อ',
        message: 'ข้อความ',
        submit: 'ส่งข้อความ',
        thanksTitle: 'ขอบคุณที่ติดต่อเรา',
        thanksBody: 'ทีมงาน Terravolteco ได้รับข้อความของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด',
        again: 'ส่งข้อความอีกครั้ง',
      },
    },
    footer: {
      blurb:
        'พลังงานสะอาด เพื่ออนาคตที่ดีกว่า — ผู้นำด้านการพัฒนาและประยุกต์ใช้เทคโนโลยีพลังงานที่เป็นมิตรกับสิ่งแวดล้อม ด้วยโซลูชันไมโครกริดอัจฉริยะและระบบกักเก็บพลังงานขั้นสูง',
      menu: 'เมนู',
      contactHead: 'ติดต่อ',
      membershipHead: 'ระบบสมาชิก',
      member: 'พื้นที่สมาชิก',
      myAccount: 'บัญชีของฉัน',
      copyright:
        '© 2026 Terravolteco | บริษัท เทอร์ราโวลท์อีโค จำกัด — สงวนลิขสิทธิ์ · 25 อาคารอัลม่าลิงค์ ชั้น 17 ซอยชิดลม ถนนเพลินจิตร แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330',
    },
  },

  en: {
    nav: {
      home: 'Home',
      environment: 'Environment',
      crm: 'Customer CRM',
      products: 'Products',
      contact: 'Contact',
      cta: 'Start the Transition',
    },
    hero: {
      eyebrow: '100% Clean Energy · Zero Carbon Emissions · Since 2025',
      lines: [
        [{ text: 'Terravolteco' }],
        [{ text: 'Energy that is' }, { text: 'kind to the planet', em: true }],
        [{ text: 'for a' }, { text: 'more sustainable future', em: true }],
      ],
      paragraph:
        'Terravolteco is a leader in developing and applying next-generation clean energy technology. We combine high-efficiency solar, AI-driven smart microgrids, and advanced energy storage to drive the global energy transition with solutions that are environmentally friendly, highly efficient, and built for the long term.',
      ctaLearnMore: 'Learn More',
      ctaMember: 'Member Area',
      pulseLabel: 'Energy generated network-wide · Today',
    },
    quickLinks: [
      {
        href: '/environment',
        tag: '01',
        title: 'Environment',
        desc: 'The crisis that cannot wait, and our sustainability mission for environmentally friendly energy.',
      },
      {
        href: '/crm',
        tag: '02',
        title: 'Customer CRM',
        desc: 'Check your unit status and monitor system performance in real time.',
      },
      {
        href: '/products',
        tag: '03',
        title: 'Products',
        desc: 'Our hybrid energy system innovations, with a full product manual.',
      },
      {
        href: '/contact',
        tag: '04',
        title: 'Contact',
        desc: 'Talk to our team to design the right clean energy solution for you.',
      },
    ],
    quickLinksMore: 'Learn more →',
    environment: {
      eyebrow: 'Why Clean Energy?',
      title: [{ text: 'A crisis that cannot wait.' }, { text: 'The solution starts today.', em: true }],
      intro:
        'Rising global temperatures, air pollution, and shrinking resources are warning signs that we must turn to sustainable, environmentally friendly energy to restore the balance of nature.',
      crisisCards: [
        {
          tag: 'CRITICAL',
          title: 'Global temperature rising 1.5°C per year',
          desc: 'Global warming continues to accelerate, impacting ecosystems worldwide.',
        },
        {
          tag: 'Unhealthy AQI · 185',
          title: 'Air pollution in major cities',
          desc: 'Air quality in Bangkok and other major cities has reached levels harmful to health.',
        },
        {
          tag: 'Warning',
          title: 'Increasingly severe droughts',
          desc: 'Fossil fuels are running out, while generating enormous pollution along the way.',
        },
      ],
      sustainEyebrow: 'Sustainability',
      sustainTitle: 'Leadership in Sustainability',
      sustainParagraph:
        'We do not just produce clean energy — we run our business responsibly toward society and the environment. We are committed to developing clean, sustainable technology to meet energy needs across every sector, from households to industry, with solutions that are safe, efficient, and environmentally friendly.',
      pillars: ['Clean', 'Safe', 'Efficient'],
      innovationEyebrow: 'Innovation',
      innovationTitle: 'Core Innovative Technologies',
      tech: [
        {
          title: 'Advanced Energy Storage',
          desc: 'Next-generation Solid-State and Flow Battery technology with higher energy density and greater safety than conventional systems.',
        },
        {
          title: 'AI-Powered Smart Microgrids',
          desc: 'A decentralized energy management system for small areas, using AI to forecast demand and balance load in real time.',
        },
        {
          title: 'Energy Advisory Services',
          desc: 'Consulting on Energy Transition and Decarbonization Roadmap planning.',
        },
      ],
    },
    crm: {
      eyebrow: 'Customer CRM',
      title: [{ text: 'Because electricity is the' }, { text: 'heartbeat of your business', em: true }],
      intro:
        'Check your generator today, before damage arrives. Terravolteco\u2019s CRM lets you monitor unit status and track performance around the clock.',
      links: [
        {
          title: 'Unit Status CRM',
          desc: 'Check your generator status and monitor performance in real time.',
          href: 'https://www.terravolteco.site/',
          cta: 'Open Status Dashboard',
        },
        {
          title: 'My Account',
          desc: 'Manage your account details, orders, and usage history.',
          href: 'https://dealer-customer.vercel.app/',
          cta: 'Go to My Account',
        },
        {
          title: 'Member Area',
          desc: 'Sign in to your membership to view benefits and order products.',
          href: 'https://terravolt-eco.click/membership-login/',
          cta: 'Sign In to Membership',
        },
        {
          title: 'Carbon Credit Assessment',
          desc: 'Blockchain-powered software for calculating and assessing carbon credits.',
          href: 'https://tvet-mining.vercel.app/',
          cta: 'Open Assessment Tool',
        },
        {
          title: 'Points & Rewards Program',
          desc: 'Exclusive rewards for every customer using Terravolteco products.',
          href: 'https://tve-ecosystem-tech.vercel.app/',
          cta: 'View Rewards Program',
        },
        {
          title: 'Maintenance Department',
          desc: 'Report issues and track generator maintenance work.',
          href: 'https://astoenergy.site/',
          cta: 'Contact Maintenance',
        },
      ],
      earthEyebrow: 'Doing Our Part for the Planet',
      earthTitle: 'Blockchain & Carbon Credit Assessment',
      earthParagraph:
        'Combining blockchain technology with carbon credit assessment is not a passing trend — it is the new infrastructure the next-generation carbon market needs. Transparency verifiable through code and satellite data helps shift us from greenwashing skepticism toward real, tangible climate action.',
      earthPoints: [
        {
          head: 'Financial inclusion —',
          body: 'Small community forest growers can pool together and issue carbon credits more easily, thanks to lower-cost dMRV systems.',
        },
        {
          head: 'Redeem air-quality bonuses 24/7 —',
          body: 'Real-time air quality monitoring turns clean air into reward points you can redeem for bonuses anytime, with no downtime.',
        },
        {
          head: 'Investor confidence —',
          body: 'Multinational companies can verify the integrity of the carbon credits they purchase with confidence, truly meeting ESG criteria.',
        },
      ],
    },
    products: {
      eyebrow: 'Our Innovations',
      title: [{ text: 'Our' }, { text: 'Products', em: true }],
      intro:
        'Clean energy innovations that combine efficiency and sustainability to drive a better future for everyone.',
      flagshipTag: 'Flagship Model · Hybrid System · Clean Energy',
      flagshipTitle: 'Ion Hybrid System Reverse',
      flagshipDesc:
        'Future energy innovation combining the highest-efficiency energy storage and delivery technology. Satellite-controlled, with self-managed reverse power flow, integrating multiple energy sources such as mains power, batteries, solar panels, or generators.',
      manualCta: 'Product Manual',
      productList: [
        {
          name: 'Ion Generator R-2384',
          desc: 'A hybrid energy storage system that is a key component of modern power systems, helping stabilize the grid, accommodate the intermittency of renewables, and deliver continuous power.',
        },
        {
          name: 'Energy Storage-2322',
          desc: 'A Hybrid Energy Storage System (HESS) combining more than one storage technology to reduce the limitations of each — for example, pairing fast-response capacitors with high-capacity batteries.',
        },
        {
          name: 'Hybrid System R-2381X',
          desc: 'Combines fast-response lithium-ion batteries with ultracapacitors or flywheel systems for charge-discharge efficiency that surpasses conventional systems.',
        },
        {
          name: 'Ion Hybrid System-2125',
          desc: 'Highlights: higher efficiency, strong handling of sudden load spikes, extended battery lifespan, stable voltage and frequency, and lower long-term maintenance costs.',
        },
      ],
      pricingNote:
        'Pricing is based on power management capacity, starting at a minimum average of 20,000 THB/Kw (shipping not included).',
      mechanismEyebrow: 'Mechanism',
      mechanismTitle: 'System Mechanism',
      mechanismIntro:
        'The process of converting energy from nature into highly efficient mechanical power, using environmentally friendly technology, through a 6-step operating cycle.',
      cycle: [
        { step: '1', title: 'Air Moisture Induction Panel', out: 'Water (H₂O)', desc: 'Draws moisture from the air and condenses it into pure water for the next process.' },
        { step: '2', title: 'Hydrogen Separation Material', out: 'Hydrogen Gas (H₂)', desc: 'Splits water molecules through advanced electrical or chemical processes.' },
        { step: '3', title: 'Fuel Cell', out: 'Direct Current (DC)', desc: 'Uses Platinum/Nafion membranes to convert chemical energy into electrical energy.' },
        { step: '4', title: 'Capacitor', out: 'Ready-to-Use Energy', desc: 'Stores energy and regulates voltage to keep it stable and ready for delivery.' },
        { step: '5', title: 'Power Motor', out: 'Torque / Rotation', desc: 'Converts electrical energy into highly efficient mechanical energy.' },
        { step: '6', title: 'Machinery / Engine', out: 'Output System', desc: 'Delivers mechanical power to drive systems or vehicles at full efficiency.' },
      ],
    },
    contact: {
      eyebrow: 'Get in Touch',
      title: [{ text: 'Contact' }, { text: 'Us', em: true }],
      intro: 'Talk to the Terravolteco team to design an environmentally friendly energy solution for you.',
      info: [
        { label: 'Email', value: 'varunya@terravolteco.com', href: 'mailto:varunya@terravolteco.com' },
        { label: 'Phone', value: '092-273-2376', href: 'tel:0922732376' },
        { label: 'Line Official', value: 'Reach out for more information via LINE', href: 'https://lin.ee/nzYBrcA' },
        {
          label: 'Company Address',
          value: '25 Alma Link Building, 17th Floor, Room 575, Soi Chidlom, Ploenchit Road, Lumpini, Pathumwan, Bangkok 10330',
        },
      ],
      form: {
        title: 'Send Us a Message',
        subtitle: 'Fill in the details below to reach our team',
        name: 'Full Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        thanksTitle: 'Thank You for Reaching Out',
        thanksBody: 'The Terravolteco team has received your message and will get back to you as soon as possible.',
        again: 'Send Another Message',
      },
    },
    footer: {
      blurb:
        'Clean energy for a better future — a leader in developing and applying environmentally friendly energy technology, with smart microgrid solutions and advanced energy storage systems.',
      menu: 'Menu',
      contactHead: 'Contact',
      membershipHead: 'Membership',
      member: 'Member Area',
      myAccount: 'My Account',
      copyright:
        '© 2026 Terravolteco | Terravolt Eco Co., Ltd. — All rights reserved · 25 Alma Link Building, 17th Floor, Soi Chidlom, Ploenchit Road, Lumpini, Pathumwan, Bangkok 10330',
    },
  },
} as const

export type Translations = (typeof translations)['th']
