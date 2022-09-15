// outer view
<>
  <View style={{flex: 0.26, backgroundColor: '#FFDE00', alignSelf: 'center'}}>
    <Text style={{color: '#181818'}}>The text</Text>
  </View>

  <View style={{flex: 1, backgroundColor: '#F57328', flexDirection: 'row'}}>
    {/* view 1 */}
    <View style={{flex: 0.8, backgroundColor: '#fff'}}>
      {/* nested views */}
      {/* view 1 */}
      <View style={{flex: 0.1, backgroundColor: '#967E76'}}>
        <Text style={{color: '#181818'}}>Nav 1</Text>
      </View>
      {/* view 2 */}
      <View style={{flex: 0.14, backgroundColor: '#A084CA'}}>
        <Text style={{color: '#181818'}}>Nav 2</Text>
      </View>
      {/* view 3 */}
      <View style={{flex: 0.07, backgroundColor: '#9FC9F3'}}>
        <Text style={{color: '#181818'}}>Nav 3</Text>
      </View>
      {/* view 4 */}
      <View style={{flex: 0.1, backgroundColor: '#EEE3CB'}}>
        <Text style={{color: '#181818'}}>Nav 4</Text>
      </View>
    </View>
    {/* view 2 */}
    <View style={{flex: 0.3, backgroundColor: '#AAC4FF'}}>
      <Text style={{color: '#181818'}}>The text</Text>
    </View>
    {/* view 3 */}
    <View style={{flex: 0.4, backgroundColor: '#FFDE00'}}>
      <Text style={{color: '#181818'}}>The text</Text>
    </View>
    {/* end inner views */}
  </View>
</>;
