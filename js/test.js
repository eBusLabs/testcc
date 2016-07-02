QUnit.test("Common Child - HARRY SALLY", function (assert) {
    var str = calcChild2('HARRY', 'SALLY');
    assert.equal(str, 'AY', 'Okay - AY')
    assert.equal(str.length, 2, 'Okay - 2')
});

QUnit.test("Common Child - AA BB", function (assert) {
    var str = calcChild2('AA', 'BB');
    assert.equal(str, '', 'Okay - ')
    assert.equal(str.length, 0, 'Okay length - 0')
});

QUnit.test("Common Child - SHINCHAN NOHARAAA", function (assert) {
    var str = calcChild2('SHINCHAN', 'NOHARAAA');
    assert.equal(str, 'NHA', 'Okay - NHA')
    assert.equal(str.length, 3, 'Okay length - 3')
});

QUnit.test("Common Child - ABCDEF FBDAMN", function (assert) {
    var str = calcChild2('ABCDEF', 'FBDAMN');
    assert.equal(str, 'BD', 'Okay - BD')
    assert.equal(str.length, 2, 'Okay length - 2')
});

/*
QUnit.test("Common Child - XMJYAUZ MZJAWXU", function (assert) {
    var str = calcChild2('XMJYAUZ', 'MZJAWXU');
    assert.equal(str, 'MJAU', 'Okay - MJAU')
    assert.equal(str.length, 4, 'Okay length - 4')
});
*/

QUnit.test("Common Child - ABCD ABCD", function (assert) {
    var str = calcChild2('ABCD', 'ABCD');
    assert.equal(str, 'ABCD', 'Okay - ABCD')
    assert.equal(str.length, 4, 'Okay length - 4')
});

QUnit.test("Common Child - Newspaper Articles", function (assert) {
    var str = calcChild2('Two more LCA will join No. 45 Squadron in a few months. “With 45 Squadron commencing operations on Friday, soon the Tejas will be employed to defend the Indian skies,” the IAF said. Group Captain Madhav Rangachari, who flew the squadron’s first flight for 10 minutes, is its first Commanding Officer, with experience in flying both the Mirage-2000 and the MiG-21. His team will initially have six pilots. Tejas has been developed for the IAF and the Navy by the Aeronautical Development Agency (ADA) starting 1985 and produced by the public sector aircraft manufacturer, Hindustan Aeronautics Ltd, both based in Bengaluru. Air Marshal Jasbir Walia, Air Officer Commanding-in Chief, Southern Air Command, formally inducted the planes with Deputy Chief of Air Staff Air Marshal R.K.S. Bhaduria, HAL CMD T. Suvarna Raju and DRDO Chief S. Christopher witnessing the ceremony.', 
    'Hindu, Sikh, Muslim and Christian priests chanted prayers for the success of the Force’s youngest fleet, coconuts were broken and a senior HAL official handed over the documents to the IAF personnel. A full squadron will have 16 fighters and two to four trainers. It will move to the base in Sulur in Tamil Nadu after two years. For now, the two will be stationed in Bengaluru in the care of HAL. HAL said it was ramping up production at its two dedicated production lines. The IAF had ordered 40 LCA in two versions and promised to buy another 80 in the upgraded Mark 1A version. The first 20 are expected by 2018-19. On May 17, Chief Air Chief Marshal Arup Raha flew the fighter in Bengaluru.');
    assert.equal(str, 'i i adrn in e o th ucers on , oonts w be eo o ded the dns the IAF onn  fl squadron ilh 1 ites  t to fr trine  i ot the ae n  i amil a ae t eas  no the t  b te enautcaeo A A staring  produc t isto icat uctrer int eronais t bothe in ega Mar A eron he ir  a cted  n y Chief Air f Marshal Ar Raa  he ier inengr.', 'Okay')
    assert.equal(str.length, 307, 'Okay length - 307')
});