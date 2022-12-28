import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CtfChallengesService {

  constructor() { }

  public list(): Observable<any[]> {
    return of([
      {
        group: 'King of the Hills',
        items: [
          {
            id: 1,
            title: 'The Fools',
            excerpt: 'เว็บไซต์ข่าวปอม',
            points: '30 / minute',
            level: 'Hard'
          },
          {
            id: 2,
            title: 'GGEZ Hosting',
            excerpt: 'โฮสติ้งอย่างง่าย',
            points: '20 / minute',
            level: 'Medium'
          },
          {
            id: 3,
            title: 'MineKrub',
            excerpt: 'เซิร์ฟ Minecraft ที่ไม่ได้รั่วที่ Minecraft',
            points: '10 / minute',
            level: 'Easy'
          },
          {
            id: 4,
            title: 'ท่อนซุงสำหรับหอย',
            excerpt: 'ท่อนซุงในกาแฟ = หอย',
            content: 'Log4shell + Private Key exposed on website (brute-force /:id)',
            points: '20 / minute',
            level: 'Medium'
          },
          {
            id: 5,
            title: 'ไอแดรก',
            excerpt: 'Legacy Web Management Console for Bell Server',
            content: 'Log4shell',
            points: '20 / minute',
            level: 'Medium'
          },
        ]
      },
      {
        group: 'Web for dummies',
        items: [
          {
            id: 11,
            title: 'Stupid Filter',
            excerpt: 'ฟิลเตอร์โง่ๆ',
            points: '200',
            isCaptured: true
          },
          {
            id: 12,
            title: 'Basic Javascript',
            excerpt: 'Javascript เป็นภาษาที่ดี',
            points: '200',
          },
          {
            id: 13,
            title: '4 Chair',
            excerpt: 'เว็บฝากไฟล์ แต่ส่วนใหญ่ฝากเพลง',
            points: '200',
          }
        ]
      },
      {
        group: 'Programming',
        items: [
          {
            id: 21,
            title: 'REST API',
            excerpt: 'Create your own REST API and wait for Flag. Click Details button to view API spec.',
            points: '200',
          },
          {
            id: 22,
            title: 'เสือกเรื่องชาวบ้าน',
            excerpt: 'Subscribe to MQTT Broker in topic `...` to receive the sensors data and flag.',
            points: '200',
          },
          {
            id: 23,
            title: 'ป้าข้างบ้าน',
            excerpt: 'แลกเปลี่ยนข่าวสารกับป้าข้างบ้าน เดี๋ยวป้าข้างบ้านเอา flag มาให้ (MQTT / RabbitMQ)',
            points: '300',
          },
          {
            id: 24,
            title: 'Save with me free Mango',
            excerpt: 'มะม่วง Collection',
            points: '100',
          },
          {
            id: 25,
            title: 'รักเราไม่เท่ากัน',
            excerpt: 'ก็ไม่รู้ทำไม รักเรามันไม่เท่ากัน',
            content: '== กับ ===',
            points: '400',
            level: 'Medium'
          }
        ]
      },
      {
        group: 'Network & Forensics',
        items: [
          {
            id: 31,
            title: 'ใครขโมยไฟไปชาร์จรถ',
            excerpt: '<b><u>เมีย</u></b>การไฟฟ้า สงสัยว่ามีคนขโมยไฟของเมียไปชาร์จรถตัวเอง ช่วยจับขโมยหน่อย ไม่งั้นเมียให้นอนนอกบ้าน',
            content: 'Caesar Cipher in OCPP',
            points: 1000,
            level: 'Hard'
          },
          {
            id: 32,
            title: 'คลิปหลุด',
            excerpt: 'มีพนักงานในบริษัทสื่อผู้ใหญ่ ทำคลิปดาราเปลี่ยนเสื้อหลุด ให้จับพนักงานคนนั้นให้หน่อย',
            content: 'ให้หา IP Address ของคนที่ทำคลิปหลุด แล้วเข้าไปเอา flag',
            points: 500,
            level: 'Medium'
          },
          {
            id: 33,
            title: 'ขายความลับบริษัท',
            excerpt: 'บริษัทคู่แข่งชิงเปิดตัวสินค้าใหม่พร้อมตัดราคาสู้ เขาต้องรู้ความลับของเราแน่ ๆ หาตัวคนขายข้อมูลลับมาที',
            content: 'การอำพรางข้อมูลโดยใช้ DNS Query',
            points: 500,
            level: 'Medium'
          },
          {
            id: 34,
            title: 'Virus Uploaded',
            excerpt: 'มีคนเอาไวรัสเข้ามาอัพโหลดไฟล์ในเซิร์ฟเวอร์บริษัท หาให้หน่อยว่าใคร',
            content: 'virus.exe อัพโหลดมาผ่าน HTTP POST และมี flag ซ่อนอยู่ใน User Agent หรือ Header',
            points: 500,
            level: 'Medium'
          },
          {
            id: 35,
            title: 'Network Scan with NMAP',
            excerpt: 'ลอง Scan Network 10.100.0.0/24 สิ เผื่อเจอ Flag',
            content: 'virus.exe อัพโหลดมาผ่าน HTTP POST และมี flag ซ่อนอยู่ใน User Agent หรือ Header',
            points: 100,
            level: 'Easy'
          }
        ]
      },
      {
        group: 'Linux for Dummies',
        items: [
          {
            id: 401,
            title: 'SSH Login',
            excerpt: 'Login เข้า Linux Server ไปก็เจอ Flag เลย',
            content: '~/tni-cwc-1234567.txt',
            points: 500,
            level: 'Medium'
          },
          {
            id: 402,
            title: 'Change Directory',
            excerpt: 'เข้าไปดูในโฟลเดอร์อื่น ๆ บ้างสิ เผื่อเจอ Flag',
            content: 'flag/tni-cwc-1234567.txt',
            points: 500,
            level: 'Medium'
          },
          {
            id: 403,
            title: 'Read File',
            excerpt: 'เข้าไปดูในโฟลเดอร์อื่น ๆ บ้างสิ เผื่อเจอ Flag',
            content: 'cat flag.txt',
            points: 500,
            level: 'Medium'
          },
          {
            id: 404,
            title: 'Hexdump',
            excerpt: 'Flag อยู่ใน Hex',
            content: 'xxd flag.txt',
            points: 500,
            level: 'Medium'
          },
          {
            id: 405,
            title: 'Archive',
            excerpt: 'Flag อยู่ในไฟล์ .zip',
            content: '',
            points: 500,
            level: 'Medium'
          },
          {
            id: 406,
            title: 'Archive 2',
            excerpt: 'Flag อยู่ในไฟล์ .tar.gz',
            content: '',
            points: 500,
            level: 'Medium'
          },
          {
            id: 407,
            title: 'Network Interfaces',
            excerpt: 'Flag อยู่ในไฟล์ Network Interface',
            content: '',
            points: 500,
            level: 'Medium'
          },
          {
            id: 408,
            title: 'DNS Resolver',
            excerpt: 'Flag อยู่ในไฟล์ DNS Resolver',
            content: '',
            points: 500,
            level: 'Medium'
          },
          {
            id: 409,
            title: 'Process',
            excerpt: 'Flag อยู่ใน Process',
            content: '',
            points: 500,
            level: 'Medium'
          },
          {
            id: 410,
            title: 'grep',
            excerpt: 'Flag อยู่ไฟล์ แต่ซ่อนอยู่ในกองตัวอักษร',
            content: '',
            points: 500,
            level: 'Medium'
          },
        ]
      },
      {
        group: 'Miscellaneous',
        items: [
          {
            id: 51,
            title: 'Where was this photo taken',
            excerpt: 'รูปนี้ถ่ายที่ไหน',
            points: 50,
            level: 'Easy'
          },
          {
            id: 52,
            title: 'MP4 Audio Track Data',
            excerpt: 'ไปดูข้อมูลของเพลงสิ',
            points: 50,
            level: 'Easy'
          },
          {
            id: 53,
            title: 'The Event Poster',
            excerpt: 'โปสเตอร์มันมีอะไรประหลาด ๆ มั้ย',
            points: 50,
            level: 'Easy'
          },
          {
            id: 54,
            title: 'About us',
            excerpt: 'GitHub: TNI-CyberSec',
            points: 50,
            level: 'Easy'
          },
          {
            id: 55,
            title: 'ความลับซ่อนเร้น 1',
            excerpt: 'แอบแชทกับกิ๊กผ่านไฟล์งาน 1',
            points: 50,
            level: 'Easy'
          },
          {
            id: 56,
            title: 'ความลับซ่อนเร้น 2',
            excerpt: 'แอบแชทกับกิ๊กผ่านไฟล์งาน 2',
            points: 50,
            level: 'Easy'
          },
        ]
      }
    ])
  }

  public get(id: any): Observable<any> {
    return of({
      id: 1,
      title: 'The Fools',
      excerpt: 'เว็บไซต์ข่าวปอม',
      content: `
        # Scenario
        เว็บข่าวปอม คือ เว็บบอร์ด ที่เปิดให้ผู้เลี้ยงหมาปอมมาโพสต์แชร์ข่าวปอม แต่ชอบมีคนโพสต์อะไรแปลก ๆ แอดมินเลยต้องตามลบตลอด


        ## Connect
        \`\`\`
        http://192.168.10.161
        \`\`\`
      `
      ,
      points: '30 / minute',
      level: 'Hard'
    })
  }
}
