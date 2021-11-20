import React, { useEffect, useState } from 'react';
import Avatar from '@images/icons/avatar2017.jpg';
import FanyingAvatar from '@images/icons/fanying.jpg';
import LixingAvatar from '@images/icons/lixing.jpg';
import DingAvatar from '@images/icons/dingasset.jpg';
import DingTalkIcon from '@images/icons/钉钉.svg';

export default function DingTalk(props: {
  show: boolean;
  changeBgColor: (colorName: string) => void;
  initFullScreen: (ifFullScreen: boolean) => void;
}) {
  const id = 'dingtalk';
  const currentDateTime = new Date();
  const currentDate = `${currentDateTime.getFullYear()}-${
    (currentDateTime.getMonth() + 1).toString().length === 2
      ? (currentDateTime.getMonth() + 1).toString()
      : '0' + (currentDateTime.getMonth() + 1).toString()
  }-${
    (currentDateTime.getDate() + 1).toString().length === 2
      ? (currentDateTime.getDate() + 1).toString()
      : '0' + (currentDateTime.getDate() + 1).toString()
  }`;
  const bgColor = 'bg-white';
  const ifInitFullScreen = true;
  const { show, changeBgColor, initFullScreen } = props;
  const initDialogs = () => [];
  const fetchDialogs = () => [
    {
      name: '前端练习生计划老师同学上课群',
      group: '阿里巴巴前端练习生计划',
      iconSrc: '',
      messages: [
        { from: '1号同学', content: '1', date: '2021-11-17', time: '17:11:13' },
        { from: '2号同学', content: '1', date: '2021-11-17', time: '17:12:13' },
        { from: '3号同学', content: '1', date: '2021-11-17', time: '17:13:13' },
        { from: '4号同学', content: '1', date: '2021-11-17', time: '17:14:13' },
        {
          from: '5号同学',
          content: '准备好了',
          date: '2021-11-17',
          time: '17:15:13',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-17',
          time: '18:13:13',
        },
        {
          from: '6号同学',
          content: '我们做完了',
          date: '2021-11-17',
          time: '19:11:13',
        },
        {
          from: '7号同学',
          content: '不会吧不会吧还有人没做完',
          date: '2021-11-17',
          time: '19:12:13',
        },
        { from: '8号同学', content: '1', date: '2021-11-17', time: '19:13:13' },
        { from: '9号同学', content: '1', date: '2021-11-19', time: '19:14:13' },
        {
          from: '艺珺',
          content: '别骂了别骂了...',
          date: '2021-11-19',
          time: '19:13:13',
        },
      ],
    },
    {
      name: '抠糖饼之一边搬砖一边听课小队',
      group: '阿里巴巴前端练习生计划',
      iconSrc: '',
      messages: [
        { from: '凡颖', content: '1', date: '2021-11-18', time: '08:04:26' },
        { from: '莹雯', content: '1', date: '2021-11-18', time: '08:05:35' },
        { from: '艺珺', content: '1', date: '2021-11-18', time: '08:05:37' },
        { from: '立行', content: '1', date: '2021-11-18', time: '08:05:56' },
        {
          from: '凡颖',
          content:
            '我们是抠糖饼小队，聚起来的第一天发现大家都在搬砖，心拔凉拔凉。',
          date: '2021-11-19',
          time: '08:04:26',
        },
        {
          from: '莹雯',
          content: '比如说我在实验室搬砖。',
          date: '2021-11-19',
          time: '08:05:35',
        },
        {
          from: '艺珺',
          content: '我在公司搬砖。',
          date: '2021-11-19',
          time: '08:05:37',
        },
        {
          from: '立行',
          content: '我也，在公司搬砖。',
          date: '2021-11-19',
          time: '08:05:56',
        },
        {
          from: '凡颖',
          content:
            '在可掌控范围内，我们选择了模拟Windows11的网页项目。基于 React 在 PC 端实现 Windows 11 主题桌面相关展示和交互，同时对部分基本的小功能进行简单的实现。',
          date: '2021-11-19',
          time: '08:23:26',
        },
        {
          from: '立行',
          content:
            '根据大家的技术背景，我们选择了 React 和 TypeScript 的技术栈。顺便尝试了一下 Tailwind CSS 这个黑科技。',
          date: '2021-11-19',
          time: '09:34:26',
        },
        {
          from: '凡颖',
          content: '在项目中，我主要完成了脚手架搭建，锁屏页面及动画功能。',
          date: '2021-11-19',
          time: '10:23:26',
        },
        {
          from: '立行',
          content: '我负责的是桌面页面、桌面功能栏功能组件。',
          date: '2021-11-19',
          time: '10:29:12',
        },
        {
          from: '莹雯',
          content: '桌面 Icon 的部分由我负责。',
          date: '2021-11-19',
          time: '10:34:51',
        },
        {
          from: '艺珺',
          content:
            '应用窗口和一般级别的钉钉仿真由我实现。（就是你现在看到的东西）',
          date: '2021-11-19',
          time: '12:34:23',
        },
      ],
    },
    {
      name: '艺珺',
      group: '',
      iconSrc: Avatar,
      messages: [
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content:
            '上海大学，计算机科学与技术专业。<br>非典型工科女，接触前端一年半，<br>喜欢剧场、视频影像、视觉设计和好多好多东西。',
          date: '2021-11-18',
          time: '22:04:26',
        },
      ],
    },
    {
      name: '凡颖',
      group: '阿里巴巴前端练习生计划',
      iconSrc: FanyingAvatar,
      messages: [
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '凡颖',
          content:
            '上海对外经贸大学 小组组长<br>日语笔译专业，学习前端2年时间，擅长React<br>喜欢看书，对科技比较感兴趣',
          date: '2021-11-18',
          time: '22:04:26',
        },
      ],
    },
    {
      name: '立行',
      group: '阿里巴巴前端练习生计划',
      iconSrc: LixingAvatar,
      messages: [
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '立行',
          content:
            '东华大学，大四在读<br>目前在学长的创业公司实习，做前端开发相关工作。<br>平时喜欢听歌，跑步，玩游戏',
          date: '2021-11-18',
          time: '22:04:26',
        },
      ],
    },
    {
      name: '莹雯',
      group: '阿里巴巴前端练习生计划',
      iconSrc: '',
      messages: [
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2021-11-18',
          time: '20:04:26',
        },
        {
          from: '莹雯',
          content:
            '华东师范大学，信号与信息处理专业，学习前端半年多，主要使用Vue，平时生活喜欢弹古筝，拼拼图。',
          date: '2021-11-18',
          time: '22:04:26',
        },
      ],
    },
    {
      name: '第二届阿里巴巴前端练习生1班',
      group: '阿里巴巴前端练习生计划',
      iconSrc: '',
      messages: [
        {
          from: '裕波老师',
          content: '开班会了',
          date: '2021-11-12',
          time: '18:13:13',
        },
        {
          from: '裕波老师',
          content: '我们一起开班会',
          date: '2021-11-14',
          time: '18:13:13',
        },
        {
          from: '裕波老师',
          content: '一起来看蚂蚁后山',
          date: '2021-11-15',
          time: '18:13:13',
        },
        {
          from: '裕波老师',
          content: '开始开班会了',
          date: '2021-11-18',
          time: '18:13:13',
        },
        {
          from: '艺珺',
          content: '就是说...打工人真的很难开班会...',
          date: '2021-11-18',
          time: '18:15:13',
        },
        {
          from: '裕波老师',
          content: '我们还是要努力开班会！',
          date: '2021-11-18',
          time: '20:13:13',
        },
      ],
    },
    {
      name: '为了演示高精度日期仿真而创建的群聊',
      group: '阿里巴巴前端练习生计划',
      iconSrc: '',
      messages: [
        {
          from: '艺珺',
          content: '演示高精度日期仿真而创建的群聊',
          date: '2020-11-18',
          time: '18:13:13',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2020-11-18',
          time: '18:13:13',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2020-11-18',
          time: '18:13:13',
        },
        {
          from: '艺珺',
          content: '这是一段消息 大概的意思是结业项目做不完了',
          date: '2020-11-18',
          time: '18:13:13',
        },
      ],
    },
    {
      name: '钉钉小秘书',
      group: '',
      iconSrc: DingAvatar,
      messages: [
        {
          from: '钉钉小秘书',
          content:
            'Your request to join 阿里巴巴前端练习生计划 has been rejected. <br><br> Reject reason: 请提交学生证',
          date: '2021-10-19',
          time: '16:51:00',
        },
        {
          from: '艺珺',
          content: '对不起 是我草率了..',
          date: '2021-10-19',
          time: '18:13:13',
        },
        {
          from: '钉钉小秘书',
          content:
            "You've joined the 阿里巴巴前端练习生计划, click on View Details to view your organization' information, and if you're not a member of the organization, you can opt out at any time.If you need to, you can click on my - settings - s/privacy to make more settings.",
          date: '2021-10-20',
          time: '10:54:12',
        },
        {
          from: '艺珺',
          content: '好耶！（？',
          date: '2021-10-20',
          time: '18:13:13',
        },
      ],
    },
  ];

  const my = '艺珺';

  const sendMessage = () => {
    console.log(activeDialogIndex);
    let newState = dialogs.map((item, index) => {
      if (index === activeDialogIndex) {
        item.messages.push({
          from: my,
          content: message,
          date: currentDate,
          time: '00:23',
        });
      }
      return item;
    });
    setMessage('');
    setDialogs(newState);
  };

  const [dialogs, setDialogs] = useState<
    {
      name: string;
      group: string;
      iconSrc: string;
      messages: { from: string; content: string; date: string; time: string }[];
    }[]
  >([]);

  const [activeDialogIndex, setActiveDialogIndex] = useState(-1);

  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('useEffect[]');
    setDialogs(initDialogs);
    changeBgColor(bgColor);
    initFullScreen(ifInitFullScreen);
  }, []);

  useEffect(() => {
    console.log('useEffect[dialogIndex]');
    setDialogs(fetchDialogs);
  }, [activeDialogIndex]);

  // useEffect(() => {
  //     console.log(message);
  // }, [message])

  return (
    <div className={`relative w-full h-full flex flex-row ${bgColor}`}>
      <div className='w-1/3 h-full flex flex-row select-none'>
        <div className='w-1/4 h-full bg-dingtalk-primary flex flex-col items-center justify-start pt-8 pb-8'>
          <div className='rounded-full w-16 h-16 bg-white flex items-center justify-center p-1'>
            <img
              className='rounded-full w-full h-full bg-dingtalk-primary'
              src={Avatar}
              alt=''
            />
          </div>
          <div className='rounded-full w-4 h-auto text-white m-4 mt-8 md:text-sm font-bold'>
            你没猜错 这些字确实是用来凑数的 嘿嘿
          </div>
          <div className='rounded-full w-12 h-12 bg-white m-4 mb-0'>
            <img src={DingTalkIcon} alt='' />
          </div>
        </div>
        <div className='relative w-3/4 h-full flex flex-col items-center justify-start p-2 border-r-01 border-dingtalk-dialog-active'>
          <div className='top-2 flex-none w-full h-12 border-b-01 border-dingtalk-dialog-active'>
            <div className='w-full h-11 flex flex-row items-center justify-start'>
              <div className='w-auto h-7 rounded hover:bg-dingtalk-dialog-active flex items-center justify-center p-2 text-window-default font-bold text-sm'>
                实在来不及所以没有做的 Icons
              </div>
            </div>
          </div>
          {dialogs.length ? (
            <div className='w-full h-auto overflow-y-scroll flex flex-col gap-1 mt-1'>
              {dialogs.map((item, index) => {
                return (
                  <div
                    key={item.name}
                    className={`w-full h-18 transition-colors rounded ${
                      activeDialogIndex === index
                        ? 'bg-dingtalk-dialog-active'
                        : 'hover:bg-dingtalk-dialog-hover'
                    } flex flex-row flex-none pl-4 pr-4 pt-3 pb-3 overflow-hidden`}
                    onClick={() => setActiveDialogIndex(index)}
                  >
                    <div
                      className={`w-12 h-12 rounded bg-dingtalk-primary text-white flex flex-none items-center justify-around overflow-hidden`}
                    >
                      {item.iconSrc ? (
                        <img src={item.iconSrc} alt='' />
                      ) : (
                        item.name.slice(-2)
                      )}
                    </div>
                    <div
                      className='flex flex-col flex-1'
                      style={{ maxWidth: 'calc(100% - 3rem)' }}
                    >
                      <div className='flex flex-row flex-none justify-between ml-2'>
                        <div className='truncate' style={{ maxWidth: '50%' }}>
                          {item.name}
                        </div>
                        <div
                          className={`w-16 text-xs flex justify-end ${
                            activeDialogIndex === index
                              ? 'text-window-default'
                              : 'text-dingtalk-dialog-active'
                          }`}
                        >
                          {(item.messages[0] as any).date === currentDate
                            ? (item.messages[0] as any).time
                            : (item.messages[0] as any).date.slice(0, 4) ===
                              currentDate.slice(0, 4)
                            ? (item.messages[0] as any).date.slice(5)
                            : `${
                                (item.messages[0] as any).date.split('-')[1]
                              }/${
                                (item.messages[0] as any).date.split('-')[2]
                              }/${
                                (item.messages[0] as any).date.split('-')[0]
                              }`}
                        </div>
                      </div>
                      <div className='flex flex-row flex-none justify-between ml-2'>
                        <div className='text-xs text-window-default leading-6 mt-1 w-48 truncate'>
                          {(
                            item.messages.sort((a, b) => {
                              if (a.date + a.time < b.date + b.time) return 1;
                              else if (a.date + a.time === b.date + b.time)
                                return 0;
                              else return -1;
                            })[0] as any
                          ).from === my ||
                          (
                            item.messages.sort((a, b) => {
                              if (a.date + a.time < b.date + b.time) return 1;
                              else if (a.date + a.time === b.date + b.time)
                                return 0;
                              else return -1;
                            })[0] as any
                          ).from === item.name
                            ? ''
                            : (
                                item.messages.sort((a, b) => {
                                  if (a.date + a.time < b.date + b.time)
                                    return 1;
                                  else if (a.date + a.time === b.date + b.time)
                                    return 0;
                                  else return -1;
                                })[0] as any
                              ).from + ': '}
                          {(
                            item.messages.sort((a, b) => {
                              if (a.date + a.time < b.date + b.time) return 1;
                              else if (a.date + a.time === b.date + b.time)
                                return 0;
                              else return -1;
                            })[0] as any
                          ).content.replace('<br>', ' ') ?? '[空白消息]'}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='w-2/3 h-full bg-dingtalk-dialog-bg p-2 flex flex-col justify-between'>
        <div className='top-2 flex-none flex flex-row w-full h-12 border-b-01 border-dingtalk-dialog-active select-none justify-start'>
          <div
            className={`w-10 h-10 rounded ${
              activeDialogIndex !== -1 ? 'bg-dingtalk-primary' : ''
            } text-white flex flex-none items-center justify-around overflow-hidden`}
          >
            {activeDialogIndex !== -1 ? (
              dialogs[activeDialogIndex].iconSrc ? (
                <img src={dialogs[activeDialogIndex].iconSrc} alt='' />
              ) : (
                dialogs[activeDialogIndex].name.slice(-2)
              )
            ) : (
              <></>
            )}
          </div>
          <div className='w-auto h-10 ml-2 flex flex-col items-center align-middle'>
            <div
              className={`w-full h-${
                activeDialogIndex !== -1 && dialogs[activeDialogIndex].group
                  ? '6'
                  : '10'
              } flex flex-row items-center align-middle font-bold`}
            >
              {activeDialogIndex !== -1 ? (
                dialogs[activeDialogIndex].name
              ) : (
                <></>
              )}
            </div>
            {activeDialogIndex !== -1 && dialogs[activeDialogIndex].group ? (
              <div className='w-full h-3 text-xs text-window-default'>
                {dialogs[activeDialogIndex].group}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div
          className='w-full h-auto overflow-y-scroll flex flex-col-reverse gap-1 mt-1'
          style={{ minHeight: 'calc(100% - 16rem)' }}
        >
          {activeDialogIndex !== -1 ? (
            dialogs[activeDialogIndex].messages
              .sort((a, b) => {
                if (a.date + a.time < b.date + b.time) return 1;
                else if (a.date + a.time === b.date + b.time) return 0;
                else return -1;
              })
              .map((item) => {
                return (
                  <div
                    className={`h-auto text-sm flex flex-row m-2 items-start ${
                      item.from === my ? 'justify-end' : 'justify-start'
                    }`}
                    key={`${item.from}: ${item.content} @${item.date} ${
                      item.time
                    } random${Math.random().toFixed(6).slice(2)}`}
                  >
                    {item.from !== my ? (
                      <div className='w-10 h-10 rounded bg-dingtalk-primary flex items-center text-white font-bold justify-center overflow-hidden'>
                        {dialogs[activeDialogIndex].iconSrc ? (
                          <img
                            src={dialogs[activeDialogIndex].iconSrc}
                            alt=''
                          />
                        ) : dialogs.map((i) => i.name).indexOf(item.from) !==
                            -1 &&
                          dialogs.filter((j) => j.name === item.from)[0]
                            .iconSrc ? (
                          <img
                            src={
                              dialogs.filter((j) => j.name === item.from)[0]
                                .iconSrc
                            }
                            alt=''
                          />
                        ) : (
                          item.from.slice(-2)
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div
                      className='w-auto h-auto flex flex-col'
                      style={{ maxWidth: '55%' }}
                    >
                      <div
                        className={`w-auto text-xs pl-2 pr-2 pb-1 text-window-default ${
                          item.from === my ? 'text-right' : 'text-left'
                        }`}
                      >
                        {item.from}
                      </div>
                      <div className='w-auto h-auto whitespace-normal bg-white rounded p-2 ml-2 mr-2 flex flex-col text-justify'>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </div>
                    </div>
                    {item.from === my ? (
                      <div className='w-10 h-10 rounded bg-dingtalk-primary flex items-center text-white font-bold justify-center overflow-hidden'>
                        <img src={Avatar} alt='' />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })
          ) : (
            <></>
          )}
        </div>
        <div className='sticky bottom-2 flex-none flex flex-col w-full h-46 border-t-01 border-dingtalk-dialog-active select-none justify-between text-sm'>
          <div className='w-full h-46 pl-3 pr-3'>
            <div className='w-full h-11 flex flex-row items-center justify-start'>
              <div className='w-auto h-7 rounded hover:bg-dingtalk-dialog-active flex items-center justify-center p-1 text-window-default font-bold'>
                实在来不及所以没有做的 Icons
              </div>
            </div>
            <div className='w-full min-h-24 mb-1 overflow-x-hidden overflow-y-scroll ml-1 mr-1'>
              <textarea
                className='w-full h-24 bg-transparent outline-none'
                value={message}
                onChange={(event) => setMessage(event?.target.value)}
                placeholder='请输入消息'
              />
            </div>
            <div className='w-full h-11 flex flex-row items-center justify-end text-s'>
              <button
                className='w-14 h-7 rounded text-white bg-dingtalk-primary text-sm flex items-center align-middle justify-center leading-0'
                onClick={sendMessage}
              >
                发 送
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
