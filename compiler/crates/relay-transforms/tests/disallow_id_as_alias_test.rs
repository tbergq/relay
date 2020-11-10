// @generated SignedSource<<30ac0777f27435912bdc1d720d68bfee>>
// Generated by $ cargo run -p fixture-tests -- oss/crates/relay-transforms/tests/disallow_id_as_alias

mod disallow_id_as_alias;

use disallow_id_as_alias::transform_fixture;
use fixture_tests::test_fixture;

#[test]
fn id_alias() {
    let input = include_str!("disallow_id_as_alias/fixtures/id-alias.graphql");
    let expected = include_str!("disallow_id_as_alias/fixtures/id-alias.expected");
    test_fixture(transform_fixture, "id-alias.graphql", "disallow_id_as_alias/fixtures/id-alias.expected", input, expected);
}

#[test]
fn id_alias_with_errors_invalid() {
    let input = include_str!("disallow_id_as_alias/fixtures/id-alias-with-errors.invalid.graphql");
    let expected = include_str!("disallow_id_as_alias/fixtures/id-alias-with-errors.invalid.expected");
    test_fixture(transform_fixture, "id-alias-with-errors.invalid.graphql", "disallow_id_as_alias/fixtures/id-alias-with-errors.invalid.expected", input, expected);
}