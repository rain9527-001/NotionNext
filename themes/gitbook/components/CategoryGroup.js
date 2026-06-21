import CategoryItem from './CategoryItem'

const CategoryGroup = ({ currentCategory, categoryOptions }) => {
  if (!categoryOptions) {
    return <></>
  }

  // 中文数字转阿拉伯数字的字典，用来精准控制排序
  const chineseNumMap = {
    '一': 1, '二': 2, '三': 3, '四': 4, '五': 5,
    '六': 6, '七': 7, '八': 8, '九': 9, '十': 10
  }

  // 获取分类名称开头的数字权重
  const getSortWeight = (name) => {
    if (!name) return 999
    const firstChar = name.trim().charAt(0)
    // 如果开头是中文数字，返回对应权重
    if (chineseNumMap[firstChar] !== undefined) {
      return chineseNumMap[firstChar]
    }
    // 如果开头本身就是阿拉伯数字，直接转换
    const parsed = parseInt(firstChar, 10)
    if (!isNaN(parsed)) return parsed
    return 999 // 都没有匹配到的排在最后
  }

  // 强制进行硬编码权重排序
  const sortedCategories = [...categoryOptions].sort((a, b) => {
    return getSortWeight(a.name) - getSortWeight(b.name)
  })

  return <div id='category-list' className='pt-4'>
    <div className='mb-2'><i className='mr-2 fas fa-th' />分类</div>
    <div className='flex flex-wrap'>
      {sortedCategories?.map(category => {
        const selected = currentCategory === category.name
        return <CategoryItem key={category.name} selected={selected} category={category.name} categoryCount={category.count} />
      })}
    </div>
  </div>
}

export default CategoryGroup
