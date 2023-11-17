"use client"
import React, { useState, useEffect } from 'react'
import { title, subtitle } from "@/components/primitives";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { DndProvider } from 'react-dnd'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Code } from '@nextui-org/code';
import Link from 'next/link';
type Props = {}


type pageInfo = {
  'sectionType': string | null;
  'sectionTitle': string,
  'sectionOption': {
    'optionTitle': string,
    'optionValue': string
  }[] | null,
  'id': string
}

type insertSec = {
  'title': string,
  'titleHead':string,
  'code': string
}



export default function PageEditorPage({ }: Props) {

  const insertSection:insertSec[] = [
    {
      'title': 'Presentation-Message',
      'titleHead':'Presentation Message',
      'code': `<h1>content<h1>`
    },
    {
      'title': 'Presentation-HTML',
      'titleHead':'Presentation Message',
      'code': `<h1>content<h1>`
    },
    {
      'title': 'Heading',
      'titleHead':'Presentation Message',
      'code': `<h1>content<h1>`
    },
    {
      'title': 'Quest-Radio',
      'titleHead':'Presentation Message',
      'code': `<h1>content<h1>`
    },
    {
      'title': 'Quest-Checkboxes',
      'titleHead':'Presentation Message',
      'code': `<h1>content<h1>`
    }]



  const [pageInfo, setPageInfo] = useState<pageInfo[]>(() => {
    // Use the value from localStorage if it exists
    if (typeof window !== 'undefined') {
      // code that uses localStorage
      const storedValue = localStorage.getItem('pageInfo');
      return storedValue ? JSON.parse(storedValue) : [];
    }else{
      return []
    }
    

  });
  useEffect(() => { saveToLocal() }, [pageInfo])

  


  const addNewSection = () => {
    let newSection = {
      'sectionType': null,
      'sectionTitle': '',
      'sectionOption': null,
      'id': Math.random().toString(36).substr(2, 9) // Generate a unique ID
    }

    setPageInfo([...pageInfo, newSection]);
  }

  const saveToLocal = () => {
    
    if (typeof window !== 'undefined') {
      // code that uses localStorage
      localStorage.setItem('pageInfo', JSON.stringify(pageInfo))
    }
  }



  const addSectionBasedOptions = (section: string, index: number) => {
    console.log(section, index)


    if (section === 'Quest-Radio' || section === 'Quest-Checkboxes') {
      let newOption = [
        {
          'optionTitle': '',
          'optionValue': ''
        }
      ]


      setPageInfo(prevPageInfo => {
        return prevPageInfo.map((info, i) => {
          if (i === index) {
            return {
              ...info,
              sectionType: section,
              sectionOption: newOption
            };
          }
          return info;
        });
      });


    } else {

      setPageInfo(prevPageInfo => {
        return prevPageInfo.map((info, i) => {
          if (i === index) {
            return {
              ...info,
              sectionType: section,
              sectionOption: null
            };
          }
          return info;
        });
      });

    }
    console.log(pageInfo)
  }

  const addMoreOptions = (index: number) => {

    let newOp2 = {
      'optionTitle': '',
      'optionValue': ''
    }

    let newOp = pageInfo[index].sectionOption;
    newOp?.push(newOp2)

    setPageInfo(prevPageInfo => {
      return prevPageInfo.map((info, i) => {
        if (i === index) {
          return {
            ...info,
            sectionTitle: pageInfo[index].sectionTitle,
            sectionOption: newOp,
            sectionType: pageInfo[index].sectionType
          };
        }
        return info;
      });
    });


  }

  const deleteSection = (index: number) => {
    setPageInfo(prev => prev.filter((f, idx) => idx !== index));
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(pageInfo);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setPageInfo(reorderedItems);
  };

  const handleOptionChange = (optionIndex: number, sectionIndex: number, newValue: string) => {
    setPageInfo((prevPageInfo) => {
      return prevPageInfo.map((info, i) => {
        if (i === sectionIndex) {
          const updatedOptions = (info.sectionOption || []).map((option, idx) => {
            if (idx === optionIndex) {
              return {
                ...option,
                optionTitle: newValue,
              };
            }
            return option;
          });

          return {
            ...info,
            sectionOption: updatedOptions,
          };
        }
        return info;
      });
    });
  };


  return (
    <>
      <h1 className={title()}>Editor Console&nbsp;</h1>
      <br /><br />
      <Button size="sm" color="primary" className='mb-2' onClick={addNewSection} variant="ghost">
        Add Section
      </Button>
      &nbsp;
      <Link href="previewPage">
      <Button size="sm" color="primary" variant="light">
       Preview
      </Button>
      </Link>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="vutureVx">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {
                pageInfo.map((section, sectionIndex) => {
                  return (<div aria-label="card" className='' key={sectionIndex}>
                    <Draggable key={section.id} draggableId={section.id} index={sectionIndex}>
                      {(provided) => (
                        <>
                          <Card className="shadow-md" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <CardBody>
                              <div className="flex flex-wrap gap-4">
                                {(section.sectionType != null) &&
                                  <Tooltip delay={100} closeDelay={150}
                                    content={
                                      <div className="px-1 py-2">
                                        <div className="text-small font-bold">Custom Content</div>
                                        <div className="text-tiny">This is a custom tooltip content</div>
                                      </div>
                                    }
                                  >
                                    <Code color="primary" size="md">{section.sectionType}</Code>
                                  </Tooltip>
                                }
                                {
                                  (section.sectionType == 'Quest-Radio' || section.sectionType == 'Quest-Checkboxes') && (
                                    <Button size="sm" color="primary" className='mb-2 max-w-min' onClick={() => {
                                      addMoreOptions(sectionIndex)
                                    }} variant="ghost">
                                      Add More Options
                                    </Button>
                                  )
                                }
                                {
                                  (
                                    <Button size="sm" color="primary" className='mb-2 max-w-min' onClick={() => {
                                      deleteSection(sectionIndex)
                                    }} variant="ghost">
                                      Delete Section
                                    </Button>
                                  )
                                }


                              </div>
                              <Input type="text" variant={'underlined'} value={section.sectionTitle} onChange={(event) => {
                                setPageInfo(prevPageInfo => {
                                  return prevPageInfo.map((info, i) => {
                                    if (i === sectionIndex) {
                                      return {
                                        ...info,
                                        sectionType: section.sectionType,
                                        sectionTitle: event.target.value,
                                        sectionOption: section.sectionOption
                                      };
                                    }
                                    return info;
                                  });
                                });
                              }} placeholder='Section Title' />
                              {(section.sectionType == null) &&
                                <Select aria-label="card"
                                  variant={'underlined'}
                                  placeholder="Pick Section Type"
                                  className="max-w-xs"
                                // selectedKeys={pageInfo[index].sectionTitle}
                                >
                                  {insertSection.map((section) => (
                                    <SelectItem onClick={() => {
                                      addSectionBasedOptions(section?.title, sectionIndex)
                                    }} key={section?.title} value={section?.title}>
                                      {section?.title}
                                    </SelectItem>
                                  ))}
                                </Select>
                              }
                              {section.sectionType == 'Quest-Radio' &&
                                section.sectionOption?.map((option, index) => (
                                  <span className="max-w-xs" key={index}>
                                    <Input
                                      type="text"
                                      variant="underlined"
                                      value={option.optionTitle}
                                      placeholder={'Option Title'}
                                      onChange={(event) => {
                                        handleOptionChange(index, sectionIndex, event.target.value);
                                      }}
                                    />
                                  </span>
                                ))}
                               {section.sectionType == 'Quest-Checkboxes' &&
                                  section.sectionOption?.map((option, index) => (
                                    <span className="max-w-xs" key={index}>
                                      <Input
                                        type="text"
                                        variant="underlined"
                                        value={option.optionTitle}
                                        placeholder={'Option Title'}
                                        onChange={(event) => {
                                          handleOptionChange(index, sectionIndex, event.target.value);
                                        }}
                                      />
                                    </span>
                                  ))}
                            </CardBody>
                          </Card>

                        </>
                      )}
                    </Draggable>
                    <br />
                  </div>)
                })
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}