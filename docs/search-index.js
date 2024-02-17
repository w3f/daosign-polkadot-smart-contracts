var searchIndex = JSON.parse('{\
"daosign_app":{"doc":"DAOsign App Contract","t":"ADDDNDNDNDDDDDDELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["daosign_app","DAOsignApp","DAOsignAppRef","NewProofOfAgreement","NewProofOfAgreement","NewProofOfAuthority","NewProofOfAuthority","NewProofOfSignature","NewProofOfSignature","SignedProofOfAgreement","SignedProofOfAgreementMsg","SignedProofOfAuthority","SignedProofOfAuthorityMsg","SignedProofOfSignature","SignedProofOfSignatureMsg","__ink_EventBase","as_mut","as_ref","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","call","call_mut","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","env","env","eq","eq","eq","eq","eq","eq","eq","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from_account_id","get_proof_of_agreement","get_proof_of_agreement","get_proof_of_authority","get_proof_of_authority","get_proof_of_signature","get_proof_of_signature","hash","into","into","into","into","into","into","into","into","into","into","into","into","layout","layout","layout","layout","layout","layout","layout","layout","new","new","ok","ok","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","store_proof_of_agreement","store_proof_of_agreement","store_proof_of_authority","store_proof_of_authority","store_proof_of_signature","store_proof_of_signature","to_account_id","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","topics","topics","topics","topics","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_get_proof_of_agreement","try_get_proof_of_authority","try_get_proof_of_signature","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_store_proof_of_agreement","try_store_proof_of_authority","try_store_proof_of_signature","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_info","type_info","type_info","type_info","type_info","type_info","type_info","type_info","using_encoded","using_encoded","using_encoded","using_encoded","validate_signed_proof_of_agreement","validate_signed_proof_of_authority","validate_signed_proof_of_signature"],"q":[[0,"daosign_app"],[1,"daosign_app::daosign_app"]],"d":["","Main storage structure for DAOsignApp contract.","Main storage structure for DAOsignApp contract.","Event emitted when a new Proof-of-Agreement is added.","","Event emitted when a new Proof-of-Authority is added.","","Event emitted when a new Proof-of-Signature is added.","","Represents a signed Proof-of-Agreement with the message, …","Represents a signed Proof-of-Agreement with the EIP712 …","Represents a signed Proof-of-Authority with the message, …","Represents a signed Proof-of-Authority with the EIP712 …","Represents a signed Proof-of-Signature with the message, …","Represents a signed Proof-of-Signature with the EIP712 …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Ink! message to retrieve a Proof of Agreement by its CID.","Ink! message to retrieve a Proof of Agreement by its CID.","Ink! message to retrieve a Proof of Authority by its CID.","Ink! message to retrieve a Proof of Authority by its CID.","Ink! message to retrieve a Proof of Signature by its CID.","Ink! message to retrieve a Proof of Signature by its CID.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","Ink! constructor for creating a new DAOsignApp instance.","Ink! constructor for creating a new DAOsignApp instance.","","","","","","","","","","","","","","Ink! message to store a Proof of Agreement.","Ink! message to store a Proof of Agreement.","Ink! message to store a Proof of Authority.","Ink! message to store a Proof of Authority.","Ink! message to store a Proof of Signature.","Ink! message to store a Proof of Signature.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Ink! message to retrieve a Proof of Agreement by its CID.","Ink! message to retrieve a Proof of Authority by its CID.","Ink! message to retrieve a Proof of Signature by its CID.","","","","","","","","","","","","","Ink! message to store a Proof of Agreement.","Ink! message to store a Proof of Authority.","Ink! message to store a Proof of Signature.","","","","","","","","","","","","","","","","","","","","","","","","","Validates a signed Proof-of-Agreement message.","Validates a signed Proof-of-Authority message.","Validates a signed Proof-of-Signature message."],"i":[0,0,0,0,12,0,12,0,12,0,0,0,0,0,0,0,1,1,9,12,13,14,15,1,2,3,4,5,6,7,9,12,13,14,15,1,2,3,4,5,6,7,1,1,1,2,3,4,5,6,7,1,2,3,4,5,6,7,9,12,12,13,13,14,14,15,15,1,1,2,2,3,3,4,4,5,5,6,6,7,7,12,13,14,15,1,2,3,4,5,6,7,12,13,14,15,1,2,3,4,5,6,7,12,13,14,15,1,2,3,4,5,6,7,9,12,13,13,14,14,15,15,1,1,2,3,4,5,6,7,12,13,14,15,1,2,3,4,5,6,7,9,9,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,9,12,12,12,12,13,14,15,1,2,3,4,5,6,7,1,9,1,9,1,9,1,1,9,12,13,14,15,1,2,3,4,5,6,7,9,1,2,3,4,5,6,7,9,1,9,1,12,13,14,15,1,2,3,4,5,6,7,9,1,9,1,9,1,1,12,13,14,15,1,2,3,4,5,6,7,1,2,3,4,5,6,7,12,13,14,15,9,12,13,14,15,1,2,3,4,5,6,7,1,1,1,9,12,13,14,15,1,2,3,4,5,6,7,1,1,1,9,12,13,14,15,1,2,3,4,5,6,7,9,1,2,3,4,5,6,7,13,14,15,1,9,9,9],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1],[1],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1],[1],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[8,[[11,[9,10]]]],[8,[[11,[12,10]]]],[8,[[11,[10]]]],[8,[[11,[13,10]]]],[8,[[11,[10]]]],[8,[[11,[10]]]],[8,[[11,[14,10]]]],[8,[[11,[15,10]]]],[8,[[11,[10]]]],[8,[[11,[10]]]],[8,[[11,[1,10]]]],[8,[[11,[10]]]],[8,[[11,[2,10]]]],[8,[[11,[3,10]]]],[8,[[11,[10]]]],[8,[[11,[10]]]],[8,[[11,[4,10]]]],[8,[[11,[5,10]]]],[8,[[11,[10]]]],[8,[[11,[10]]]],[8,[[11,[6,10]]]],[8,[[11,[7,10]]]],[8,[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,[17,[16]]],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[18,8],[[11,[10]]]],[[9,[0,[19,20]]]],[[[0,[19,20]]]],[[[0,[19,20]]]],[13,[[21,[16]]]],[[[0,[19,20]]]],[14,[[21,[16]]]],[[[0,[19,20]]]],[15,[[21,[16]]]],[1,[[21,[16]]]],[[[0,[19,20]]]],[[[0,[19,20]]]],[[[0,[19,20]]]],[[[0,[19,20]]]],[[[0,[19,20]]]],[[[0,[19,20]]]],[[[0,[19,20]]]],[[12,[0,[19,20]]]],[[13,[0,[19,20]]]],[[14,[0,[19,20]]]],[[15,[0,[19,20]]]],[[1,[0,[19,20]]]],[[2,[0,[19,20]]]],[[3,[0,[19,20]]]],[[4,[0,[19,20]]]],[[5,[0,[19,20]]]],[[6,[0,[19,20]]]],[[7,[0,[19,20]]]],[[]],[9],[[1,1],22],[[2,2],22],[[3,3],22],[[4,4],22],[[5,5],22],[[6,6],22],[[7,7],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[1,23],24],[[2,23],24],[[3,23],24],[[4,23],24],[[5,23],24],[[6,23],24],[[7,23],24],[[]],[14,12],[15,12],[[]],[13,12],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],1],[[9,25],5],[[1,25],5],[[9,25],7],[[1,25],7],[[9,25],6],[[1,25],6],[[1,26]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[27,28],[27,28],[27,28],[27,28],[27,28],[27,28],[27,28],[27,28],[29,9],[29,[[39,[1,30,[30,[31]],30,[36,[[35,[[34,[[32,[29]],33]]]]]],[30,[37]],[36,[[38,[1]]]]]]]],[1],[[]],[12,40],[13,40],[14,40],[15,40],[1,40],[2,40],[3,40],[4,40],[5,40],[6,40],[7,40],[[9,5]],[[1,5]],[[9,7]],[[1,7]],[[9,6]],[[1,6]],[1],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[[17,[16]]],[[21,[16,41]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[12,[45,[42,43,[44,[43]]]]]],[[13,[45,[42,43,[44,[43]]]]]],[[14,[45,[42,43,[44,[43]]]]]],[[15,[45,[42,43,[44,[43]]]]]],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[1,25],[[46,[5]]]],[[1,25],[[46,[7]]]],[[1,25],[[46,[6]]]],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[1,5],46],[[1,7],46],[[1,6],46],[[],47],[[],47],[[],47],[[],47],[[],47],[[],47],[[],47],[[],47],[[],47],[[],47],[[],47],[[],47],[[],48],[[],48],[[],48],[[],48],[[],48],[[],48],[[],48],[[],48],[[13,49]],[[14,49]],[[15,49]],[[1,49]],[[9,5],22],[[9,7],22],[[9,6],22]],"c":[],"p":[[3,"DAOsignAppRef"],[3,"SignedProofOfAgreementMsg"],[3,"SignedProofOfSignatureMsg"],[3,"SignedProofOfAuthorityMsg"],[3,"SignedProofOfAgreement"],[3,"SignedProofOfSignature"],[3,"SignedProofOfAuthority"],[8,"Input"],[3,"DAOsignApp"],[3,"Error"],[4,"Result"],[4,"__ink_EventBase"],[3,"NewProofOfAuthority"],[3,"NewProofOfSignature"],[3,"NewProofOfAgreement"],[15,"u8"],[15,"slice"],[15,"u32"],[8,"Output"],[8,"Sized"],[3,"Vec"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"String"],[8,"Hasher"],[6,"Key"],[4,"Layout"],[3,"EIP712Domain"],[3,"Unset"],[15,"u64"],[3,"Argument"],[6,"EmptyArgumentList"],[3,"ArgumentList"],[3,"ExecutionInput"],[3,"Set"],[4,"Salt"],[3,"ReturnType"],[3,"CreateBuilder"],[15,"usize"],[3,"Global"],[4,"Uninit"],[8,"Environment"],[8,"TopicsBuilderBackend"],[3,"TopicsBuilder"],[6,"MessageResult"],[3,"TypeId"],[3,"Type"],[8,"FnOnce"]]},\
"daosign_eip712":{"doc":"DAOsign EIP-712 Contract","t":"ADDDDDDDDDDDDDDMMMMMMMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMMMMMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMMMMMMLLLLMMMMMMMMMLLLLLLLLMMMMMLLLLLLLLLLLLLMMMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMM","n":["daosign_eip712","DAOsignEIP712","DAOsignEIP712Ref","EIP712Domain","EIP712ProofOfAgreement","EIP712ProofOfAgreementTypes","EIP712ProofOfAuthority","EIP712ProofOfAuthorityTypes","EIP712ProofOfSignature","EIP712ProofOfSignatureTypes","EIP712PropertyType","ProofOfAgreement","ProofOfAuthority","ProofOfSignature","Signer","addr","agreement_cid","agreement_cid","agreement_cid","app","app","app","as_mut","as_ref","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","call","call_mut","chain_id","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_all_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","decode_with_depth_limit","default","default","default","domain","domain_hash","eip712_domain","eip712_domain","eip712_domain","eip712domain_typehash","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","encode_to","env","env","eq","eq","eq","eq","eq","eq","eq","eq","eq","eq","eq","eq","eq","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from_account_id","hash","hash_domain","hash_domain","hash_proof_of_agreement","hash_proof_of_agreement","hash_proof_of_authority","hash_proof_of_authority","hash_proof_of_signature","hash_proof_of_signature","hash_signer","hash_signer","hash_signers","hash_signers","hash_strings","hash_strings","into","into","into","into","into","into","into","into","into","into","into","into","into","into","layout","layout","layout","layout","layout","layout","layout","layout","layout","layout","layout","layout","layout","layout","metadata","metadata","metadata","metadata","name","name","name","new","new","ok","ok","proof_of_agreement","proof_of_agreement_typehash","proof_of_agreement_types","proof_of_authority","proof_of_authority_typehash","proof_of_authority_types","proof_of_signature","proof_of_signature_typehash","proof_of_signature_types","recover","recover","recover_proof_of_agreement","recover_proof_of_agreement","recover_proof_of_authority","recover_proof_of_authority","recover_proof_of_signature","recover_proof_of_signature","signature_cids","signer","signer","signer_typehash","signers","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","size_hint","timestamp","timestamp","timestamp","to_account_id","to_eip712_message_proof_of_agreement","to_eip712_message_proof_of_agreement","to_eip712_message_proof_of_authority","to_eip712_message_proof_of_authority","to_eip712_message_proof_of_signature","to_eip712_message_proof_of_signature","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_keyed_vec","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_hash_domain","try_hash_proof_of_agreement","try_hash_proof_of_authority","try_hash_proof_of_signature","try_hash_signer","try_hash_signers","try_hash_strings","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_recover","try_recover_proof_of_agreement","try_recover_proof_of_authority","try_recover_proof_of_signature","try_to_eip712_message_proof_of_agreement","try_to_eip712_message_proof_of_authority","try_to_eip712_message_proof_of_signature","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_info","type_info","type_info","type_info","type_info","type_info","type_info","type_info","type_info","type_info","type_info","type_info","type_info","type_info","using_encoded","verifying_contract","version"],"q":[[0,"daosign_eip712"],[1,"daosign_eip712::daosign_eip712"]],"d":["","Contract Storage struct","Contract Storage struct","EIP-712 Domain struct representing the domain-specific …","EIP712ProofOfAgreement struct representing the EIP-712 …","EIP712ProofOfAgreementTypes struct representing the types …","EIP712ProofOfAuthority struct representing the EIP-712 …","EIP712ProofOfAuthorityTypes struct representing the types …","EIP712ProofOfSignature struct representing the EIP-712 …","EIP712ProofOfSignatureTypes struct representing the types …","EIP712PropertyType struct representing the structure of …","ProofOfAgreement struct representing the …","ProofOfAuthority struct representing the …","ProofOfSignature struct representing the …","Signer struct representing an address and associated …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","Ink! function to get the hash of an EIP712Domain struct.","Ink! function to get the hash of an EIP712Domain struct.","Ink! function to get the hash of a ProofOfAgreement struct.","Ink! function to get the hash of a ProofOfAgreement struct.","Ink! function to get the hash of a ProofOfAuthority struct.","Ink! function to get the hash of a ProofOfAuthority struct.","Ink! function to get the hash of a ProofOfSignature struct.","Ink! function to get the hash of a ProofOfSignature struct.","Ink! function to get the hash of a Signer struct.","Ink! function to get the hash of a Signer struct.","Ink! function to get the hash of an array of Signer …","Ink! function to get the hash of an array of Signer …","Ink! function to get the hash of an array of strings.","Ink! function to get the hash of an array of strings.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","Ink! constructor for creating a new DAOsignEIP712 instance.","Ink! constructor for creating a new DAOsignEIP712 instance.","","","","","","","","","","","","Recover function for retrieving the Ethereum address from …","Recover function for retrieving the Ethereum address from …","Recover function for Proof of Agreement, retrieving the …","Recover function for Proof of Agreement, retrieving the …","Recover function for Proof of Authority, retrieving the …","Recover function for Proof of Authority, retrieving the …","Recover function for Proof of Signature, retrieving the …","Recover function for Proof of Signature, retrieving the …","","","","","","","","","","","","","","","","","","","","","","","Convert ProofOfAgreement struct to EIP-712 formatted …","Convert ProofOfAgreement struct to EIP-712 formatted …","Convert ProofOfAuthority struct to EIP-712 formatted …","Convert ProofOfAuthority struct to EIP-712 formatted …","Convert ProofOfSignature struct to EIP-712 formatted …","Convert ProofOfSignature struct to EIP-712 formatted …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Ink! function to get the hash of an EIP712Domain struct.","Ink! function to get the hash of a ProofOfAgreement struct.","Ink! function to get the hash of a ProofOfAuthority struct.","Ink! function to get the hash of a ProofOfSignature struct.","Ink! function to get the hash of a Signer struct.","Ink! function to get the hash of an array of Signer …","Ink! function to get the hash of an array of strings.","","","","","","","","","","","","","","","Recover function for retrieving the Ethereum address from …","Recover function for Proof of Agreement, retrieving the …","Recover function for Proof of Authority, retrieving the …","Recover function for Proof of Signature, retrieving the …","Convert ProofOfAgreement struct to EIP-712 formatted …","Convert ProofOfAuthority struct to EIP-712 formatted …","Convert ProofOfSignature struct to EIP-712 formatted …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,9,10,11,9,10,11,1,1,15,1,2,3,4,5,6,7,8,9,10,11,12,13,15,1,2,3,4,5,6,7,8,9,10,11,12,13,1,1,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,15,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,5,6,7,15,15,5,6,7,15,15,1,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,15,15,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,15,1,2,3,4,5,6,7,8,9,10,11,12,13,15,1,2,3,4,5,6,7,8,9,10,11,12,13,11,1,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,2,3,4,5,6,7,8,9,10,11,12,13,15,1,2,3,4,5,6,7,8,9,10,11,12,13,9,10,11,12,10,11,13,15,1,15,1,5,15,15,7,15,15,6,15,15,15,1,15,1,15,1,15,1,9,7,10,15,11,1,2,3,4,5,6,7,8,9,10,11,12,13,9,10,11,1,15,1,15,1,15,1,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,15,1,2,3,4,5,6,7,8,9,10,11,12,13,1,1,1,1,1,1,1,15,1,2,3,4,5,6,7,8,9,10,11,12,13,1,1,1,1,1,1,1,15,1,2,3,4,5,6,7,8,9,10,11,12,13,15,1,2,3,4,5,6,7,8,9,10,11,12,13,1,13,13],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1],[1],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1],[1],0,[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[14,[[17,[15,16]]]],[14,[[17,[16]]]],[14,[[17,[1,16]]]],[14,[[17,[2,16]]]],[14,[[17,[16]]]],[14,[[17,[3,16]]]],[14,[[17,[16]]]],[14,[[17,[16]]]],[14,[[17,[4,16]]]],[14,[[17,[5,16]]]],[14,[[17,[16]]]],[14,[[17,[16]]]],[14,[[17,[6,16]]]],[14,[[17,[16]]]],[14,[[17,[7,16]]]],[14,[[17,[8,16]]]],[14,[[17,[16]]]],[14,[[17,[16]]]],[14,[[17,[9,16]]]],[14,[[17,[10,16]]]],[14,[[17,[16]]]],[14,[[17,[11,16]]]],[14,[[17,[16]]]],[14,[[17,[16]]]],[14,[[17,[12,16]]]],[14,[[17,[13,16]]]],[14,[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,[19,[18]]],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[20,14],[[17,[16]]]],[[],5],[[],6],[[],7],0,0,0,0,0,0,[[15,[0,[21,22]]]],[[[0,[21,22]]]],[1,[[23,[18]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[[0,[21,22]]]],[[1,[0,[21,22]]]],[[2,[0,[21,22]]]],[[3,[0,[21,22]]]],[[4,[0,[21,22]]]],[[5,[0,[21,22]]]],[[6,[0,[21,22]]]],[[7,[0,[21,22]]]],[[8,[0,[21,22]]]],[[9,[0,[21,22]]]],[[10,[0,[21,22]]]],[[11,[0,[21,22]]]],[[12,[0,[21,22]]]],[[13,[0,[21,22]]]],[15],[[]],[[1,1],24],[[2,2],24],[[3,3],24],[[4,4],24],[[5,5],24],[[6,6],24],[[7,7],24],[[8,8],24],[[9,9],24],[[10,10],24],[[11,11],24],[[12,12],24],[[13,13],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[15,25],26],[[1,25],26],[[2,25],26],[[3,25],26],[[4,25],26],[[5,25],26],[[6,25],26],[[7,25],26],[[8,25],26],[[9,25],26],[[10,25],26],[[11,25],26],[[12,25],26],[[13,25],26],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,[[],1],[[1,27]],[[15,13],[[28,[18]]]],[[1,13],[[28,[18]]]],[[15,9],[[28,[18]]]],[[1,9],[[28,[18]]]],[[15,11],[[28,[18]]]],[[1,11],[[28,[18]]]],[[15,10],[[28,[18]]]],[[1,10],[[28,[18]]]],[[15,12],[[28,[18]]]],[[1,12],[[28,[18]]]],[[15,[23,[12]]],[[28,[18]]]],[[1,[23,[12]]],[[28,[18]]]],[[15,[23,[29]]],[[28,[18]]]],[[1,[23,[29]]],[[28,[18]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[30,31],[30,31],[30,31],[30,31],[30,31],[30,31],[30,31],[30,31],[30,31],[30,31],[30,31],[30,31],[30,31],[30,31],0,0,0,0,0,0,0,[13,15],[13,[[41,[1,32,[32,[33]],32,[38,[[37,[[36,[[34,[13]],35]]]]]],[32,[39]],[38,[[40,[1]]]]]]]],[1],[[]],0,0,0,0,0,0,0,0,0,[[15,[28,[18]],[28,[18]]],[[28,[18]]]],[[1,[28,[18]],[28,[18]]],[[28,[18]]]],[[15,9,[28,[18]]],[[28,[18]]]],[[1,9,[28,[18]]],[[28,[18]]]],[[15,11,[28,[18]]],[[28,[18]]]],[[1,11,[28,[18]]],[[28,[18]]]],[[15,10,[28,[18]]],[[28,[18]]]],[[1,10,[28,[18]]],[[28,[18]]]],0,0,0,0,0,[1,42],[2,42],[3,42],[4,42],[5,42],[6,42],[7,42],[8,42],[9,42],[10,42],[11,42],[12,42],[13,42],0,0,0,[1],[[15,9],2],[[1,9],2],[[15,11],4],[[1,11],4],[[15,10],3],[[1,10],3],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[[19,[18]]],[[23,[18,43]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[1,13],[[44,[[28,[18]]]]]],[[1,9],[[44,[[28,[18]]]]]],[[1,11],[[44,[[28,[18]]]]]],[[1,10],[[44,[[28,[18]]]]]],[[1,12],[[44,[[28,[18]]]]]],[[1,[23,[12]]],[[44,[[28,[18]]]]]],[[1,[23,[29]]],[[44,[[28,[18]]]]]],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[1,[28,[18]],[28,[18]]],[[44,[[28,[18]]]]]],[[1,9,[28,[18]]],[[44,[[28,[18]]]]]],[[1,11,[28,[18]]],[[44,[[28,[18]]]]]],[[1,10,[28,[18]]],[[44,[[28,[18]]]]]],[[1,9],[[44,[2]]]],[[1,11],[[44,[4]]]],[[1,10],[[44,[3]]]],[[],45],[[],45],[[],45],[[],45],[[],45],[[],45],[[],45],[[],45],[[],45],[[],45],[[],45],[[],45],[[],45],[[],45],[[],46],[[],46],[[],46],[[],46],[[],46],[[],46],[[],46],[[],46],[[],46],[[],46],[[],46],[[],46],[[],46],[[],46],[[1,47]],0,0],"c":[],"p":[[3,"DAOsignEIP712Ref"],[3,"EIP712ProofOfAgreement"],[3,"EIP712ProofOfSignature"],[3,"EIP712ProofOfAuthority"],[3,"EIP712ProofOfAgreementTypes"],[3,"EIP712ProofOfSignatureTypes"],[3,"EIP712ProofOfAuthorityTypes"],[3,"EIP712PropertyType"],[3,"ProofOfAgreement"],[3,"ProofOfSignature"],[3,"ProofOfAuthority"],[3,"Signer"],[3,"EIP712Domain"],[8,"Input"],[3,"DAOsignEIP712"],[3,"Error"],[4,"Result"],[15,"u8"],[15,"slice"],[15,"u32"],[8,"Output"],[8,"Sized"],[3,"Vec"],[15,"bool"],[3,"Formatter"],[6,"Result"],[8,"Hasher"],[15,"array"],[3,"String"],[6,"Key"],[4,"Layout"],[3,"Unset"],[15,"u64"],[3,"Argument"],[6,"EmptyArgumentList"],[3,"ArgumentList"],[3,"ExecutionInput"],[3,"Set"],[4,"Salt"],[3,"ReturnType"],[3,"CreateBuilder"],[15,"usize"],[3,"Global"],[6,"MessageResult"],[3,"TypeId"],[3,"Type"],[8,"FnOnce"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
