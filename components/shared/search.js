import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

const Search = () => {
  return (
    <Form>
      <FormGroup>
        <Input
          type="search"
          name="search"
          id="sampleSearch"
          placeholder="جستجو کالا"
        />
      </FormGroup>
    </Form>
  );
};

export default Search;
