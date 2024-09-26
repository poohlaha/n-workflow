/**
 * 样式选择框
 */
import React, { useMemo, useState, Fragment } from 'react'
import { Select } from 'antd'
import { ClassConfig } from '@views/config/index'
import Utils from '@utils/utils'
type mode = 'multiple' | 'tags'

interface IStyleConfigProps {
  dropdownClassName: string
  maxTagCount?: number
  mode?: mode
}

const StyleSelect: React.FC<IStyleConfigProps> = (props: IStyleConfigProps) => {
  const [data, setData] = useState<any>([])

  const getData = () => {
    let data: Array<any> = []
    for (let key in ClassConfig) {
      let obj = ClassConfig[key] || {}
      if (Utils.isObjectNull(obj)) continue

      for (let v in obj) {
        let childObj = obj[v] || {}
        if (Utils.isObjectNull(childObj)) continue

        let values = childObj.values || []
        let backgrounds = childObj.backgrounds || []
        let childrens = childObj.childrens || []

        let children: Array<any> = []
        if (childrens.length > 0) {
          children.push({
            name: childObj.childrensName || '',
            label: childObj.childrensText || '',
            children: childrens,
          })
        }

        data.push({
          name: childObj.name || '',
          label: childObj.text || '',
          values: childrens.length > 0 ? values.concat(backgrounds) : childObj.values || [],
          children,
        })
      }
    }

    setData(data)
  }

  useMemo(() => {
    getData()
  }, [])

  const getSelectOptions = (item: any = {}) => {
    if (Utils.isObjectNull(item)) return null

    let children = item.children || []
    return (
      <Select.OptGroup label={item.label} key={item.name}>
        {children.length > 0 &&
          children.map((child: any) => {
            return (
              <Select.Option value={child} key={`${child}`}>
                {child}
              </Select.Option>
            )
          })}
      </Select.OptGroup>
    )
  }

  return (
    <Select
      mode={props.mode || 'multiple'}
      allowClear
      style={{ width: '100%' }}
      placeholder="请选择样式"
      popupClassName={props.dropdownClassName || ''}
      // maxTagCount={props.maxTagCount || 2}
    >
      {data.length > 0 &&
        data.map((item: any, index: number) => {
          let values = item.values || []
          let children = item.children || {}
          return (
            <Select.OptGroup label={item.label} key={index}>
              {values.length > 0 &&
                values.map((value: any, i: number) => {
                  return (
                    <Fragment key={`${index}_${i}_${value}`}>
                      <Select.Option value={value}>{value}</Select.Option>
                    </Fragment>
                  )
                })}
              {/*
                children.length > 0 && children.map((child: any) => {
                  return getSelectOptions(child)
                })
              */}
            </Select.OptGroup>
          )
        })}
    </Select>
  )
}

export default StyleSelect
