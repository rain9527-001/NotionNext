import CategoryItem from './CategoryItem'

const CategoryGroup = ({ currentCategory, categoryOptions }) => {
  if (!categoryOptions) {
    return <></>
  }

  // 在这里对分类进行排序：按中文/字母/数字顺序升序排列
  const sortedCategories = [...categoryOptions].sort((a, b) =>
    a.name.localeCompare(b.name, 'zh-CN', { numeric: true })
  )

  return <div id='category-list' className='pt-4'>
    <div className='mb-2'><i className='mr-2 fas fa-th' />分类</div>
    <div className='flex flex-wrap'>
      {/* 将原来的 categoryOptions 改为排序后的 sortedCategories */}
      {sortedCategories?.map(category => {
        const selected = currentCategory === category.name
        return <CategoryItem key={category.name} selected={selected} category={category.name} categoryCount={category.count} />
      })}
    </div>
  </div>
}

export default CategoryGroup
