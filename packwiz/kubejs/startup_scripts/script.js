// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

/**
onEvent('worldgen.remove', event => {
	event.removeFeatureById('underground_ores', [
		'minecraft:ore_coal_upper',
		'minecraft:ore_coal_lower',
		'minecraft:ore_iron_upper',
		'minecraft:ore_iron_middle',
		'minecraft:ore_iron_small',
		'minecraft:ore_gold',
		'minecraft:ore_gold_lower',
		'minecraft:ore_redstone',
		'minecraft:ore_redstone_lower',
		'minecraft:ore_lapis',
		'minecraft:ore_lapis_buried',
		'minecraft:ore_copper',
		'create:zinc_ore',
		'molten_geodes:asurine_geode',
		'molten_geodes:veridium_geode',
		'molten_geodes:crimsite_geode',
		'molten_geodes:ochrum_geode',
		'molten_geodes:brass_geode'
	]);
	event.removeFeatureById('underground_structures', [
		'minecraft:monster_room',
		'minecraft:monster_room_deep'
	]);
	event.removeFeatureById('strongholds', [
		''
	]);
	event.removeFeatureById('surface_structures', [
		''
	]);
});
*/