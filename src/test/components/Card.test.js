import React from 'react'
import Immutable from 'immutable'
import { shallow, mount } from 'enzyme'
import Card from 'components/Card'

describe('Components::Card', () => {
  let props
  beforeEach(() => {
    props = {
      note: Immutable.fromJS({
        id: 1,
        email: 'user@example.com',
        author: 'Dummy User',
        subject: 'Lorem ipsum dolor sit amet',
        time: '2 minute ago',
        note:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec felis efficitur, vehicula enim vehicula, cursus nibh. Suspendisse potenti. Mauris et elit convallis, euismod justo in, rhoncus urna. Maecenas porta magna nunc. Sed id euismod lectus. Integer nec massa libero. Mauris sed pretium lacus, ut dapibus urna. Proin venenatis blandit enim, a auctor elit imperdiet vitae. Nunc feugiat risus euismod felis sollicitudin, eget scelerisque risus ultricies. Vestibulum velit urna, finibus pulvinar tortor et, pellentesque pretium turpis.In eu tristique tellus, non blandit urna. Vestibulum id vulputate est, id ullamcorper augue. Sed ac porttitor magna. In ligula mauris, maximus non hendrerit blandit, consectetur posuere nisi. In tempor ipsum at velit tincidunt facilisis. Vivamus non maximus mauris. Nullam dolor tortor, congue accumsan auctor at, iaculis in nulla. Fusce sagittis cursus mollis.Nam sed turpis dignissim, condimentum tortor eu, congue est. Quisque eu consequat sem, ut posuere quam. Proin at lacus quis nisi eleifend fermentum sit amet ac sapien. Nulla eu hendrerit dui, at fringilla odio. Morbi eget elit feugiat, commodo sem quis, sollicitudin enim. Vivamus eget diam non metus tristique lacinia nec non purus. Sed tempus et ligula vel sollicitudin. Morbi malesuada nisi tortor, non dapibus orci venenatis a. Nunc non tortor dignissim, aliquet leo posuere, vulputate massa. Donec nulla lorem, imperdiet non molestie vitae, suscipit in augue.Ut in arcu nibh. Fusce et orci libero. In placerat consequat nisl in scelerisque. Pellentesque lacus arcu, ullamcorper eu felis at, vestibulum pellentesque risus. Proin at ante in est iaculis vestibulum non ac nibh. Cras bibendum turpis eget tincidunt blandit. Nam sollicitudin eleifend sem. Sed id elit luctus, cursus ante in, suscipit nunc. Donec pretium augue ligula, non mattis odio sodales sit amet. Vivamus et odio faucibus, euismod arcu et, dictum arcu.Maecenas nibh orci, pharetra vel nisl ut, aliquam scelerisque turpis. Nam a justo ut massa accumsan commodo. Phasellus vehicula posuere lacus, quis cursus augue consequat ut. Nullam gravida pellentesque justo ac ornare. Fusce vehicula aliquam nisl, ut dignissim metus malesuada at. Donec tincidunt dui a dapibus interdum. Aenean nec mi vel justo suscipit consectetur sit amet et libero. Aliquam placerat vitae orci id cursus. Pellentesque volutpat vitae metus a sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eget nibh nec mauris blandit tristique vitae at massa. Curabitur tempor, elit vel cursus mollis, arcu nulla dignissim erat, quis pellentesque odio nulla id sem. Aenean efficitur lectus id porttitor convallis. Morbi non sapien id urna vestibulum cursus eget vestibulum ex.'
      })
    }
  })

  function renderDoc () {
    return shallow(<Card {...props} />)
  }

  test('render a card with note subject and a note', () => {
    const wrapper = renderDoc()
    const des = wrapper.find('h2')
    expect(des).toHaveLength(2)
  })
})
